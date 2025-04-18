import { Player } from './core/entities/Player'
import { Map } from './core/maps/test_map'
import './style.css'

const player = new Player('/test_sprite.png')
const map = new Map()

function gameLoop() {
const canvas = document.querySelector<HTMLCanvasElement>('#canvas')
  if(canvas){
    canvas.height = innerHeight
    canvas.width = innerWidth
    const ctx = canvas.getContext("2d")
    if(!ctx) return;
    const scale = canvas.width / (map.width * map.size)
    const scale1 = canvas.height / (map.height * map.size)

    // ctx.translate(innerWidth / map.width, innerHeight / map.height)
    ctx.scale(scale,scale1)
    ctx.imageSmoothingEnabled = false
    map.draw(ctx)
    player.draw(ctx)
  }
  requestAnimationFrame(gameLoop)
}
gameLoop()

