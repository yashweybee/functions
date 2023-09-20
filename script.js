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

// const newPassport = function (passenger) {
//     passenger.passport = Math.trunc(Math.random() * 100000000000)
// }
// newPassport(jonas)
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

// luftanza.book(234, "Yash")
// luftanza.book(999, "jones")
// console.log(luftanza);


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

// book.call(swiss, 111, "nnnnnnnn")
// console.log(swiss);


//////////////////////////////////////////////////////////////
// apply method

// const flightData = [7777, "newUser"]
// book.apply(swiss, flightData);

// book.call(swiss, ...flightData)

//////////////////////////////////////////////////////////////
// bind method

const euoringsSD = book.bind(euorings);
const swissHJ = book.bind(swiss);
const luftanzaLH = book.bind(luftanza);


// euoringsSD(1234, 'yyyyyyyyyyyy')
// swissHJ(2222, 'ssssssssssssssss')
// luftanzaLH(3333, 'llllllllllllll')

// const euorings2323 = book.bind(euorings, 2323)
// euorings2323('ttttttttttt')

// luftanza.planes = 300;
// luftanza.buyPlane = function () {
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// }

// document.querySelector(".buy").addEventListener('click', luftanza.buyPlane.bind(luftanza))


// const addTax = (rate, value) => value + value * rate
// // console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23)    //addVAT(value)=> value + value * 0.23
// console.log(addVAT(100));

// const addTax = function (rate) {
//     return function (value) {
//         return value + value * rate
//     }
// }

// const addTaxVAT = addTax(0.23)
// console.log(addTaxVAT(100));

/////////////////////////////////////////////////////////////////////////////

// Coding Challenge - 1

// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
//     // This generates [0, 0, 0, 0]. More in the next section!
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         const option = Number(prompt(`What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)`));

//         typeof option === 'number' && option < this.answers.length - 1 && this.answers[option]++
//         this.displayResults('string')
//     },
//     displayResults(type = 'array') {
//         if (type === "array")
//             console.log(this.answers);
//         else
//             console.log("Poll results are: ", this.answers.join(', '));
//     }
// };

// document.querySelector(".poll").addEventListener('click', poll.registerNewAnswer.bind(poll))

/////////////////////////////////////////////////////////////////////////////////

// immediatly invoked function
// (function a() {
//     console.log("one time");
// })();
// (() => console.log("this functoin invoke inly one time"))()


///////////////////////////////////////////////////////////////////////////////

// Closures

// function secureBooking() {
//     let passengerCount = 0;
//     return function () {
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     }
// }

// const booker = secureBooking()
// booker();
// booker();

// const add = (function () {
//     var counter = 0;
//     return function () { counter += 1; return counter }
// })();

// // // Call add() 3 times
// console.log(add());
// console.log(add());
// console.log(add());

// let f;

// const g = function () {
//     let a = 20;
//     f = function () {
//         console.log(a * 2);
//     }
// }
// const h = function () {
//     let b = 20;
//     f = function () {
//         console.log(b * 2);
//     }
// }

// g();
// console.log(f);
// h()
// console.log(f);


// const boardPassengers = function (n, wait) {
//     // const perGroup = n / 3;

//     setTimeout(() => {
//         console.log(`We are now boarding all ${n} passengers`);

//         console.log(`There are 3 group, each with ${perGroup} passenges`);
//     }, wait * 1000);

//     console.log(`Will start boarding in ${wait} seconds`);
// }

// boardPassengers(100, 3)
// const perGroup = 1000;

////////////////////////////////////////////////////////////////////////

// Coding Challenge - 2

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector("body").addEventListener('click', function () {
        header.style.color = 'blue';
    });
})();
/////////////////////////////////////////

//javascript pass by reference
function callByReference(varObj) {

    console.log("Inside Call by Reference Method");

    varObj.a = 100;

    console.log(varObj);

}

let varObj = {
    a: 1
};

console.log("Before Call by Reference Method");

console.log(varObj);

callByReference(varObj)

console.log("After Call by Reference Method");

console.log(varObj);


/////////////////////////////////////////////////

//javascript pass by value
function square(x) {

    x = x * x;

    return x;

}

var y = 10;

var result = square(y);

console.log(y); // 10 
console.log(result); // 100 