const book ={
    color: 'white', // key: value pair
    name: 'Education in Bangladesh',
    price: 900,
    IsStandard: true
}


// getting all property names
const keys = Object.keys(book)
console.log(keys)

// getting all property's values
const values = Object.values(book)
console.log(values);

// getting all entries
const pairs = Object.entries(book)
console.log(pairs);


// 
Object.freeze(book)
// sealed object
Object.seal(book)
book.price = 1000;
book.page =500;

// deleting object's property
delete book.IsStandard;
console.log(book)

