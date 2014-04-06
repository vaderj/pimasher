#!/usr/bin/python
from max31855 import MAX31855, MAX31855Error

cs_pin = 8
clock_pin = 11
data_pin = 9
units = "f"
thermocouple = MAX31855(cs_pin, clock_pin, data_pin, units)
print(thermocouple.get())
thermocouple.cleanup()

