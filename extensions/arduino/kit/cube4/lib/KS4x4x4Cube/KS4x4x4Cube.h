/* FILE:    KS4x4x4Cube.h
   DATE:    29/05/23
   VERSION: 0.1
   AUTHOR:  KS
*/


#ifndef KS4x4x4Cube_h
#define KS4x4x4Cube_h
#include "Arduino.h"

#define ROW0 0
#define ROW1 1
#define ROW2 2
#define ROW3 3

#define LED_0_7_PORT PORTD
#define LED_0_7_DDR DDRD
#define LED_0_7_MASK 0xFF

#define LED_8_13_PORT PORTB
#define LED_8_13_DDR DDRB
#define LED_8_13_MASK 0x3f

#define LED_14_15_PORT PORTC
#define LED_14_15_DDR DDRC
#define LED_14_15_MASK 0x03

#define ROW_PORT PORTC
#define ROW_DDR DDRC
#define ROW_MASK 0x3C

/* Structure to contain pattern info for the predefined LED patterns */
struct _Pattern_info 
{ 
   byte AnimationLength; 
   const unsigned int *PatternArray; 
}; 


/* Timer 2 clock prescalling values */
enum CubeT2PreScaller
{
	T2_CLK_DIV_0    = 1,
	T2_CLK_DIV_8    = 2,
	T2_CLK_DIV_32   = 3,
	T2_CLK_DIV_64   = 4,
    T2_CLK_DIV_128  = 5,
    T2_CLK_DIV_256  = 6,
    T2_CLK_DIV_1024 = 7
};


extern volatile unsigned int Matrix_Buffer[4];
void CubeInit(void);
void CubeUpdateRow(byte Row, unsigned int Data);
void CubeClearBuffer(void);
void CubePlayPattern(_Pattern_info Pattern, unsigned int cycledelay, byte cycles);
void CubeTimer2Init(byte prescaler, byte compare);
void CubeTimer2(void);

#endif