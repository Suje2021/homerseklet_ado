let hőmérséklet = 0
radio.setGroup(5)
basic.forever(function () {
    hőmérséklet = input.temperature()
    radio.sendNumber(hőmérséklet)
    basic.pause(3000)
})
