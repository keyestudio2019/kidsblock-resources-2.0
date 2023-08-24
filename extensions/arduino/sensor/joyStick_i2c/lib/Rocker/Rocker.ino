#include <Wire.h>               // Only needed for Arduino 1.6.5 and earlier
#include "Rocker.h"
ROCKER rocker;

void setup() {
  Wire.begin();
  rocker.begin();
  Serial.begin(9600);
}
void loop() {

  rocker.measure();

  Serial.print("button value：");
  Serial.println(rocker.B);

  Serial.print("X：");
  Serial.println(rocker.X);

  Serial.print("Y：");
  Serial.println(rocker.Y);
  delay(500);
}
