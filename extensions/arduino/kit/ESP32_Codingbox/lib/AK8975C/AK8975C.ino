#include <Wire.h>
#include "AK8975C.h"

AK8975C ak8975c;

void setup() {
  Wire.begin();
  Serial.begin(9600);
  
  if(!ak8975c.begin())
  {
    Serial.println("error!");
    while(1);
  }
  ak8975c.selfTest();
}
void loop() {

  Serial.print("X:");
  Serial.println(ak8975c.readX());

  Serial.print("Y:");
  Serial.println(ak8975c.readY());

  Serial.print("Z:");
  Serial.println(ak8975c.readZ());

  Serial.print("degree:");
  Serial.println(ak8975c.degree());

  delay(100);
}
