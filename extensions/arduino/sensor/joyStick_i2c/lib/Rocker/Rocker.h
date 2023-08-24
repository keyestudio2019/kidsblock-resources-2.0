 #ifndef _ROCKER_H
#define _ROCKER_H
#include "Wire.h"
#include "Arduino.h"

#define I2C_ADDR                0x39

#define BTN                     0x31        //按钮值
#define ADC1_H                  0x32        //ADC通道1 10bit
#define ADC1_L                  0x33        //左对齐 H[15:8] L[7:6] [5:0]为0
#define ADC2_H                  0x34        //ADC通道2 10bit
#define ADC2_L                  0x35        //左对齐 H[15:8] L[7:6] [5:0]为0


class ROCKER
{
private:
    uint8_t _address;
    TwoWire *_i2cPort;
    void IIC_Write_Byte(uint8_t reg, uint8_t data);
    void IIC_Read_Byte(uint8_t reg, uint8_t* buf, uint8_t lenght);
    void _dataConversion(uint8_t DATA_H,uint8_t DATA_L,uint16_t *_RESULT);

public:
    uint16_t X;
    uint16_t Y;
    int B;
    //bool begin(uint8_t address = I2C_ADDR, TwoWire &wirePort = Wire);
    void begin(uint8_t address = I2C_ADDR, TwoWire &wirePort = Wire);
    void measure(void);
};

#endif
