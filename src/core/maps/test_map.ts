export class Map{
    tiles: number[];
    tileSide: number;
    mapSize: number
    width: number;
    height: number;
    brick: HTMLImageElement;
    brickMessy: HTMLImageElement;
    grass: HTMLImageElement;
    dirt: HTMLImageElement;
    imagesLoaded: boolean = false;

    constructor(){
        // this.tiles = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        //               0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,
        //               0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,
        //               0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,
        //               0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,
        //               0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
        //               0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,
        //               0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,
        //               0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        this.tiles = this.noize()
        this.mapSize = 2304;
        this.tileSide = 32
        this.height = innerHeight;
        this.width = innerWidth;
        // this.draw()
        this.brick = new Image();
        this.brick.src = '/brick_01.png';

        this.brickMessy = new Image();
        this.brickMessy.src = '/brick_messy_01.png';

        this.grass = new Image()
        this.grass.src = '/test_grass.png'
        
        this.dirt = new Image()
        this.dirt.src = '/test_dirt.png'

        Promise.all([
            new Promise(res => this.brick.onload = res),
            new Promise(res => this.brickMessy.onload = res),
            new Promise(res => this.dirt.onload = res),
            new Promise(res => this.grass.onload = res)
        ]).then(() => {
            this.imagesLoaded = true;
        });
    }


    draw(ctx: CanvasRenderingContext2D) {
        if (!this.imagesLoaded) return;

        for (let y = 0; y < this.height / this.tileSide; y++) {
            for (let x = 0; x < this.width / this.tileSide; x++) {
                const index = y * this.width + x;
                const tile = this.tiles[index];
                const img = tile > 0 ? this.brick : this.brickMessy;
                ctx.drawImage(img, x * this.tileSide, y * this.tileSide, this.tileSide, this.tileSide);
            }
        }
    }

    noize(){
        let grid = []
        const nodes = 2304

        const random_vecto_unit = () => {
            let tetha = Math.random() * 2 * Math.PI
            return Math.cos(tetha)
        }

        // const perlinGet = ({x,y}: {x: number, y: number}) => {
        //     let x0 = Math.floor(x);
        //     let x1 = x0 + 1;
        //     let y0 = Math.floor(y);
        //     let y1 = y0 + 1
        // }

        // function dot_prod_grid(x : number, y : number, vert_x : number, vert_y : number){
        //     var g_vect = gradients[vert_y][vert_x];
        //     var d_vect = {x: x - vert_x, y: y - vert_y};
        //     return d_vect.x * g_vect.x + d_vect.y * g_vect.y;
        // }

        for(let i = 0; i < nodes; i++){
            // let row = []
            for(let j = 0; j < nodes; j++){
                grid.push(random_vecto_unit())
            }
            // grid.push(row)
        }
        // perlinGet(random_vecto_unit())
        console.log(grid)
        return grid
    }
}