const rakib = {
    id: 101,
    name: 'rakib',
    money: 5000,
    treatDay: function(expense, tips, vat){
        this.money = this.money - expense -tips -vat;
        console.log("here", this)
        return this.money;
    }
}

const HeroBalam = {
    id: 102,
    name: 'Hero Balam',
    money: 6000
}

const HeroKalam = {
    id: 103,
    name: 'Hero Kalam',
    money: 8000
}


//  call
// rakib.treatDay.call(HeroBalam, 500, 100, 50)
// rakib.treatDay.call(HeroBalam, 500,100, 50)

rakib.treatDay.apply(HeroBalam, [500, 100, 50]);
rakib.treatDay.apply(HeroKalam, [500,100, 50]);