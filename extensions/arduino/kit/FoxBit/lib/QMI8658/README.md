## Overview
The QMI8658C Arduino library provides a convenient interface for working with the QMI8658C inertial measurement unit (IMU) on Arduino platforms. The library is designed to simplify the process of reading and interpreting data from the QMI8658C IMU, making it easier for developers to integrate motion sensing capabilities into their projects.
The QMI8658C combines advanced gyroscope and accelerometer capabilities alongside a temperature sensor. Notably, the accelerometer boasts a measurement range of up to ±16g, while the gyroscope offers precision with a range of up to ±2048 degrees per second (dps). 

## IMU
An Inertial Measurement Unit (IMU) is an electronic device that measures and reports information about the movement, orientation, and direction of an object in three-dimensional space. It typically combines three types of sensors: accelerometers, gyroscopes, and magnetometers. By incorporating these sets of sensors, the IMU's degrees of freedom can vary from 3D to 9D. By integrating data from these sensors, an IMU accurately tracks an object's linear acceleration, angular velocity, and orientation relative to Earth's magnetic field, making it essential for applications like navigation, stabilization, and control in autonomous vehicles, drones, and consumer electronics.

### Accelerometer

Accelerometers are sensors that measure linear acceleration, showing how an object's velocity varies over time. They quantify acceleration in meters per second squared (m/s²) or G-forces (g), with one G-force equating to Earth's gravity. These devices utilize technologies like MEMS or piezoelectric materials to achieve precise measurements.

### Gyroscope

A gyroscope, commonly known as a gyro, is a device specialized in measuring or maintaining rotational motion. Gyros are compact and economical sensors used for measuring angular velocity, typically expressed in units of degrees per second (°/s) or revolutions per second (RPS).

## Library functions

Certain public functions are provided by the QMI8658 IMU Library to manage the QMI8658 device, covering tasks like initializing communication, retrieving data, closing communication, and converting operations result to a string for debugging purposes.


