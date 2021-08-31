const pen= {
    brand: 'matador',
    price: 5,
    write: function(paper){
        console.log(paper)
    }
}

const keys = Object.keys(pen)
const values = Object.values(pen);

for (const key in pen){
    console.log(pen [key])
}


const a = 1;
const b = 1;
const c = a;


if(JSON.stringify(a) ===  JSON.stringify(b)){
    console.log('same')
}

const aBounded = pen.write.bind(a);
aBounded();
// call  appply

// this 