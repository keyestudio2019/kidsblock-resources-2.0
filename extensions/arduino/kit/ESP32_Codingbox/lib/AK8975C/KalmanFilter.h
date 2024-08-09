#ifndef KALMANFILTER_H
#define KALMANFILTER_H

#include "Arduino.h"

class KALMANFILTER{

    private:
        double x_old,y_old,z_old;
        double x_raw,y_raw,z_raw;
        double Q_angle,Q_bias,R_measure;
        double K_angle,K_bias;
        double P[2][2];

    public:
        double x,y,z;
        void Kalman_Filter_Init();
        void Kalman_Filter(double ax, double ay, double az);
};
#endif
