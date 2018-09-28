// arguments object - no longer bound with arrow functions 

const add = (a, b) => {
    // console.log(arguments)
    return a + b;
}


console.log(add(55,3));

// this keyword - no longer bound 

const user = {
    name: 'Ali', 
    cities : ['baghdad', 'amman', 'Mississauga'],
    printPlacesLived(){

        const cityMessages = this.cities.map((city) =>{
            return city +'!'
        });

        return cityMessages;
    }
};
console.log(user.printPlacesLived());


//Challenge Area 

const multiplier = {
    //numbers - array of numbers 
    numbers:[1,5,2,4,7],
    // multiplyBy - single number
    multiplier: 4, 
    // multiply - return a new array where the numbers have been multiplied
    multiply(){
        return this.numbers.map((x) => this.multiplier * x);
    }
};

console.log(multiplier.multiply());