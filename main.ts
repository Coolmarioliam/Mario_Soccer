namespace SpriteKind {
    export const Notaiscr = SpriteKind.create()
    export const aiscr = SpriteKind.create()
    export const mariogoal = SpriteKind.create()
    export const luigigoal = SpriteKind.create()
    export const points = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (sprite.y < Ball.y) {
        Ball.fy = 10
        Ball.vy = 25
    }
    if (sprite.y > Ball.y) {
        Ball.fy = 10
        Ball.vy = -25
    }
    if (sprite.x < Ball.x) {
        Ball.fx = 10
        Ball.vx = 25
    }
    if (sprite.x > Ball.x) {
        Ball.fx = 10
        Ball.vx = -25
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.mariogoal, function (sprite, otherSprite) {
    luigipoints += 1
    Ball.setPosition(80, 50)
    Ball.setVelocity(0, 0)
    if (luigipoints == 1) {
        animation.runImageAnimation(
        luigipoinssprite,
        [img`
            . . . 1 1 1 1 1 1 . . . . . . . 
            . . . 1 1 1 1 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            `],
        500,
        false
        )
    } else if (luigipoints == 2) {
        animation.runImageAnimation(
        luigipoinssprite,
        [img`
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 . . . . . . . . . . . 
            . . . 1 1 . . . . . . . . . . . 
            . . . 1 1 . . . . . . . . . . . 
            . . . 1 1 . . . . . . . . . . . 
            . . . 1 1 . . . . . . . . . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            `],
        500,
        false
        )
    } else if (luigipoints == 3) {
        animation.runImageAnimation(
        luigipoinssprite,
        [img`
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            `],
        500,
        false
        )
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.luigigoal, function (sprite, otherSprite) {
    mariopoints += 1
    Ball.setPosition(80, 50)
    Ball.setVelocity(0, 0)
    if (mariopoints == 1) {
        animation.runImageAnimation(
        mariopointssprite,
        [img`
            . . . 1 1 1 1 1 1 . . . . . . . 
            . . . 1 1 1 1 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            `],
        500,
        false
        )
    } else if (mariopoints == 2) {
        animation.runImageAnimation(
        mariopointssprite,
        [img`
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 . . . . . . . . . . . 
            . . . 1 1 . . . . . . . . . . . 
            . . . 1 1 . . . . . . . . . . . 
            . . . 1 1 . . . . . . . . . . . 
            . . . 1 1 . . . . . . . . . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            `],
        500,
        false
        )
    } else if (mariopoints == 3) {
        animation.runImageAnimation(
        mariopointssprite,
        [img`
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . . . . . . . . . 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            `],
        500,
        false
        )
    }
})
let Ball: Sprite = null
let mariopoints = 0
let mariopointssprite: Sprite = null
let luigipoints = 0
let luigipoinssprite: Sprite = null
luigipoinssprite = sprites.create(img`
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    `, SpriteKind.points)
luigipoints = 0
luigipoinssprite.setPosition(135, 15)
mariopointssprite = sprites.create(img`
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    `, SpriteKind.points)
mariopoints = 0
mariopointssprite.setPosition(25, 15)
tiles.setCurrentTilemap(tilemap`level1`)
let Mario = sprites.create(img`
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . . e e e d d e d . . . . . 
    . . . e d e d d d e d d d . . . 
    . . . e d e e d d d e d d d . . 
    . . . e e d d d d e e e e . . . 
    . . . . . d d d d d d d . . . . 
    . . . . 2 2 8 2 2 2 . . . . . . 
    . . . 2 2 2 8 2 2 8 2 2 2 . . . 
    . . 2 2 2 2 8 8 8 8 2 2 2 2 . . 
    . . d d 2 8 5 8 8 5 8 2 d d . . 
    . . d d d 8 8 8 8 8 8 d d d . . 
    . . d d 8 8 8 8 8 8 8 8 d d . . 
    . . . . 8 8 8 . . 8 8 8 . . . . 
    . . . e e e . . . . e e e . . . 
    . . e e e e . . . . e e e e . . 
    `, SpriteKind.Player)
controller.moveSprite(Mario)
tiles.placeOnRandomTile(Mario, assets.tile`myTile10`)
tiles.setTileAt(tiles.getTileLocation(1, 2), assets.tile`myTile`)
let Luigi = sprites.create(img`
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . . . . d e d d e e e . . . . 
    . . . d d d e d d d e d e . . . 
    . . d d d e d d d e e d e . . . 
    . . . e e e e d d d d e e . . . 
    . . . . d d d d d d d . . . . . 
    . . . . . . 7 7 7 8 7 7 . . . . 
    . . . 7 7 7 8 7 7 8 7 7 7 . . . 
    . . 7 7 7 7 8 8 8 8 7 7 7 7 . . 
    . . d d 7 8 5 8 8 5 8 7 d d . . 
    . . d d d 8 8 8 8 8 8 d d d . . 
    . . d d 8 8 8 8 8 8 8 8 d d . . 
    . . . . 8 8 8 . . 8 8 8 . . . . 
    . . . e e e . . . . e e e . . . 
    . . e e e e . . . . e e e e . . 
    `, SpriteKind.Player)
controller.player2.moveSprite(Luigi)
tiles.placeOnRandomTile(Luigi, assets.tile`myTile11`)
tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`myTile`)
Ball = sprites.create(img`
    . 1 f f f 1 . 
    1 1 1 1 1 1 1 
    f 1 f f f 1 f 
    f 1 f f f 1 f 
    f 1 f f f 1 f 
    1 1 1 1 1 1 1 
    . 1 f f f 1 . 
    `, SpriteKind.Projectile)
Ball.setPosition(80, 50)
Ball.setBounceOnWall(true)
let mariogoalsprite = sprites.create(img`
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    `, SpriteKind.mariogoal)
mariogoalsprite.setPosition(0, 48)
let luigigoalsprite = sprites.create(img`
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    1 1 . . . . . 
    `, SpriteKind.luigigoal)
luigigoalsprite.setPosition(162, 48)
