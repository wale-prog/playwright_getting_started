let firstName: string = 'Olawale';
let myNumber: number = 20;
let lastName = 'Clinton';
let email: string = "clinton22@yahoo.com";
let age = 21
let isReady: boolean = false;
let isReadyNow = true
let fruits: string[] = ['Apple', 'Orange', 'Cherry', 'Pineapple']

// Collection
// Arrays
// Objects

// key: value
// age: 21
// carModel: Toyota
// person.carModel = Toyota
// Array Methods
console.log(fruits)

console.log('The fruit in position 4 is ' + fruits[4])

fruits.push('Banana')

console.log(fruits)

fruits.unshift('Pear')

console.log(fruits);

interface Person {
    name: string[];
    age: number | string;
    gender?: string;
    stateOfOrigin?: string
    shoeSize?: number
}

// Objects
const Rejoice: Person = {
    "name": ["Rejoice", "Etim", "Seyi"], 
    "age": "31", 
    "gender": "female",
    "stateOfOrigin": "Edo",
    "shoeSize": 42
};

const gabriel: Person = {
    "name": ["Gabriel"],
    "age": 31
}



console.log(Rejoice.name);




