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