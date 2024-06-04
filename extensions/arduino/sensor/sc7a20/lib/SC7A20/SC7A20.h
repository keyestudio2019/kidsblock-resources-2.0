#ifndef _SC7A20_H
#define _SC7A20_H
#include "Wire.h"
#include "Arduino.h"

#define SC7A20_I2C_ADDR		    0x19            //引脚接低

//Reg Table
#define WHO_AM_I_REG			0x0F

#define CTRL_REG1			  0x20
#define CTRL_REG2			  0x21
#define CTRL_REG3			  0x22
#define CTRL_REG4        0x23
#define ADDR_STATUS_REG    0x27
#define OUT_X_L_REG				0x28
#define OUT_X_H_REG				0x29
#define OUT_Y_L_REG				0x2A
#define OUT_Y_H_REG				0x2B
#define OUT_Z_L_REG				0x2C
#define OUT_Z_H_REG				0x2D

// For CHIP_ID_REG
#define CHIP_ID					0x11


class SC7A20_Class
{
public:
    int accel_X;
    int accel_Y;
    int accel_Z;
    
    float accx;
    float accy;
    float accz;
    float angle_x;
    float angle_y;
    float angle_z;
    uint16_t tumble_count;
    float range;
    float g;
    bool begin(uint8_t address=SC7A20_I2C_ADDR, TwoWire *wirePort=&Wire);
    uint8_t readAccelX();
    uint8_t readAccelY();
    uint8_t readAccelZ();
    uint16_t tumble_handle();

private:
    uint8_t _address;
    TwoWire *_i2cPort;
    void IIC_Write_Byte(uint8_t reg,uint8_t data);
    void IIC_Read_Byte(uint8_t reg,uint8_t* buf,uint8_t lenght);
    bool IsExist();
    void Measure();
    int16_t _12bitComplement(uint8_t msb,uint8_t lsb);
   
};
#endif
