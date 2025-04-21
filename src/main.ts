import { Player } from './core/entities/Player'
import { Map } from './core/maps/test_map'
import './style.css'

const player = new Player('/Dungeon_Character_2.png')
const map = new Map()
const canvas = document.querySelector<HTMLCanvasElement>('#canvas')
if(canvas){
}

function gameLoop() {
  if(!canvas) return
  canvas.height = 480
  canvas.width = 640
    const ctx = canvas.getContext("2d")
    if(!ctx) return;
    ctx.imageSmoothingEnabled = false
    map.draw(ctx)
    player.draw(ctx)
  
  requestAnimationFrame(gameLoop)
}
gameLoop()

