class Tiles {
    brand: string
    size_h: number
    size_w: number
    price: number
    constructor(brand: string, size_h: number, size_w: number, price: number) {
        this.brand = brand
        this.size_h = size_h
        this.size_w = size_w
        this.price = price
    }
    getData(): void{
        console.log(`Brand: ${this.brand}\t\tHeight: ${this.size_h}\t Width: ${this.size_w}\t Price: ${this.price}`)
    }
}
let tile1= new Tiles("Cersanit",185,598,270)
let tile2 = new Tiles("Vives",200,200,838)
let tile3 = new Tiles("Dual Gres",450,450,556)
tile1.getData()
tile2.getData()
tile3.getData()