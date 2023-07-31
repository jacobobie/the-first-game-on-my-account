namespace SpriteKind {
    export const soildier = SpriteKind.create()
    export const archer = SpriteKind.create()
    export const farmer = SpriteKind.create()
    export const miner = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . c c c c c c c c c c . . . 
        . . . c c c c c c c c c c . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . b b b b b b b b b b . . . 
        . . . b b b b b b b b b b . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    50,
    false
    )
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite2 = sprites.create(img`
    ffffffffffffffffffff
    fffff5555ff55fffffff
    fffff5ffff5ff5ffffff
    fffff5ffff5ff5ffffff
    ffffff5fff5ff5ffffff
    fffffff55f5ff5ffffff
    ffffffff5f5ff5ffffff
    fffff5555ff55fffffff
    ffffffffffffffffffff
    fffffffffffffdffffff
    fffffeeeffffddffffff
    ffffeeeeefffddffffff
    fffeeeeeeeffddffffff
    fffeedddeeffddffffff
    fffeedddeefeeeefffff
    fffeeeeeeeffeeffffff
    ffffeeeeefffeeffffff
    fffffeeeffffeeffffff
    ffffffffffffffffffff
    ffffffffffffffffffff
    `, SpriteKind.soildier)
let mySprite3 = sprites.create(img`
    ffffffffffffffffffff
    ffff5555fff5555fffff
    fffffff5fff5ffffffff
    fffffff5fff5ffffffff
    fffffff5ffff55ffffff
    fffffff5ffffff5fffff
    fffffff5ffffff5fffff
    fffffff5fff555ffffff
    ffffffffffffffffffff
    ffffffffffffffffffff
    fffffffbfffeffffffff
    ffffffbbbff1efffffff
    ffffffbbbff1feffffff
    fffffffefff1ffefffff
    fffffffefff1ffefffff
    fffffffefff1ffefffff
    fffffffefff1ffefffff
    fffffff1fff1feffffff
    ffffff1f1ff1efffffff
    fffffffffffeffffffff
    `, SpriteKind.archer)
let mySprite4 = sprites.create(img`
    ffffffffffffffffffff
    ffffffffffffffffffff
    ffffffffffffffffffff
    ff555ffff55fff55ffff
    ff5f5fff5ff5f5ff5fff
    ffff5fff5ff5f5ff5fff
    ffff5fff5ff5f5ff5fff
    ffff5fff5ff5f5ff5fff
    ffff5fff5ff5f5ff5fff
    ff55555ff55fff55ffff
    ffffffffffffffffffff
    ffffffffffffffffffff
    ffffffffffdddddfffff
    fffffffffdffeffdffff
    ffff5445ffffefffffff
    fff554455fffefffffff
    fff554455fffefffffff
    ff55555555ffefffffff
    ffffffffffffefffffff
    ffffffffffffffffffff
    `, SpriteKind.miner)
let mySprite5 = sprites.create(img`
    ................
    ................
    ..b.b.b.........
    ..bbbbb.........
    ..bfbfb.........
    ..bfbfb.........
    ..bbbbb.........
    ..bbbbb.........
    ..bbbbb.........
    ..bbbbb.........
    ..bbbbbbbbbbbbbb
    ..bbbbbbbbbbbbbb
    ..bbbbbbbbbbbbbb
    ..bbfbfbfbfbfbfb
    ..bbfbfbfbfbfbfb
    ..bbbbbbbbbbbbbb
    ..bbfbfbfbfbfbfb
    ..bbfbfbfbfbfbfb
    ..bbbbbbbbbbbbbb
    ..bbbbbbbbbbbbbb
    ..bbbbbbbbbbbbbb
    ..bbbbbbbbbbbbbb
    ..bbbbbbbbbbbbbb
    ..bbbbbbbbbbbbbb
    ..bbbbbbbbbbbbbb
    ..bbbbbbbbbbbbbb
    ..bbbbbbbbbbbbbb
    ..bbbbbbeebbbbbb
    ..bbbbbeeeebbbbb
    ..bbbbeeeeeebbbb
    ..bbbbeeeeeebbbb
    ..bbbbeeeeeebbbb
    ..bbbbeeeeeebbbb
    ..bbbbeeeeeebbbb
    ..bbbbeeeeeebbbb
    `, SpriteKind.Player)
mySprite5.setPosition(390, 167)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . b b b b b b b b b b . . . 
    . . . b b b b b b b b b b . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite4.setPosition(355, 140)
mySprite3.setPosition(325, 140)
mySprite2.setPosition(295, 140)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
