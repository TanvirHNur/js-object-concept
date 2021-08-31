

// using object literal in 95% case

const student ={
    name: 'sakib',
    job: "cricketer"
}

// Object constructor 
const person = new Object();
console.log(person)


// 3.
// const human = Object.create(null);   
const human = Object.create(student);   
console.log(human.job)

// 4. class
class People {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
}


const peo = new People('manus', 12)

console.log(peo);


// 5. 
function Manus(name){
    this.name = name
}

const man = new Manus ('kader');
console.log(man)