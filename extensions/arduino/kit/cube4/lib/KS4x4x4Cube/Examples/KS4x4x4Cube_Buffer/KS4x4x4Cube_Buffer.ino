/* FILE:    KS4x4x4Cube_Animation.ino
   DATE:    29/05/23
   VERSION: 0.1
   AUTHOR:  KS
*/

/* Include the cube library */
#include "KS4x4x4Cube.h"


void setup() 
{
  /* Initialise the cube */
  CubeInit();
}


/* Main sketch */
void loop() 
{
  /* Turn on all LEDs in the first and 3rd layers */
  Matrix_Buffer[3] = 0b0000000000000000;
  Matrix_Buffer[2] = 0b1111111111111111;
  Matrix_Buffer[1] = 0b0000000000000000;
  Matrix_Buffer[0] = 0b1111111111111111;
  
  /* Wait 5 seconds */
  delay(5000);
  
  /* Turn on the corner LEDs */
  Matrix_Buffer[3] = 0b1001000000001001;
  Matrix_Buffer[2] = 0b0000000000000000;
  Matrix_Buffer[1] = 0b0000000000000000;
  Matrix_Buffer[0] = 0b1001000000001001;
  
  /* Wait 5 seconds */
  delay(5000);
  
  /* Turn on a different block of 4 LED for each layer */
  Matrix_Buffer[3] = 0b1100110000000000;
  Matrix_Buffer[2] = 0b0000000011001100;
  Matrix_Buffer[1] = 0b0011001100000000;
  Matrix_Buffer[0] = 0b0000000000110011;
  
  /* Wait 5 seconds */
  delay(5000);
}
