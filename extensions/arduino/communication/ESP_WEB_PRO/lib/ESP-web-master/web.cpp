#include "web.h"
#include <functional>

#ifdef DEBUG_MODE
#define debugPrintln(...) Serial.println(__VA_ARGS__)
#else
#define debugPrintln(...)
#endif

AsyncWebSocket ws("/dashws");


// Handle Websocket Requests
void webClass::onWsEvent(AsyncWebSocket * server, AsyncWebSocketClient * client, AwsEventType type, void * arg, uint8_t *data, size_t len){
    if(type == WS_EVT_CONNECT){
        debugPrintln("[WEBSOCKET] Client connection received");
    } else if(type == WS_EVT_DISCONNECT){
        debugPrintln("[WEBSOCKET] Client disconnected");
    } else if(type == WS_EVT_DATA){
        AwsFrameInfo *info = (AwsFrameInfo*)arg;
        if (info->final && info->index == 0 && info->len == len) {
            String message = "";
            if (info->opcode == WS_TEXT) {
                for (size_t i=0; i<info->len; i++) message += (char)data[i];
            } else {
                char buff[3];
                for (size_t i=0; i<info->len; i++) {
                    sprintf(buff, "%02x ", (uint8_t) data[i]);
                    message += buff ;
                }
            }
            
            debugPrintln("[WEBSOCKET] Message Received: "+message);

            StaticJsonDocument<500> doc;
            DeserializationError err = deserializeJson(doc, message);
            if (err) {
                debugPrintln(F("deserializeJson() failed: "));
                debugPrintln(err.c_str());
            }else{
                JsonObject object = doc.as<JsonObject>();
                String command = object["command"];
                if(command != ""){
                    if(command == "getLayout"){
                        debugPrintln("[WEBSOCKET] Got getLayout Command from Client "+String(client->id()));
                        String result = "";
                        web.generateLayoutResponse(result);
                        ws.text(client->id(), result);
                    }else if(command == "getStats"){
                        debugPrintln("[WEBSOCKET] Got getStats Command from Client "+String(client->id()));
                        String result = "";
                        web.generateStatsResponse(result);
                        ws.text(client->id(), result);
                    }else if(command == "reboot"){
                        String result = "";
                        web.generateRebootResponse(result);
                        ws.text(client->id(), result);
                        #if defined(ESP8266)
                            ESP.restart();
                        #elif defined(ESP32)
                            esp_task_wdt_init(1,true);
                            esp_task_wdt_add(NULL);
                            while(true);
                        #endif
                    }else if(command == "buttonClicked"){
                        if(web._buttonClickFunc != NULL){
                            const char* buttonId = object["id"];
                            for(int i=0; i < BUTTON_CARD_LIMIT; i++){
                                if(web.button_card_id[i] == buttonId){
                                    web._buttonClickFunc(buttonId);
                                    return;
                                }
                            }

                            debugPrintln("buttonClicked Command didn't match any ID in our records! Rouge Request...");
                        }
                    } else if (command == "sliderChanged"){
                        if(web._sliderChangedFunc != NULL){
                            const char* sliderId = object["id"];
                            int sliderValue = object["value"];
                            for(int i=0; i < SLIDER_CARD_LIMIT; i++){
                                if(web.slider_card_id[i] == sliderId){
                                    web._sliderChangedFunc(sliderId, sliderValue);
                                    // Send Confirmation
                                    web.slider_card_value[i] = sliderValue;
                                    ws.textAll("{\"response\": \"updateSliderCard\", \"id\": \""+(String)sliderId+"\", \"value\": "+sliderValue+"}");
                                    return;
                                }
                            }

                            debugPrintln("sliderChanged Command didn't match any ID in our records! Rouge Request...");
                        }                    
                    }
                }else{
                    debugPrintln("[WEBSOCKET] Invalid Command");
                }
            }
        }
    }
}


//////////////////////
// Public Functions //
//////////////////////

void webClass::init(AsyncWebServer& server){
    server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
        // Send File
        AsyncWebServerResponse *response = request->beginResponse_P(200, "text/html", DASH_HTML, DASH_HTML_SIZE);
        response->addHeader("Content-Encoding","gzip");
        request->send(response);        
    });

    #ifdef DEBUG_MODE
    server.on("/debug", HTTP_GET, [&](AsyncWebServerRequest *request){
        String json = "";
        generateLayoutResponse(json);
        request->send(200, "application/json", json);
    });
    #endif

    ws.onEvent(onWsEvent);
    server.addHandler(&ws);
}




/////////////////
// Number Card //
/////////////////


// Add Number Card with Custom Value
void webClass::addNumberCard(const char* _id, const char* _name, int _value){
    if(_id != NULL){
        for(int i=0; i < NUMBER_CARD_LIMIT; i++){
            if(number_card_id[i] == ""){
                debugPrintln("[DASH] Found an empty slot in Number Cards. Inserted New Card at Index ["+String(i)+"].");

                number_card_id[i] = _id;
                number_card_name[i] = _name;
                number_card_value[i] = _value;

                ws.textAll("{\"response\": \"updateLayout\"}");
                break;
            }
        }
        return;
    }else{
        return;
    }
}


// Update Number Card with Custom Value
void webClass::updateNumberCard(const char* _id, int _value){
    for(int i=0; i < NUMBER_CARD_LIMIT; i++){
        if(number_card_id[i] == _id){
            debugPrintln("[DASH] Updated Number Card at Index ["+String(i)+"].");

            number_card_value[i] = _value;

            DynamicJsonDocument doc(250);
            JsonObject object = doc.to<JsonObject>();
            object["response"] = "updateNumberCard";
            object["id"] = number_card_id[i];
            object["value"] = number_card_value[i];
            size_t len = measureJson(doc);
            AsyncWebSocketMessageBuffer * buffer = ws.makeBuffer(len);
            if (buffer) {
                serializeJson(doc, (char *)buffer->get(), len + 1);
                ws.textAll(buffer);
            }else{
                debugPrintln("[DASH] Websocket Buffer Error");
            }
            break;
        }
    }
    return;
}



//////////////////////
// Temperature Card //
//////////////////////


// Add Temperature Card with Custom Value
void webClass::addTemperatureCard(const char* _id, const char* _name, int _type, int _value){
    if(_id != NULL && _type >= 0 && _type <= TEMPERATURE_CARD_TYPES){
        for(int i=0; i < TEMPERATURE_CARD_LIMIT; i++){
            if(temperature_card_id[i] == ""){
                debugPrintln("[DASH] Found an empty slot in Temperature Cards. Inserted New Card at Index ["+String(i)+"].");

                temperature_card_id[i] = _id;
                temperature_card_name[i] = _name;
                temperature_card_type[i] = _type;
                temperature_card_value[i] = _value;

                ws.textAll("{\"response\": \"updateLayout\"}");
                break;
            }
        }
        return;
    }else{
        return;
    }
}


// Update Temperature Card with custom value
void webClass::updateTemperatureCard(const char* _id, int _value){
    for(int i=0; i < TEMPERATURE_CARD_LIMIT; i++){
        if(temperature_card_id[i] == _id){
            debugPrintln("[DASH] Updated Temperature Card at Index ["+String(i)+"].");

            temperature_card_value[i] = _value;

            DynamicJsonDocument doc(250);
            JsonObject object = doc.to<JsonObject>();
            object["response"] = "updateTemperatureCard";
            object["id"] = temperature_card_id[i];
            object["value"] = temperature_card_value[i];
            size_t len = measureJson(doc);
            AsyncWebSocketMessageBuffer * buffer = ws.makeBuffer(len);
            if (buffer) {
                serializeJson(doc, (char *)buffer->get(), len + 1);
                ws.textAll(buffer);
            }else{
                debugPrintln("[DASH] Websocket Buffer Error");
            }
            break;
        }
    }
    return;
}



///////////////////
// Humidity Card //
///////////////////


// Add Humidity Card with Custom Value
void webClass::addHumidityCard(const char* _id, const char* _name, int _value){
    if(_id != NULL){
        for(int i=0; i < HUMIDITY_CARD_LIMIT; i++){
            if(humidity_card_id[i] == ""){
                debugPrintln("[DASH] Found an empty slot in Humidity Cards. Inserted New Card at Index ["+String(i)+"].");

                humidity_card_id[i] = _id;
                humidity_card_name[i] = _name;
                humidity_card_value[i] = _value;

                ws.textAll("{\"response\": \"updateLayout\"}");
                break;
            }
        }
        return;
    }else{
        return;
    }
}


// Update Humidity Card with Custom Value
void webClass::updateHumidityCard(const char* _id, int _value){
    for(int i=0; i < HUMIDITY_CARD_LIMIT; i++){
        if(humidity_card_id[i] == _id){
            debugPrintln("[DASH] Updated Humidity Card at Index ["+String(i)+"].");

            humidity_card_value[i] = _value;

            DynamicJsonDocument doc(250);
            JsonObject object = doc.to<JsonObject>();
            object["response"] = "updateHumidityCard";
            object["id"] = humidity_card_id[i];
            object["value"] = humidity_card_value[i];
            size_t len = measureJson(doc);
            AsyncWebSocketMessageBuffer * buffer = ws.makeBuffer(len);
            if (buffer) {
                serializeJson(doc, (char *)buffer->get(), len + 1);
                ws.textAll(buffer);
            }else{
                debugPrintln("[DASH] Websocket Buffer Error");
            }
            break;
        }
    }
    return;
}



/////////////////
// Status Card //
/////////////////


// Add Status Card with Custom Value
void webClass::addStatusCard(const char* _id, const char* _name, int _value){
    if(_id != NULL && _value >= 0 && _value <= STATUS_CARD_TYPES){
        for(int i=0; i < STATUS_CARD_LIMIT; i++){
            if(status_card_id[i] == ""){
                debugPrintln("[DASH] Found an empty slot in Status Cards. Inserted New Card at Index ["+String(i)+"].");

                status_card_id[i] = _id;
                status_card_name[i] = _name;
                status_card_value[i] = _value;

                ws.textAll("{\"response\": \"updateLayout\"}");
                break;
            }
        }
        return;
    }else{
        return;
    }
}


// Add Status Card with Custom Boolean Value
void webClass::addStatusCard(const char* _id, const char* _name, bool _value){
    addStatusCard(_id, _name, _value ? 1 : 0);
}


// Update Status Card with Custom Value
void webClass::updateStatusCard(const char* _id, int _value){
    if(_value >= 0 && _value <= STATUS_CARD_TYPES){
        for(int i=0; i < STATUS_CARD_LIMIT; i++){
            if(status_card_id[i] == _id){
                debugPrintln("[DASH] Updated Status Card at Index ["+String(i)+"].");

                status_card_value[i] = _value;

                DynamicJsonDocument doc(250);
                JsonObject object = doc.to<JsonObject>();
                object["response"] = "updateStatusCard";
                object["id"] = status_card_id[i];
                object["value"] = status_card_value[i];
                size_t len = measureJson(doc);
                AsyncWebSocketMessageBuffer * buffer = ws.makeBuffer(len);
                if (buffer) {
                    serializeJson(doc, (char *)buffer->get(), len + 1);
                    ws.textAll(buffer);
                }else{
                    debugPrintln("[DASH] Websocket Buffer Error");
                }
                break;
            }
        }
        return;
    }else{
        return;
    }
}


// Update Status Card with Custom Value
void webClass::updateStatusCard(const char* _id, bool _value){
    updateStatusCard(_id, _value ? 1 : 0);
}



/////////////////
// Button Card //
/////////////////

// Add Button Card
void webClass::addButtonCard(const char* _id, const char* _name){
    if(_id != NULL){
        for(int i=0; i < BUTTON_CARD_LIMIT; i++){
            if(button_card_id[i] == ""){
                debugPrintln("[DASH] Found an empty slot in Button Cards. Inserted New Card at Index ["+String(i)+"].");

                button_card_id[i] = _id;
                button_card_name[i] = _name;
                break;
            }
        }
        return;
    }else{
        return;
    }
}


/////////////////
// Slider Card //
/////////////////

// Add Slider Card
void webClass::addSliderCard(const char* _id, const char* _name, int _type){
    if(_id != NULL && _type >= 0 && _type <= SLIDER_CARD_TYPES){
        for(int i=0; i < SLIDER_CARD_LIMIT; i++){
            if(slider_card_id[i] == ""){
                debugPrintln("[DASH] Found an empty slot in Slider Cards. Inserted New Card at Index ["+String(i)+"].");

                slider_card_id[i]    = _id;
                slider_card_name[i]  = _name;
                slider_card_type[i]  = _type;
                slider_card_value[i] = 0;

                ws.textAll("{\"response\": \"updateLayout\"}");
                break;
            }
        }
        return;
    }else{
        return;
    }
}

// Update Slider Card with Custom Value
void webClass::updateSliderCard(const char* _id, int _value){
    for(int i=0; i < SLIDER_CARD_LIMIT; i++){
        if(slider_card_id[i] == _id){
            debugPrintln("[DASH] Updated Slider Card at Index ["+String(i)+"].");

            slider_card_value[i] = _value;

            DynamicJsonDocument doc(250);
            JsonObject object = doc.to<JsonObject>();
            object["response"] = "updateSliderCard";
            object["id"] = slider_card_id[i];
            object["value"] = slider_card_value[i];
            size_t len = measureJson(doc);
            AsyncWebSocketMessageBuffer * buffer = ws.makeBuffer(len);
            if (buffer) {
                serializeJson(doc, (char *)buffer->get(), len + 1);
                ws.textAll(buffer);
            }else{
                debugPrintln("[DASH] Websocket Buffer Error (updateSliderCard())");
            }
            break;
        }
    }
    return;
}



////////////////
// Line Chart //
////////////////

// Add Line Chart
void webClass::addLineChart(const char* _id, const char* _name, int _x_axis_value[], int _x_axis_size, const char* _y_axis_name, int _y_axis_value[], int _y_axis_size){
    if(_id != NULL){
        for(int i=0; i < LINE_CHART_LIMIT; i++){
            if(line_chart_id[i] == ""){
                debugPrintln("[DASH] Found an empty slot in Line Charts. Inserted New Chart at Index ["+String(i)+"].");

                line_chart_id[i] = _id;
                line_chart_name[i] = _name;
                line_chart_x_axis_type[i] = false;
                line_chart_x_axis_size[i] = _x_axis_size;
                line_chart_y_axis_size[i] = _y_axis_size;
                line_chart_y_axis_name[i] = _y_axis_name;

                for(int v=0; v < _x_axis_size; v++){
                    line_chart_x_axis_value_int[i][v] = _x_axis_value[v];
                }

                for(int v=0; v < _y_axis_size; v++){
                    line_chart_y_axis_value[i][v] = _y_axis_value[v];
                }

                ws.textAll("{\"response\": \"updateLayout\"}");
                break;
            }
        }
        return;
    }else{
        return;
    }
}

// Add Line Chart
void webClass::addLineChart(const char* _id, const char* _name, String _x_axis_value[], int _x_axis_size, const char* _y_axis_name, int _y_axis_value[], int _y_axis_size){
    if(_id != NULL){
        for(int i=0; i < LINE_CHART_LIMIT; i++){
            if(line_chart_id[i] == ""){
                debugPrintln("[DASH] Found an empty slot in Line Charts. Inserted New Chart at Index ["+String(i)+"].");

                line_chart_id[i] = _id;
                line_chart_name[i] = _name;
                line_chart_x_axis_type[i] = true;
                line_chart_x_axis_size[i] = _x_axis_size;
                line_chart_y_axis_size[i] = _y_axis_size;
                line_chart_y_axis_name[i] = _y_axis_name;

                for(int v=0; v < _x_axis_size; v++){
                    line_chart_x_axis_value_string[i][v] = _x_axis_value[v];
                }

                for(int v=0; v < _y_axis_size; v++){
                    line_chart_y_axis_value[i][v] = _y_axis_value[v];
                }

                ws.textAll("{\"response\": \"updateLayout\"}");
                break;
            }
        }
        return;
    }else{
        return;
    }
}


// Update Line Chart of Int x Axis
void webClass::updateLineChart(const char* _id, int _x_axis_value[], int _x_axis_size, int _y_axis_value[], int _y_axis_size){
    for(int i=0; i < LINE_CHART_LIMIT; i++){
        if(line_chart_id[i] == _id){
            debugPrintln("[DASH] Updated Line Chart at Index ["+String(i)+"].");

            if(line_chart_x_axis_type[i] == false){
                
                DynamicJsonDocument doc(1000);
                JsonObject object = doc.to<JsonObject>();
                object["response"] = "updateLineChart";
                object["id"] = line_chart_id[i];

                line_chart_x_axis_size[i] = _x_axis_size;
                line_chart_y_axis_size[i] = _y_axis_size;

                JsonArray xaxis = object.createNestedArray("x_axis_value");
                for(int v=0; v < _x_axis_size; v++){
                    line_chart_x_axis_value_int[i][v] = _x_axis_value[v];
                    xaxis.add(line_chart_x_axis_value_int[i][v]);
                }

                JsonArray yaxis = object.createNestedArray("y_axis_value");
                for(int v=0; v < _y_axis_size; v++){
                    line_chart_y_axis_value[i][v] = _y_axis_value[v];
                    yaxis.add(line_chart_y_axis_value[i][v]);
                }

                size_t len = measureJson(doc);
                AsyncWebSocketMessageBuffer * buffer = ws.makeBuffer(len);
                if (buffer) {
                    serializeJson(doc, (char *)buffer->get(), len + 1);
                    ws.textAll(buffer);
                }else{
                    debugPrintln("[DASH] Websocket Buffer Error");
                }
            }
            break;
        }
    }
    return;
}


// Update Line Chart of String x Axis
void webClass::updateLineChart(const char* _id, String _x_axis_value[], int _x_axis_size, int _y_axis_value[], int _y_axis_size){
    for(int i=0; i < LINE_CHART_LIMIT; i++){
        if(line_chart_id[i] == _id){
            debugPrintln("[DASH] Updated Line Chart at Index ["+String(i)+"].");

            if(line_chart_x_axis_type[i] == true){
                
                DynamicJsonDocument doc(1000);
                JsonObject object = doc.to<JsonObject>();
                object["response"] = "updateLineChart";
                object["id"] = line_chart_id[i];

                line_chart_x_axis_size[i] = _x_axis_size;
                line_chart_y_axis_size[i] = _y_axis_size;

                JsonArray xaxis = object.createNestedArray("x_axis_value");
                for(int v=0; v < _x_axis_size; v++){
                    line_chart_x_axis_value_string[i][v] = _x_axis_value[v];
                    xaxis.add(line_chart_x_axis_value_string[i][v]);
                }
                
                JsonArray yaxis = object.createNestedArray("y_axis_value");
                for(int v=0; v < _y_axis_size; v++){
                    line_chart_y_axis_value[i][v] = _y_axis_value[v];
                    yaxis.add(line_chart_y_axis_value[i][v]);
                }

                size_t len = measureJson(doc);
                AsyncWebSocketMessageBuffer * buffer = ws.makeBuffer(len);
                if (buffer) {
                    serializeJson(doc, (char *)buffer->get(), len + 1);
                    ws.textAll(buffer);
                }else{
                    debugPrintln("[DASH] Websocket Buffer Error");
                }
            }
            break;
        }
    }
    return;
}


/////////////////
// Gauge Chart //
/////////////////

// Add Gauge Card with Default Value
void webClass::addGaugeChart(const char* _id, const char* _name, int _value){
    if(_id != NULL){
        for(int i=0; i < GAUGE_CHART_LIMIT; i++){
            if(gauge_chart_id[i] == ""){
                debugPrintln("[DASH] Found an empty slot in Gauge Cards. Inserted New Card at Index ["+String(i)+"].");

                gauge_chart_id[i] = _id;
                gauge_chart_name[i] = _name;
                gauge_chart_value[i] = _value;
                ws.textAll("{\"response\": \"updateLayout\"}");
                break;
            }
        }
        return;
    }else{
        return;
    }
}


// Update Gauge Card with Custom Value
void webClass::updateGaugeChart(const char* _id, int _value){
    for(int i=0; i < GAUGE_CHART_LIMIT; i++){
        if(gauge_chart_id[i] == _id){
            debugPrintln("[DASH] Updated Gauge Chart at Index ["+String(i)+"].");

            gauge_chart_value[i] = _value;

            DynamicJsonDocument doc(250);
            JsonObject object = doc.to<JsonObject>();
            object["response"] = "updateGaugeChart";
            object["id"] = gauge_chart_id[i];
            object["value"] = gauge_chart_value[i];
            size_t len = measureJson(doc);
            AsyncWebSocketMessageBuffer * buffer = ws.makeBuffer(len);
            if (buffer) {
                serializeJson(doc, (char *)buffer->get(), len + 1);
                ws.textAll(buffer);
            }else{
                debugPrintln("[DASH] Websocket Buffer Error");
            }
            break;
        }
    }
    return;
}



///////////////////////
// Private Functions //
///////////////////////

void webClass::generateLayoutResponse(String& result){
    debugPrintln("Free HEAP = before = JSON Serialization: "+String(ESP.getFreeHeap()));

    size_t CAPACITY = getTotalResponseCapacity();

    DynamicJsonDocument doc(CAPACITY+1000);
    JsonObject root = doc.to<JsonObject>();
    root["response"] = "getLayout";
    root["version"] = "1";
    root["size"] = CAPACITY+1000;
    // Add Stats
    JsonObject stats = root.createNestedObject("statistics");
    if(stats_enabled){
        stats["enabled"] = true;
        stats["hardware"] = HARDWARE;
        #if defined(ESP8266)
            stats["chipId"] = String(ESP.getChipId());
            stats["sketchHash"] = ESP.getSketchMD5();
            stats["macAddress"] = String(WiFi.macAddress());
            stats["freeHeap"] = ESP.getFreeHeap();
            stats["wifiMode"] = int(WiFi.getMode());
        #elif defined(ESP32)
            stats["chipId"] = ESP.getEfuseMac();
            stats["sketchHash"] = ESP.getSketchMD5();
            stats["macAddress"] = String(WiFi.macAddress());
            stats["freeHeap"] = ESP.getFreeHeap();
            stats["wifiMode"] = int(WiFi.getMode());
        #endif
    }else{
        stats["enabled"] = false;
    }
    // Add Cards
    JsonArray cards = root.createNestedArray("cards");
    for(int i=0; i < NUMBER_CARD_LIMIT; i++){
        if(number_card_id[i] != ""){
            DynamicJsonDocument carddoc(250);
            JsonObject jsoncard = carddoc.to<JsonObject>();
            jsoncard["id"] = number_card_id[i];
            jsoncard["card_type"] = "number";
            jsoncard["name"] = number_card_name[i];
            jsoncard["value"] = number_card_value[i];
            cards.add(jsoncard);
        }
    }

    for(int i=0; i < TEMPERATURE_CARD_LIMIT; i++){
        if(temperature_card_id[i] != ""){
            DynamicJsonDocument carddoc(250);
            JsonObject jsoncard = carddoc.to<JsonObject>();
            jsoncard["id"] = temperature_card_id[i];
            jsoncard["card_type"] = "temperature";
            jsoncard["name"] = temperature_card_name[i];
            jsoncard["value_type"] = temperature_card_type[i];
            jsoncard["value"] = temperature_card_value[i];
            cards.add(jsoncard);
        }
    }

    for(int i=0; i < HUMIDITY_CARD_LIMIT; i++){
        if(humidity_card_id[i] != ""){
            DynamicJsonDocument carddoc(250);
            JsonObject jsoncard = carddoc.to<JsonObject>();
            jsoncard["id"] = humidity_card_id[i];
            jsoncard["card_type"] = "humidity";
            jsoncard["name"] = humidity_card_name[i];
            jsoncard["value"] = humidity_card_value[i];
            cards.add(jsoncard);
        }
    }

    for(int i=0; i < STATUS_CARD_LIMIT; i++){
        if(status_card_id[i] != ""){
            DynamicJsonDocument carddoc(250);
            JsonObject jsoncard = carddoc.to<JsonObject>();
            jsoncard["id"] = status_card_id[i];
            jsoncard["card_type"] = "status";
            jsoncard["name"] = status_card_name[i];
            jsoncard["value"] = status_card_value[i];
            cards.add(jsoncard);
        }
    }

    for(int i=0; i < BUTTON_CARD_LIMIT; i++){
        if(button_card_id[i] != ""){
            DynamicJsonDocument carddoc(250);
            JsonObject jsoncard = carddoc.to<JsonObject>();
            jsoncard["id"] = button_card_id[i];
            jsoncard["card_type"] = "button";
            jsoncard["name"] = button_card_name[i];
            cards.add(jsoncard);
        }
    }

    for(int i=0; i < LINE_CHART_LIMIT; i++){
        if(line_chart_id[i] != ""){
            DynamicJsonDocument carddoc(1000);
            JsonObject jsoncard = carddoc.to<JsonObject>();
            jsoncard["id"] = line_chart_id[i];
            jsoncard["card_type"] = "lineChart";
            jsoncard["name"] = line_chart_name[i];
            JsonArray xaxis = jsoncard.createNestedArray("x_axis_value");
            if(line_chart_x_axis_type[i]){ // If type = String
                for(int v = 0; v < line_chart_x_axis_size[i]; v++){
                    xaxis.add(line_chart_x_axis_value_string[i][v]);
                }
            }else{ // If type = Integer
                for(int v = 0; v < line_chart_x_axis_size[i]; v++){
                    xaxis.add(line_chart_x_axis_value_int[i][v]);
                }
            }

            jsoncard["y_axis_name"] = line_chart_y_axis_name[i];
            JsonArray yaxis = jsoncard.createNestedArray("y_axis_value");
            for(int v=0; v < line_chart_y_axis_size[i]; v++){
                yaxis.add(line_chart_y_axis_value[i][v]);
            }

            cards.add(jsoncard);
        }
    }

    for(int i=0; i < GAUGE_CHART_LIMIT; i++){
        if(gauge_chart_id[i] != ""){
            DynamicJsonDocument carddoc(250);
            JsonObject jsoncard = carddoc.to<JsonObject>();
            jsoncard["id"] = gauge_chart_id[i];
            jsoncard["card_type"] = "gaugeChart";
            jsoncard["value"] = gauge_chart_value[i];
            jsoncard["name"] = gauge_chart_name[i];
            cards.add(jsoncard);
        }
    }

    for(int i=0; i < SLIDER_CARD_LIMIT; i++){
        if(slider_card_id[i] != ""){
            DynamicJsonDocument carddoc(250);
            JsonObject jsoncard = carddoc.to<JsonObject>();
            jsoncard["id"] = slider_card_id[i];
            jsoncard["card_type"] = "slider";
            jsoncard["name"] = slider_card_name[i];
            jsoncard["value"] = slider_card_value[i];
            jsoncard["type"] = slider_card_type[i];
            cards.add(jsoncard);
        }
    }

    serializeJson(doc, result);

    debugPrintln("Free HEAP = after = JSON Serialization: "+String(ESP.getFreeHeap()));

    return;
}



void webClass::generateStatsResponse(String& result){
    debugPrintln("Free HEAP = before = JSON Serialization: "+String(ESP.getFreeHeap()));

    DynamicJsonDocument doc(500);
    JsonObject stats = doc.to<JsonObject>();
    if(stats_enabled){
        stats["response"] = "getStats";
        stats["enabled"] = true;
        stats["hardware"] = HARDWARE;
        #if defined(ESP8266)
            stats["chipId"] = String(ESP.getChipId());
            stats["sketchHash"] = ESP.getSketchMD5();
            stats["macAddress"] = String(WiFi.macAddress());
            stats["freeHeap"] = ESP.getFreeHeap();
            stats["wifiMode"] = int(WiFi.getMode());
        #elif defined(ESP32)
            stats["chipId"] = ESP.getEfuseMac();
            stats["sketchHash"] = ESP.getSketchMD5();
            stats["macAddress"] = String(WiFi.macAddress());
            stats["freeHeap"] = ESP.getFreeHeap();
            stats["wifiMode"] = int(WiFi.getMode());
        #endif
    }else{
        stats["enabled"] = false;
    }

    serializeJson(doc, result);

    debugPrintln("Free HEAP = after = JSON Serialization: "+String(ESP.getFreeHeap()));

    return;
}


void webClass::generateRebootResponse(String& result){
    debugPrintln("Free HEAP = before = JSON Serialization: "+String(ESP.getFreeHeap()));

    DynamicJsonDocument doc(200);
    JsonObject obj = doc.to<JsonObject>();
        obj["response"] = "reboot";
    if(stats_enabled){
        obj["done"] = true;
    }else{
        obj["done"] = false;
    }

    serializeJson(doc, result);

    debugPrintln("Free HEAP = after = JSON Serialization: "+String(ESP.getFreeHeap()));

    return;
}


size_t webClass::getTotalResponseCapacity(){
    size_t capacity = 0 + JSON_OBJECT_SIZE(3) + JSON_OBJECT_SIZE(10);
    size_t totalCards = 0;

    for(int i=0; i < NUMBER_CARD_LIMIT; i++){
        if(number_card_id[i] != ""){
            capacity += JSON_OBJECT_SIZE(3);
            totalCards++;
        }
    }

    for(int i=0; i < TEMPERATURE_CARD_LIMIT; i++){
        if(temperature_card_id[i] != ""){
            capacity += JSON_OBJECT_SIZE(5);
            totalCards++;
        }
    }

    for(int i=0; i < HUMIDITY_CARD_LIMIT; i++){
        if(humidity_card_id[i] != ""){
            capacity += JSON_OBJECT_SIZE(4);
            totalCards++;
        }
    }

    for(int i=0; i < STATUS_CARD_LIMIT; i++){
        if(status_card_id[i] != ""){
            capacity += JSON_OBJECT_SIZE(4);
            totalCards++;
        }
    }

    for(int i=0; i < BUTTON_CARD_LIMIT; i++){
        if(button_card_id[i] != ""){
            capacity += JSON_OBJECT_SIZE(3);
            totalCards++;
        }
    }


    for(int i=0; i < LINE_CHART_LIMIT; i++){
        if(line_chart_id[i] != ""){
            capacity +=  JSON_OBJECT_SIZE(4) + JSON_ARRAY_SIZE(line_chart_x_axis_size[i]) + JSON_ARRAY_SIZE(line_chart_y_axis_size[i]);
            totalCards++;
        }
    }

    for(int i=0; i < GAUGE_CHART_LIMIT; i++){
        if(gauge_chart_id[i] != ""){
            capacity +=  JSON_OBJECT_SIZE(3);
            totalCards++;
        }
    }

    for(int i=0; i < SLIDER_CARD_LIMIT; i++){
        if(slider_card_id[i] != ""){
            capacity += JSON_OBJECT_SIZE(5);
            totalCards++;
        }
    }


    capacity += JSON_ARRAY_SIZE(totalCards);
    return capacity;
}


size_t webClass::getNumberCardsLen(){
    size_t total = 0;
    for(int i=0; i < NUMBER_CARD_LIMIT; i++){
        if(number_card_id[i] != ""){
            total++;
        }
    }
    return total;
}

size_t webClass::getTemperatureCardsLen(){
    size_t total = 0;
    for(int i=0; i < TEMPERATURE_CARD_LIMIT; i++){
        if(temperature_card_id[i] != ""){
            total++;
        }
    }
    return total;
}

size_t webClass::getHumidityCardsLen(){
    size_t total = 0;
    for(int i=0; i < HUMIDITY_CARD_LIMIT; i++){
        if(humidity_card_id[i] != ""){
            total++;
        }
    }
    return total;
}

size_t webClass::getStatusCardsLen(){
    size_t total = 0;
    for(int i=0; i < STATUS_CARD_LIMIT; i++){
        if(status_card_id[i] != ""){
            total++;
        }
    }
    return total;
}

size_t webClass::getButtonCardsLen(){
    size_t total = 0;
    for(int i=0; i < BUTTON_CARD_LIMIT; i++){
        if(button_card_id[i] != ""){
            total++;
        }
    }
    return total;
}

size_t webClass::getLineChartsLen(){
    size_t total = 0;
    for(int i=0; i < LINE_CHART_LIMIT; i++){
        if(line_chart_id[i] != ""){
            total++;
        }
    }
    return total;
}

size_t webClass::getGaugeChartsLen(){
    size_t total = 0;
    for(int i=0; i < GAUGE_CHART_LIMIT; i++){
        if(gauge_chart_id[i] != ""){
            total++;
        }
    }
    return total;
}

size_t webClass::getSliderCardsLen(){
    size_t total = 0;
    for(int i=0; i < SLIDER_CARD_LIMIT; i++){
        if(slider_card_id[i] != ""){
            total++;
        }
    }
    return total;
}



webClass web;
