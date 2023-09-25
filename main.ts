basic.showString("  VIVIANA SOFIA RONCANCIO BUITRAGO")
basic.showLeds(`
    # # # # .
    # . . # .
    # # # # .
    # . # . .
    # . . # .
    `)
basic.showString("8A")
basic.pause(5000)
basic.showIcon(IconNames.Happy)
music.play(music.stringPlayable("C5 C5 G G E E A A ", 84), music.PlaybackMode.InBackground)
basic.showLeds(`
    . # # # .
    . . # . .
    # . # . #
    . # # # .
    . . # . .
    `)
basic.showString("PETRICOR ♥ ")
basic.showArrow(ArrowNames.NorthEast)
