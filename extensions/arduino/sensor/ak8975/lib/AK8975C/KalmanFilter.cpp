#include "KalmanFilter.h"


void KALMANFILTER::Kalman_Filter_Init(void)
{
	Q_angle = 0.001; 
	Q_bias = 0.003; 
	R_measure = 0.03; 
	
	P[0][0] = 0.0;
	P[0][1] = 0.0;
	P[1][0] = 0.0;
	P[1][1] = 0.0;
	
	K_angle = 0.0;
	K_bias = 0.0;
	
	x = 0.0;
	y = 0.0;
	z = 0.0;
	
	x_old = 0.0;
	y_old = 0.0;
	z_old = 0.0;
}

void KALMANFILTER::Kalman_Filter(double ax, double ay, double az)
{
	P[0][0] += Q_angle;
	P[0][1] -= 0;
	P[1][0] -= 0;
	P[1][1] += Q_bias;
 
	K_angle = P[0][0]/(P[0][0]+R_measure);
	K_bias  = P[1][0]/(P[0][0]+R_measure);
 
	x = x_old + K_angle*(ax - x_old);
	y = y_old + K_angle*(ay - y_old);
	z = z_old + K_angle*(az - z_old);
 
	P[0][0] -= K_angle*P[0][0];
	P[0][1] -= K_angle*P[0][1];
	P[1][0] -= K_bias*P[0][0];
	P[1][1] -= K_bias*P[0][1];
 
	x_old = x;
	y_old = y;
	z_old = z;
}