class Children {
    private name: string
    private surname: string 
    private age: number 
    constructor(name:string="Elon",surname:string="Musk",age:number=50){
        this.name=name
        this.surname=surname
        this.age=age
    }
    setName(name: string) {
        this.name = name
    }
    setSurname(surname: string) {
        this.surname = surname
    }
    setAge(age: number) {
        this.age = age
    }
    getName():string{
        return this.name
    }
    getSurname():string{
        return this.surname
    }
    getAge():number{
        return this.age
    }
    getter(){
        console.log(`Name: ${this.getName()}\t Surname:${this.getSurname()}\t Age:${this.getAge()}`)
    }
}
let children1=new Children()
children1.setName("Roman")
children1.setSurname("Tkachenko")
children1.setAge(18)
children1.getter()
let children2=new Children()
children2.setName("Benedict")
children2.setSurname("Cumberbatch")
children2.setAge(45)
children2.getter()
let children3=new Children()
children3.getter()
