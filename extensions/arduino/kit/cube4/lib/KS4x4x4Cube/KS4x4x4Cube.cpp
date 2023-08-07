/* FILE:    KS4x4x4Cube.cpp
   DATE:    29/05/23
   VERSION: 0.1
   AUTHOR:  KS
*/



#include "Arduino.h"
#include "KS4x4x4Cube.h"
#include <avr/interrupt.h>

/* Buffer to store the LED pattern that is currently output to the cube */
volatile unsigned int Matrix_Buffer[4];

byte LastRow = ROW3;



/* Initialise the ports and clear the buffer */
void CubeInit(void)
{
  LED_0_7_PORT = ~LED_0_7_MASK;
  LED_0_7_DDR = LED_0_7_MASK;
  
  LED_8_13_PORT = ~LED_8_13_MASK;
  LED_8_13_DDR = LED_8_13_MASK;
  
  LED_14_15_PORT = 0x00;
  LED_14_15_DDR = 0xFF;
  
  CubeClearBuffer();
  
  /* Initialise hardware Timer2 with a 2.04mS interval. 
     See HCTimer2 library for more information */ 
  CubeTimer2Init(T2_CLK_DIV_128, 254);
}


/* Updates one 4x4 row of LEDS */ 
void CubeUpdateRow(byte Row, unsigned int Data)
{
   LED_0_7_PORT = Data & LED_0_7_MASK;
   LED_8_13_PORT = (Data >> 8) & LED_8_13_MASK;
   LED_14_15_PORT = (Data >> 14) & LED_14_15_MASK;
   ROW_PORT = (ROW_MASK & (~(1 << (Row + 2)))) + LED_14_15_PORT;
}



/* Clears the buffer */
void CubeClearBuffer(void)
{
  Matrix_Buffer[0] = 0x0000;
  Matrix_Buffer[1] = 0x0000;
  Matrix_Buffer[2] = 0x0000;
  Matrix_Buffer[3] = 0x0000;
}



/* Sequences one of the predefined patterns found in the HC4x4x4_Cube_Patterns.h file where:
   Pattern is the pattern name 
   cycledelay is the time delay between each stp of the pattern in millisconds 
   cycles is the number of times to play the pattern sequence */
void CubePlayPattern(_Pattern_info Pattern, unsigned int cycledelay, byte cycles)
{
	byte index;
	const unsigned int *ptr;
  
	while(cycles)
    {
		ptr = Pattern.PatternArray;
		for (index = 0; index < Pattern.AnimationLength; index++)
		{
			Matrix_Buffer[0] = pgm_read_word_near(ptr) /*&Animation[index][0])*/;
			ptr++;
			Matrix_Buffer[1] = pgm_read_word_near(ptr) /*&Animation[index][0])*/;
			ptr++;
			Matrix_Buffer[2] = pgm_read_word_near(ptr) /*&Animation[index][0])*/;
			ptr++;
			Matrix_Buffer[3] = pgm_read_word_near(ptr) /*&Animation[index][0])*/;
			ptr++;
			delay(cycledelay);
		}
		cycles--;
	} 
}



/* Use the Timer 2 interrupt to constantly refresh the matrix LED display. */
void CubeTimer2()
{
  switch(LastRow)
  {
    case(ROW3):
      CubeUpdateRow(ROW0,  Matrix_Buffer[ROW0]);
      LastRow = ROW0;
      break;
    case(ROW0):
      CubeUpdateRow(ROW1,  Matrix_Buffer[ROW1]);
      LastRow = ROW1;
      break;
    case(ROW1):
      CubeUpdateRow(ROW2,  Matrix_Buffer[ROW2]);
      LastRow = ROW2;
      break;
    case(ROW2):
      CubeUpdateRow(ROW3,  Matrix_Buffer[ROW3]);
      LastRow = ROW3;
      break;
  }
}


/* Reconfigures the hardware timer 2. Used to automatically refresh the matrix */
void CubeTimer2Init(byte prescaler, byte compare)
{
	/* Turn off interrupts whilst we setup the timer */
	cli();
	/* Set timer mode to clear timer on compare match (mode 2)*/
	TCCR2A = (1<<WGM21);

	/* Set the prescaler */
	TCCR2B = prescaler;

	/* Clear timer 2 counter */
	TCNT2 = 0;

	/* Set the compare match register */
	OCR2A = compare;

	/* Enable timer 2 interrupt on compare match */
	TIMSK2 = (1<<OCIE2A);

  	/* Turn interrupts back on */
  	sei();
}


/* Interrupt service routine for Timer 2 compare match */
ISR(TIMER2_COMPA_vect)
{
   CubeTimer2();
}
