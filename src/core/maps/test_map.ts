export class Map{
    tiles: number[];
    size: number;
    width: number;
    height: number;
    dirtImg: HTMLImageElement;
    grassImg: HTMLImageElement;
    imagesLoaded: boolean = false;

    constructor(){
        this.tiles = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                      0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
                      0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
                      0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
                      0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
                      0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
                      0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
                      0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
                      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        this.size = 16;
        this.height = 9;
        this.width = 16;
        // this.draw()
        this.dirtImg = new Image();
        this.dirtImg.src = '/test_dirt.png';

        this.grassImg = new Image();
        this.grassImg.src = '/test_grass.png';
        Promise.all([
            new Promise(res => this.dirtImg.onload = res),
            new Promise(res => this.grassImg.onload = res)
        ]).then(() => {
            this.imagesLoaded = true;
        });
    }


    draw(ctx: CanvasRenderingContext2D) {
        if (!this.imagesLoaded) return;

        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const index = y * this.width + x;
                const tile = this.tiles[index];
                const img = tile === 0 ? this.dirtImg : this.grassImg;
                ctx.drawImage(img, x * this.size, y * this.size, this.size, this.size);
            }
        }
    }

    // draw(ctx: CanvasRenderingContext2D){

    //     for(let x = 0; x < this.tiles.length; x++){
    //         for(let y = 0; y < this.tiles.length; y++){
    //             const img = new Image()
    //         if(this.tiles[x] == 0){
    //             img.src = '/test_dirt.png'
    //             ctx.drawImage(img, x * 16, y * 16)
    //         }else{
    //             img.src = '/test_grass.png'
    //             ctx.drawImage(img, x * 16, y * 16)
    //         }
    //         }
    //     }
    // }
}