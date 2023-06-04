input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, index)
        led.plot(4 - index, index)
        led.plot(index, 0)
        led.plot(index, 4)
        led.plot(0, index)
        led.plot(4, index)
        music.playTone(440, music.beat(BeatFraction.Quarter))
    }
    basic.pause(1000)
    basic.clearScreen()
})
basic.forever(function () {
	
})
