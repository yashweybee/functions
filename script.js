'use strict';


const bookings = []
const creatBooking = function (flightNum = 'A199', numPassengers = 100, price = 700) {

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    bookings.push(booking)
}

creatBooking(234, 55, 234);
creatBooking('A123', undefined, 500);
console.log(bookings);
