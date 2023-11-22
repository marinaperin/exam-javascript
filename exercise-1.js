// Exercise 1

// 1 

const userName = prompt('Write your name');

// 2

const userYear = Number(prompt('Write your birth year'));

// 3 

let isLeapYear;
if (userYear%4 === 0 && userYear%100 !== 0|| userYear%400 === 0){
    isLeapYear = 'a leap year';
}else{
    isLeapYear = 'not a leap year';
}
alert(`Hello ${userName}, your birth year is ${isLeapYear}`);