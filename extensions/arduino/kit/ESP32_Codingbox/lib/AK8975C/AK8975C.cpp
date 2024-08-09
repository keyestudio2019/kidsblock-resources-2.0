#include "AK8975C.h"

KALMANFILTER KalmanFilter;

bool AK8975C::begin(uint8_t address,TwoWire &wirePort){
    delay(5);
    _address = address;
    _i2cPort = &wirePort;
    _i2cPort->begin();
    if(!IsExist())
        return false;
    return true;
}

bool AK8975C::IsExist(void){
    uint8_t config_ID;
    IIC_Read_Byte(WIA_AKM_ID, &config_ID, 1);
    if(config_ID == CHIP_ID)
        return true;
    else
        return false;
}

void AK8975C::IIC_Write_Byte(uint8_t reg, uint8_t data){
    _i2cPort->beginTransmission(_address);
    _i2cPort->write(reg);
    _i2cPort->write(data);
    _i2cPort->endTransmission();
}

void AK8975C::IIC_Read_Byte(uint8_t reg, uint8_t* buf, uint8_t lenght){
    uint8_t i = 0;
    _i2cPort->beginTransmission(_address);
    _i2cPort->write(reg);
    _i2cPort->endTransmission(false);
    _i2cPort->requestFrom(_address, lenght);

    while (_i2cPort->available() && i < lenght){
        *buf = _i2cPort->read();
        buf++;
        i++;
    }
}

bool AK8975C::AK8975_MODE_SET(uint8_t mode){
    uint8_t _mode = MODE_PWR_DOWM;
    if(mode != MODE_PWR_DOWM && mode != MODE_SING_MEA && mode != MODE_SELF_TEST && mode !=MODE_FUSE_ROM){
        return false;
    }
    else{
        _mode = mode;
    }
    IIC_Write_Byte(CNTL, _mode);
    return true;
}

bool AK8975C::AK8975_CHK_DATA_RDY(void){
    uint8_t ready[2], error[2];
    delayMicroseconds(100);
    do{
        IIC_Read_Byte(Status_1, ready,1);
    }while(!(ready[0]));
    if(ready[0] & 0x01 == 0x01){
        return true;
    }else{
        return false;
    }
}

void AK8975C::selfTest(void){
    uint8_t buff_data[8];
    uint8_t buff2[8];
    uint8_t status[1];
    uint8_t astc[1];

    delayMicroseconds(101);
    while(!AK8975_MODE_SET(MODE_FUSE_ROM));
    delayMicroseconds(101);
    IIC_Read_Byte(ASAX, buff_data, 3);
    _ASAX = buff_data[0];
    _ASAY = buff_data[1];
    _ASAZ = buff_data[2];
    delayMicroseconds(101);
    AK8975_MODE_SET(MODE_PWR_DOWM);
    delayMicroseconds(101);
    IIC_Write_Byte(ASTC,0x40);
    delayMicroseconds(101);
    IIC_Read_Byte(ASTC, astc, 1);
    AK8975_MODE_SET(MODE_SELF_TEST);
    delayMicroseconds(101);
    if(AK8975_CHK_DATA_RDY()){
        IIC_Read_Byte(HXL, buff_data, 1);
        buff2[0] = buff_data[0];
        delayMicroseconds(50);
        IIC_Read_Byte(HXH, buff_data, 1);
        buff2[1] = buff_data[0];
        delayMicroseconds(50);
        IIC_Read_Byte(HYL, buff_data, 1);
        buff2[2] = buff_data[0];
        delayMicroseconds(50);
        IIC_Read_Byte(HYH, buff_data, 1);
        buff2[3] = buff_data[0];
        delayMicroseconds(50);
        IIC_Read_Byte(HZL, buff_data, 1);
        buff2[4] = buff_data[0];
        delayMicroseconds(50);
        IIC_Read_Byte(HZH, buff_data, 1);
        buff2[5] = buff_data[0];
        
        X = (buff2[1] << 8) | buff2[0];
        Y = (buff2[3] << 8) | buff2[2];
        Z = (buff2[5] << 8) | buff2[4];

        X = (X * (((_ASAX - 128) * 0.5) / 128 + 1)) * 0.3;
        Y = (Y * (((_ASAY - 128) * 0.5) / 128 + 1)) * 0.3;
        Z = (Z * (((_ASAZ - 128) * 0.5) / 128 + 1)) * 0.3;
        Serial.println("calibration:");
        Serial.print("X:");
        Serial.print(X);
        Serial.print("  ");
        Serial.print("Y:");
        Serial.print(Y);
        Serial.print("  ");
        Serial.print("Z:");
        Serial.println(Z);

       if(100 >= X && X >= -100 && 100 >= Y && Y >= -100 && -300 >= Z && Z >= -1000)
       {
            Serial.println(" error self-test!");
            while(1);
       }
    }

    IIC_Write_Byte(ASTC, 0);
}

float AK8975C::AK8975_GET_AZIMUTH(int8_t x, int8_t y){
  float x_data, y_data, result_data;

  /* calculate the azimuth */
  result_data = atan2((float)y, (float)x) * 180.0 / 3.14159 + 180.0;
  return result_data;
}

void AK8975C::measure(void){
    uint8_t buff_data[8];
    uint8_t buff2[8];
    uint8_t status2;
    delayMicroseconds(101);
    AK8975_MODE_SET(MODE_FUSE_ROM);
    delayMicroseconds(101);
    IIC_Read_Byte(ASAX, buff_data, 3);
    _ASAX = buff_data[0];
    _ASAY = buff_data[1];
    _ASAZ = buff_data[2];
    delayMicroseconds(101);
    AK8975_MODE_SET(MODE_PWR_DOWM);
    delayMicroseconds(101);
    AK8975_MODE_SET(MODE_SING_MEA);
    delayMicroseconds(101);
    if(AK8975_CHK_DATA_RDY()){
        IIC_Read_Byte(HXL, buff_data, 1);
        buff2[0] = buff_data[0];
        delayMicroseconds(50);
        IIC_Read_Byte(HXH, buff_data, 1);
        buff2[1] = buff_data[0];
        delayMicroseconds(50);
        IIC_Read_Byte(HYL, buff_data, 1);
        buff2[2] = buff_data[0];
        delayMicroseconds(50);
        IIC_Read_Byte(HYH, buff_data, 1);
        buff2[3] = buff_data[0];
        delayMicroseconds(50);
        IIC_Read_Byte(HZL, buff_data, 1);
        buff2[4] = buff_data[0];
        delayMicroseconds(50);
        IIC_Read_Byte(HZH, buff_data, 1);
        buff2[5] = buff_data[0];
        IIC_Read_Byte(Status_2, &status2, 1);
        if(!(status2)){
            X = (buff2[1] << 8) | buff2[0];
            Y = (buff2[3] << 8) | buff2[2];
            Z = (buff2[5] << 8) | buff2[4];

            X = (X * (((_ASAX - 128) * 0.5) / 128 + 1)) * 0.3;
            Y = (Y * (((_ASAY - 128) * 0.5) / 128 + 1)) * 0.3;
            Z = (Z * (((_ASAZ - 128) * 0.5) / 128 + 1)) * 0.3;
        }else{
            X = 0;
            Y = 0;
            Z = 0;
        }
    }else{
        X = 0;
        Y = 0;
        Z = 0;
    }
}

int16_t AK8975C::readX(void){

    KalmanFilter.Kalman_Filter_Init();
    measure();
    KalmanFilter.Kalman_Filter(X, Y, Z);

    return X;
}

int16_t AK8975C::readY(void){

    KalmanFilter.Kalman_Filter_Init();
    measure();
    KalmanFilter.Kalman_Filter(X, Y, Z);

    return Y;
}

int16_t AK8975C::readZ(void){

    KalmanFilter.Kalman_Filter_Init();
    measure();
    KalmanFilter.Kalman_Filter(X, Y, Z);

    return Z;
}

float AK8975C::degree(void){

    KalmanFilter.Kalman_Filter_Init();
    measure();
    KalmanFilter.Kalman_Filter(X, Y, Z);

    return AK8975_GET_AZIMUTH(X, Y);
}