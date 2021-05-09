from time import sleep

from evdev import list_devices, InputDevice, categorize, ecodes
import uinput

CENTER_TOLERANCE = 350
STICK_MAX = 65536

dev = InputDevice( list_devices()[0] )
axis = {
    ecodes.ABS_X: 'ls_x', # 0 - 65,536   the middle is 32768
    ecodes.ABS_Y: 'ls_y',
    ecodes.ABS_Z: 'rs_x',
    ecodes.ABS_RZ: 'rs_y',
    ecodes.ABS_BRAKE: 'lt', # 0 - 1023
    ecodes.ABS_GAS: 'rt',

    ecodes.ABS_HAT0X: 'dpad_x', # -1 - 1
    ecodes.ABS_HAT0Y: 'dpad_y'
}

center = {
    'ls_x': STICK_MAX/2,
    'ls_y': STICK_MAX/2,
    'rs_x': STICK_MAX/2,
    'rs_y': STICK_MAX/2
}

last = {
    'ls_x': STICK_MAX/2,
    'ls_y': STICK_MAX/2,
    'rs_x': STICK_MAX/2,
    'rs_y': STICK_MAX/2
}

for event in dev.read_loop():

    # calibrate zero on Y button
    if event.type == ecodes.EV_KEY:
        print("Button")
        print(categorize(event).keycode[0])
        print(event)
        if categorize(event).keycode[0] == 'B':
            print("Sending R")
            with uinput.Device([uinput.KEY_R]) as device:
                sleep(2)
                device.emit_click(uinput.KEY_R)
        if categorize(event).keycode[0] == 'BTN_JOYSTICK':
            print("Sending S")
            with uinput.Device([uinput.KEY_S]) as device:
                sleep(2)
                device.emit_click(uinput.KEY_S)

