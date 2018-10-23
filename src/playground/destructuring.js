

// const person ={
//     name: 'Ali',
//     age: 26,
//     location: {
//         city:'mississauga',
//         temp: 12
//     }
// };

// const {name:firstName = 'Anonymous',age} = person;

// console.log(`${firstName} is ${age}`);

// const {city , temp:tempreture}= person.location
// if(city && tempreture) {

//     console.log(`It's ${tempreture} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy', 
//     autor: 'Ryan Holiday', 
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'self-published'} = book.publisher;
// console.log(publisherName);


//
// Array Destructuring 
//
const address = [
    '55535 Quartermain cres.', 'Mississauga', 'Ontario', 'L5M 5V3'
];
const[street, city, state, zipCode] = address;

console.log(`this is my address ${street}, ${city}`);

const item = ['Coffee (Hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , medium] = item;
console.log(`A medium ${(itemName)} costs ${medium}`);