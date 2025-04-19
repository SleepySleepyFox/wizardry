import { Player } from './core/entities/Player'
import { Map } from './core/maps/test_map'
import './style.css'

const player = new Player('/wizard_01.png')
const map = new Map()
const canvas = document.querySelector<HTMLCanvasElement>('#canvas')
if(canvas){
  
}

function gameLoop() {
  if(canvas){
    const ctx = canvas.getContext("2d")
    canvas.height = innerHeight
    canvas.width = innerWidth
    if(!ctx) return;
    // const scale = canvas.width / (map.width * map.tileSide)
    // const scale1 = canvas.height / (map.height * map.tileSide)

    // ctx.translate(innerWidth / map.width, innerHeight / map.height)
    // ctx.scale(scale,scale1)
    ctx.imageSmoothingEnabled = false
    map.draw(ctx)
    player.draw(ctx)
  }
  requestAnimationFrame(gameLoop)
}
gameLoop()

