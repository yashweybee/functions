'use strict';


// const bookings = []
// const creatBooking = function (flightNum = 'A199', numPassengers = 100, price = 700) {

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     bookings.push(booking)
// }

// creatBooking(234, 55, 234);
// creatBooking('A123', undefined, 500);

// const flight = 'A234'
// const jonas = {
//     name: 'Jonas Scsmsjow',
//     passport: 2342352314
// }

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LA1212'
//     passenger.name = 'Mr.' + passenger.name

//     if (passenger.passport === 2342352314) {
//         alert("CHecked In")
//     } else {
//         alert("Wrong Passport!!")
//     }

// }

// checkIn(flight, jonas)

// const newPassport = function (flightNum, passenger) {
//     passenger.passport = Math.trunc(Math.random() * 100000000000)
// }
// newPassport('A637', jonas)
// checkIn('S763', jonas)

// console.log(flight);
// console.log(jonas);

///////////////////////////////////////////////////////////////

// higher order functions

// const oneWord = function (str) {
//     return str.replace(/ /g, "");
// }

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(" ")
//     return [first.toUpperCase(), ...others].join(" ")
// }


// // Higher Order Function
// const transformer = function (str, fn) {
//     console.log(fn(str));
// }

// const randomString = "This is a some random string for higher Order function"
// transformer(randomString, upperFirstWord);
// transformer(randomString, oneWord);

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

// greet('Hey')('Jones')

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greet('Hiiiiiiiii')('Jones')

///////////////////////////////////////////////////////


//Call method
const luftanza = {
    airline: 'luftanza',
    code: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked seat on ${this.airline} on ${this.code}${flightNum}`);

        this.bookings.push({
            flight: `${this.code}${flightNum}`,
            name
        })
    }
}

luftanza.book(234, "Yash")
luftanza.book(999, "jones")
console.log(luftanza);


const euorings = {
    airline: 'euorings',
    code: 'SD',
    bookings: [],
}


const book = luftanza.book;
book.call(euorings, 9999, "abcd");
book.call(euorings, 6666, "xyz");
console.log(euorings);


const swiss = {
    airline: 'swiss',
    code: 'HJ',
    bookings: [],
}

book.call(swiss, 111, "nnnnnnnn")
console.log(swiss);


//////////////////////////////////////////////////////////////
// apply method

const flightData = [7777, "newUser"]
book.apply(swiss, flightData);

book.call(swiss, ...flightData)