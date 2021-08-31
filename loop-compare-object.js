const book ={
    color: 'white', // key: value pair
    name: 'Education in Bangladesh',
    price: 900,
    IsStandard: true
};

/* 
for(let i =0; i<10; i++)
for(const num of numbers)  // loop throw in an array or array like object
 for(const prop in ObjectName){}  //object 

*/

for (const prop in book){
    // console.log(prop, book[prop])
}

const keys = Object.keys(book);
// console.log(keys)
for (const prop of keys){
    // console.log(prop, book[prop])
}


// advanced
const entities = Object.entries(book)
// const [key, value] = ['white', 'Education in Bangladesh']
console.log(entities)
for (const [key, value] of Object.entries(book)){
    console.log(key, value)
}