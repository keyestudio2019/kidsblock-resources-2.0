#include <Wire.h>

#include "QMI8658.h"
QMI8658 qmi8658;

void setup() 
{
  Serial.begin(115200);   //串口初始化

  Wire.begin(21,22);           //IIC初始化

  if( qmi8658.begin()== 0)
  {
    Serial.println("qmi8658_init fail");
  }
}

void loop() 
{
  QMI8658_Test();    
}

//QMI8658功能测试
void QMI8658_Test()
{
  float pitch;
  float roll;
  float yaw;
  qmi8658.GetEulerAngles(&pitch,&roll, &yaw);
  Serial.print(pitch );Serial.print(" , " );
  Serial.print(roll );Serial.print(" , " );
  Serial.println(yaw );
}
