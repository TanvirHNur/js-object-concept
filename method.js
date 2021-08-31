const student = {
    id: 101,
    name: 'rakib',
    major: 'Math',
    money: 4000,
    subject:['english', 'Economics', 'Calculas'],
    isRich: false,
    bestFriend: {
        name: 'Sabil', 
        major: 'Math'
    },
    takeExam: function(){
        console.log(this.name, 'taking exams')
    },
    treatDay: function(expense, tips){
        this.money = this.money - expense - tips;
        return this.money;
    }
}

student.takeExam();
const remaining = student.treatDay(1000,100);
console.log(remaining)
const remaining2 = student.treatDay(500, 50);
console.log(remaining2)