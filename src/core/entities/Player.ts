export class Player {
    width: number;
    height: number;
    image: HTMLImageElement;
    pos: {
        x: number,
        y: number
    }
    speed: number;
    inJump: boolean

    constructor(src: string) {
        this.width = 16;
        this.height = 16;
        this.image = this.loadSprite(src);
        this.pos = {x: 25,y: 25}
        this.speed = 3;
        this.listenForKeyEvents()
        this.inJump = false
    }

    private loadSprite(src: string): HTMLImageElement {
        const img = new Image(this.width, this.height);
        img.src = src;  
        return img;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.image, 16 * 2,16,16,16, this.pos.x, this.pos.y, this.width, this.height);
        this.move()
    }

    private keys: Record<string, boolean> = {};  // Local key tracking for this player
    private listenForKeyEvents() {
        window.addEventListener('keydown', (e) => {
            this.keys[e.key] = true;
        });

        window.addEventListener('keyup', (e) => {
            this.keys[e.key] = false;
        });
    }

    move(){
        if (this.keys['w'] && this.pos.y > 0) this.pos.y -= this.speed;
        if (this.keys['s'] && this.pos.y !< 464) this.pos.y += this.speed;
        if (this.keys['a'] && this.pos.x !> 0) this.pos.x -= this.speed;
        if (this.keys['d'] && this.pos.x <= 624) this.pos.x += this.speed;
    }
}
