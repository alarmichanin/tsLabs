class Reverser {
    mass: any[][]
    sizeI: number
    sizeJ: number
    constructor(mass: any[][] = [[], []], sizeI: number = 2, sizeJ: number = 2) {
        this.mass = mass
        this.sizeI = sizeI
        this.sizeJ = sizeJ
    }
    massMaker() {
        for (let i = 0; i < this.sizeI; i++) {
            for (let j = 0; j < this.sizeJ; j++) {
                this.mass[i][j] = Math.round(Math.random() * (101 - 0) + 0)
            }
        }
        return this.mass
    }
    massReverse() {
        let arr: any[][] = [[], []]
        for (let i = 0; i < this.sizeI; i++) {
            for (let j = 0; j < this.sizeJ; j++) {
                arr[i][j] = this.mass[j][i]
            }
        }
        return arr
    }
}
let massFirst = new Reverser()
console.log(massFirst.massMaker())
console.log(massFirst.massReverse())
let data=[["a", 'b'], ['c', 'd'], ['e', 'f']]
let massSec = new Reverser(data,data[0].length,data.length)
console.log(massSec.massReverse())
