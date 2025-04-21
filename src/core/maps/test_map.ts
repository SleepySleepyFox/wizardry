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
        this.tileSide = 16
        this.height = 30 * this.tileSide;
        this.width = 48 * this.tileSide;
        // this.draw()
        this.brick = new Image();
        this.brick.src = '/Dungeon_Tileset.png';

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
                    const img = tile > 1 ? this.brick : this.brickMessy;
                    ctx.drawImage(this.brick, 
                        this.tileSide * 6,
                        0, 

                        this.tileSide, 
                        this.tileSide, 
                        this.tileSide * x, 
                        this.tileSide * y, 
                        this.tileSide, 
                        this.tileSide);
                }
            }
    }

    noize(){
        let grid = []
        const nodes = 2304

        const random_vecto_unit = (x : number) => {
            let tetha = Math.random() *  Math.PI
            return Math.floor(tetha) + x
        }

        for(let i = 0; i < nodes; i++){
            // let row = []
            for(let j = 0; j < nodes; j++){
                grid.push(random_vecto_unit(Math.sin(i)))
            }
            // grid.push(row)
        }
        // perlinGet(random_vecto_unit())
        console.log(grid)
        return grid
    }
}