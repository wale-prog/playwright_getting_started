export class Person {
    public name: string
    public age: number 
    public stateOfOrigin: string
    public gender: string 
    public shoeSize: number
    constructor(name: string, age: number, stateOfOrigin: string, gender: string, shoeSize: number) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.stateOfOrigin = stateOfOrigin;
        this.shoeSize = shoeSize
    }
}

const seyi = new Person("Seyi", 23, "Ogun", "Female", 41);
const Gabriel = new Person("Gabriel", 31, "Oyo", "Male", 42);
console.log(Gabriel.name.charAt(0).toUpperCase())

console.log(seyi)
console.log(Gabriel)