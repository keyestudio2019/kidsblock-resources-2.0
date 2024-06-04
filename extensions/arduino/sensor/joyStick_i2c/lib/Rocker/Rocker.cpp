#include "ROCKER.h"


/**
 * @description: 初始化 bool
 * @param {uint8_t} address
 * @param {TwoWire} &wirePort
 * @return {0 & 1}
 */
void ROCKER::begin(uint8_t address,TwoWire &wirePort)
{
    delay(5);
    _address = address;
    _i2cPort = &wirePort;
    _i2cPort->begin();
}


/**
 * @description: IIC写数据
 * @param {uint8_t} reg
 * @param {uint8_t} data
 * @return {*}
 */
void ROCKER::IIC_Write_Byte(uint8_t reg,uint8_t data)
{
    _i2cPort->beginTransmission(_address);
    _i2cPort->write(reg);
    _i2cPort->write(data);
    _i2cPort->endTransmission();
}

/**
 * @description: IIC读数据
 * @param {uint8_t} reg
 * @param {uint8_t*} buf
 * @param {int} lenght
 * @return {*}
 */
void ROCKER::IIC_Read_Byte(uint8_t reg,uint8_t* buf,uint8_t lenght)
{
    uint8_t i = 0;
    _i2cPort->beginTransmission(_address);
    //reg |= 0x80; //turn auto-increment bit on
    _i2cPort->write(reg);
    _i2cPort->endTransmission(false);
    _i2cPort->requestFrom(_address,lenght);

    while (_i2cPort->available() && i<lenght)
    {
        *buf = _i2cPort->read();
        buf++;
        i++;
    }
}

/**
 * @description: 数据进行转换输出
 * @param {int32_t} *pressure
 * @param {int16_t} *temperature
 * @return {*}
 */
void ROCKER::_dataConversion(uint8_t DATA_H,uint8_t DATA_L,uint16_t *_RESULT)
{
  uint16_t tempdata = (uint16_t)((uint16_t)(DATA_L >> 6) | (uint16_t)DATA_H << 2) & 0x3ff;
  *_RESULT = tempdata;
}

/**
 * @description: 获取数据
 * @return {*}
 */
// void ROCKER::measure(void)
// {
//     uint8_t buff[1];
//     uint8_t buff2[8];
//     uint16_t ADC1_RAW,ADC2_RAW;
//     /* 读取按钮值 */
//     IIC_Read_Byte(BTN,buff,1);      /*[7:0]*/
//     B = buff[0];
//     /* 读ADC值 10bit */
//     IIC_Read_Byte(ADC1_H,buff,1);   /*[15:8]*/
//     buff2[1] = buff[0];
//     IIC_Read_Byte(ADC1_L,buff,1);   /*[7:6]*/
//     buff2[2] = buff[0];
//     IIC_Read_Byte(ADC2_H,buff,1);   /*[15:8]*/
//     buff2[3] = buff[0];
//     IIC_Read_Byte(ADC2_L,buff,1);   /*[7:6]*/
//     buff2[4] = buff[0];
//     /* 数据转换 */
//     _dataConversion(buff2[1],buff2[2],&ADC1_RAW);
//     delay(5);//延时，让采样电容消耗完电，避免采样出错
//     _dataConversion(buff2[3],buff2[4],&ADC2_RAW);
//     X = ADC1_RAW;
//     Y = ADC2_RAW;
// }

int ROCKER::readB(void){

    uint8_t buff[1];
    /* 读取按钮值 */
    IIC_Read_Byte(BTN,buff,1);      /*[7:0]*/
    B = buff[0];
    return B;
}

uint16_t ROCKER::readX(void){

    uint8_t buff[1];
    uint8_t buff2[8];
    uint16_t ADC1_RAW;

    /* 读ADC值 10bit */
    IIC_Read_Byte(ADC1_H,buff,1);   /*[15:8]*/
    buff2[1] = buff[0];
    IIC_Read_Byte(ADC1_L,buff,1);   /*[7:6]*/
    buff2[2] = buff[0];
    /* 数据转换 */
    _dataConversion(buff2[1],buff2[2],&ADC1_RAW);
    delay(5);//延时，让采样电容消耗完电，避免采样出错
    X = ADC1_RAW;
    return X;
}

uint16_t ROCKER::readY(void){

    uint8_t buff[1];
    uint8_t buff2[8];
    uint16_t ADC2_RAW;
    /* 读ADC值 10bit */
    IIC_Read_Byte(ADC2_H,buff,1);   /*[15:8]*/
    buff2[3] = buff[0];
    IIC_Read_Byte(ADC2_L,buff,1);   /*[7:6]*/
    buff2[4] = buff[0];
    /* 数据转换 */
    _dataConversion(buff2[3],buff2[4],&ADC2_RAW);
    delay(5);//延时，让采样电容消耗完电，避免采样出错
    Y = ADC2_RAW;
    return Y;
}