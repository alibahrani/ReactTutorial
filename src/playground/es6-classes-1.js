//setup constructor to take name and age ( default to 0)
//getDescription - Ali Al-Bahrani is 35 year(s) old.

class Persion {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name ;
        this.age = age; 
    }

    getGreeting() {
       return `Hi I am ${this.name}!`
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Persion {
    constructor(name, age, major){
        super(name,age);
        this.major = major;

    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}`
        }
        return description;
    }
}

class Traveler extends Persion {
    constructor(name, age, homeLocation) {
        super(name,age); 
        this.homeLocation = homeLocation; 

    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation) {
            greeting += `. I'm visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}

const me = new Traveler('Ali Al-Bahrani',35,'');
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(me.getGreeting());
