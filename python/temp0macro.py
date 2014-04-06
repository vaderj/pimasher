import webiopi
import datetime

GPIO = webiopi.GPIO

#LIGHT = 17 # GPIO pin using BCM numbering
CUR_TEMP = 0
#HOUR_ON  = 8  # Turn Light ON at 08:00
#HOUR_OFF = 18 # Turn Light OFF at 18:00

# setup function is automatically called at WebIOPi startup
def setup():
    # set the GPIO used by the light to output
#    GPIO.setFunction(LIGHT, GPIO.OUT)

    # retrieve current datetime
#    now = datetime.datetime.now()

    # test if we are between ON time and tun the light ON
#    if ((now.hour >= HOUR_ON) and (now.hour < HOUR_OFF)):
#        GPIO.digitalWrite(LIGHT, GPIO.HIGH)

# loop function is repeatedly called by WebIOPi
def loop():



from max31855 import MAX31855, MAX31855Error

cs_pin = 8
clock_pin = 11
data_pin = 9
units = "f"
thermocouple = MAX31855(cs_pin, clock_pin, data_pin, units)
CUR_TEMP = (thermocouple.get())
thermocouple.cleanup()








    # retrieve current datetime
#    now = datetime.datetime.now()

    # toggle light ON all days at the correct time
#    if ((now.hour == HOUR_ON) and (now.minute == 0) and (now.second == 0)):
#        if (GPIO.digitalRead(LIGHT) == GPIO.LOW):
#            GPIO.digitalWrite(LIGHT, GPIO.HIGH)

    # toggle light OFF
#    if ((now.hour == HOUR_OFF) and (now.minute == 0) and (now.second == 0)):
#        if (GPIO.digitalRead(LIGHT) == GPIO.HIGH):
#            GPIO.digitalWrite(LIGHT, GPIO.LOW)

    # gives CPU some time before looping again
#    webiopi.sleep(1)

# destroy function is called at WebIOPi shutdown
def destroy():



@webiopi.macro
def getLightHours():
    return "%d" % (CUR_TEMP)

