/* const first = {a: 1, b: 2}
const second = {a: 1, b:2}
const third = first;

if(first === second)
{
    // console.log('objects are equal')
}
else{
    // console.log('objects are different')
}



if(first === third)
{
    console.log('objects are equal')
}
else{
    console.log('objects are different')
}


console.log(JSON.stringify(first))
console.log(JSON.stringify(second))

if(JSON.stringify(first) === JSON.stringify(second)){
    console.log('objects are equal')
}
else{
    console.log('objects are different')
}


const first1 = {a: 1, b:2}
const second1 = {b: 2, a: 1}
console.log(JSON.stringify(first))
console.log(JSON.stringify(second))

if(JSON.stringify(first1) === JSON.stringify(second1)){
    console.log('objects are equal')
}
else{
    console.log('objects are different')
}
 */
const first1 = {a: 1, b:2}
const second1 = {b: 2, a: 1}

function compareObject(obj1, obj2){
     if(Object.keys(obj1).keys.length !== Object.keys(obj2).length){
         return false;
     }
    for(const prop in obj1){
        if(obj1[prop] !== obj2[prop]){
            return false;
        }
    }
     return true;
}

console.log('function', compareObject(first1, second1))