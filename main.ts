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
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 4; index++) {
        for (let INDEX2 = 0; INDEX2 <= 4; INDEX2++) {
            led.plot(INDEX2, index)
            basic.pause(300)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 3; index++) {
        music.playTone(220 + index * 220, music.beat(BeatFraction.Quarter))
        SOR(index)
        basic.pause(300)
    }
    basic.pause(1000)
    basic.clearScreen()
})
function SOR (num: number) {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, num)
    }
}
basic.forever(function () {
	
})
