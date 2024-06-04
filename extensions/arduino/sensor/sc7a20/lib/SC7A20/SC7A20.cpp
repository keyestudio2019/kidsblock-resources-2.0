#include "SC7A20.h"
#include <math.h>

bool SC7A20_Class::begin( uint8_t address, TwoWire *wirePort)
{
  _address = address;
  _i2cPort = wirePort;
  _i2cPort->begin();
  if(!IsExist())
    return false;
	IIC_Write_Byte(CTRL_REG1,0x27); //正常模式 10HZ
	// IIC_Write_Byte(CTRL_REG1,0x37); //正常模式 25HZ
	// IIC_Write_Byte(CTRL_REG1,0x47); //正常模式 50HZ
	// IIC_Write_Byte(CTRL_REG1,0x57); //正常模式 100HZ
	// IIC_Write_Byte(CTRL_REG1,0x67); //正常模式 200HZ
	// IIC_Write_Byte(CTRL_REG1,0x77); //正常模式 400HZ
  IIC_Write_Byte(CTRL_REG4,0x01); //+/-4g 
  range = 4.0f;
  g = 9.8f;
// IIC_Write_Byte(CTRL_REG4,0x00); //+/-2g
// IIC_Write_Byte(CTRL_REG4,0x20); //+/-8g
// IIC_Write_Byte(CTRL_REG4,0x30); //+/-16g
	return true;
}

void SC7A20_Class::IIC_Write_Byte(uint8_t reg,uint8_t data)
{
	_i2cPort->beginTransmission(_address);
	_i2cPort->write(reg);
	_i2cPort->write(data);
	_i2cPort->endTransmission();
}

void SC7A20_Class::IIC_Read_Byte(uint8_t reg,uint8_t* buf,uint8_t lenght)
{

    uint8_t i=0;
	_i2cPort->beginTransmission(_address);
	reg |= 0x80; //turn auto-increment bit on
	_i2cPort->write(reg);
	_i2cPort->endTransmission(false);
	_i2cPort->requestFrom(_address, lenght);

	while (_i2cPort->available() && i<lenght)
	{
		*buf= _i2cPort->read();
		buf++;
		i++;
	}
}

bool SC7A20_Class::IsExist()
{

  uint8_t config; 
  IIC_Read_Byte(WHO_AM_I_REG,&config,1);

  if (config == CHIP_ID) 
    return true;
  else 
    return false;
}
int16_t SC7A20_Class::_12bitComplement(uint8_t msb,uint8_t lsb)
{

	int16_t temp;
	temp=msb<<8|lsb;
  
	temp=temp>>4;   //只有高12位有效
	temp=temp & 0x0fff;
	if(temp&0x0800) //负数 补码==>原码
	{
		temp=temp&0x07ff; //屏蔽最高位
		temp=~temp;
		temp=temp+1;
		temp=temp&0x07ff;
		temp=-temp;       //还原最高位
	}
	return temp;
}

void SC7A20_Class::Measure(){

	uint8_t buff[6];
	IIC_Read_Byte(0x28,buff,6);
	accel_X=_12bitComplement(buff[1],buff[0]);
	accel_Y=_12bitComplement(buff[3],buff[2]);
	accel_Z=_12bitComplement(buff[5],buff[4]);
	accx = accel_X/2047.0f*range/2.0f*g;
	accy = accel_Y/2047.0f*range/2.0f*g;
	accz = accel_Z/2047.0f*range/2.0f*g;
}

uint16_t SC7A20_Class::tumble_handle(){
	uint16_t t = 0;
  	Measure();
	angle_x = atan(accx/sqrt(accy*accy+accz*accz))*180/PI;
	angle_y = atan(accy/sqrt(accx*accx+accz*accz))*180/PI;
	angle_z = atan(accz/sqrt(accy*accy+accx*accx))*180/PI;

	if((abs(angle_x)>45 || abs(angle_y) > 45)||angle_z<0)
	{
	tumble_count++;
	if(tumble_count>3)
		t = 1;
	//   Serial.println("tumble");
	}
	else{
		tumble_count = 0;
		t = 0;
	//    Serial.println("no tumble");
	}
	return t;
}

uint8_t SC7A20_Class::readAccelX(){

	uint8_t buff[6];
	IIC_Read_Byte(0x28,buff,6);

	return _12bitComplement(buff[1],buff[0]);
}

uint8_t SC7A20_Class::readAccelY(){

	uint8_t buff[6];
	IIC_Read_Byte(0x28,buff,6);

	return _12bitComplement(buff[3],buff[2]);
}

uint8_t SC7A20_Class::readAccelZ(){

	uint8_t buff[6];
	IIC_Read_Byte(0x28,buff,6);

	return _12bitComplement(buff[5],buff[4]);
}