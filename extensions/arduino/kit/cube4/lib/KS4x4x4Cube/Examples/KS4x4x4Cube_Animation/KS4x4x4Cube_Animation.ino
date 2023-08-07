/* FILE:    KS4x4x4Cube_Animation.ino
   DATE:    29/05/23
   VERSION: 0.1
   AUTHOR:  KS
*/

/* Include the cube library */
#include "KS4x4x4Cube.h"
/* Include the predefined patterns */
#include "KS4x4x4_Cube_Patterns.h"

/* Set the default speed for all animations in ms */
#define SPEED 200


void setup() 
{
  /* Initialise the cube */
  CubeInit();
}


/* Main sketch */
void loop() 
{
  /* Step through each predefined LED pattern */
  CubePlayPattern(LayerBounce, SPEED, 2);
  CubePlayPattern(LayerRotate, SPEED, 10);
  CubePlayPattern(Spiral, SPEED, 1);
  CubePlayPattern(BorderLoop, SPEED, 3);
  CubePlayPattern(BorderFlash, SPEED, 5);
  CubePlayPattern(BorderWipe, SPEED, 1);
  CubePlayPattern(Block4Random, SPEED, 5);
  CubePlayPattern(Block4Corners, SPEED, 3);
  CubePlayPattern(Rise, SPEED, 5);
  CubePlayPattern(FourRotate, SPEED, 5);
  CubePlayPattern(SpiralLayers, SPEED, 2);
  CubePlayPattern(Snake, SPEED, 5);
  CubePlayPattern(Upright, SPEED, 5);
  CubePlayPattern(RandomFill, SPEED, 5);
  CubePlayPattern(Cube, SPEED, 5);
}
