const rakib = {
    id: 101,
    name: 'rakib',
    money: 5000,
    treatDay: function(expense){
        this.money = this.money - expense;
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

rakib.treatDay(100)

const heroTreatDay = rakib.treatDay.bind(HeroBalam);
heroTreatDay(2000)
heroTreatDay(200)
heroTreatDay(500)
rakib.treatDay(1000)


const HeroKalamTreatDay = rakib.treatDay.bind(HeroKalam)
HeroKalamTreatDay(6001)