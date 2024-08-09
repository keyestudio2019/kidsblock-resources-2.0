#ifndef _AK8975C_H
#define _AK8975C_H
#include "Wire.h"
#include "Arduino.h"
#include "KalmanFilter.h"

#define I2C_ADDR                0x0E
#define CHIP_ID                 0x48
#define WIA_AKM_ID              0x00
#define INFO_AKM                0x01
#define Status_1                0x02
#define HXL                     0x03
#define HXH                     0x04
#define HYL                     0x05 
#define HYH                     0x06
#define HZL                     0x07
#define HZH                     0x08
#define Status_2                0x09
#define Stu_DERR                0x04
#define Stu_HOFL                0x08
#define CNTL                    0x0A
#define MODE_PWR_DOWM           0x00
#define MODE_SING_MEA           0x01
#define MODE_SELF_TEST          0x08
#define MODE_FUSE_ROM           0x0F
#define ASTC                    0x0C
#define SELF                    0x40
#define ASAX                    0x10
#define ASAY                    0x11
#define ASAZ                    0x12


class AK8975C{
private:
    int16_t _ASAX;
    int16_t _ASAY;
    int16_t _ASAZ;
    int16_t X;
    int16_t Y;
    int16_t Z;
    uint8_t _address;
    TwoWire *_i2cPort;
    void IIC_Write_Byte(uint8_t reg, uint8_t data);
    void IIC_Read_Byte(uint8_t reg, uint8_t* buf, uint8_t lenght);
    void _dataConversion(uint8_t DATA_H,uint8_t DATA_L,uint16_t *_RESULT);
    bool IsExist(void);
    bool AK8975_MODE_SET(uint8_t mode);
    bool AK8975_CHK_DATA_RDY(void);
    float AK8975_GET_AZIMUTH(int8_t x,int8_t y);
    
public:
    int16_t readX(void);
    int16_t readY(void);
    int16_t readZ(void);
    float degree(void);
    bool begin(uint8_t address = I2C_ADDR, TwoWire &wirePort = Wire);
    void measure(void);
    void selfTest(void);
};

#endif
