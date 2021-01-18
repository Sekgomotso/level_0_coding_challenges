'use strict'

// Task 0.1
var x = 0
var y = 1
console.log(x, y)

x = x + 3
y = y + x
console.log(x, y)

// Task 0.2
var x = 1 + 1 * 2
var y = (1 + 1) * 2
var z = 1 + ( 1 * 2 )
var a = 1 + 1 * 2 / 2
var b = (1 + 1 * 2 ) /  2

console.log(x, y, z, a, b)

// Task 0.3
function hello(str) {
    return "Hello " + str + "!";
}

// Task 0.4
function evenOrOdd(int){
    int % 2 === 0 ? console.log("even") : console.log("odd");
}

// Task 0.5
function areaOfATriangle(a, b, c){

    let semiper = 0.5*(a + b + c);

    let area = Math.sqrt(semiper*(semiper - a)*(semiper - b)*(semiper - c)); // Heron's formula

    return area;
}

// Task 0.6
function maxNumber(a,b,c) {
    return (a > b && a > c) ? a
    :(b > a && b > c) ? b
    : c;
}

// Task 0.7
// celsius to fahrenheit
function fahrenheit(cel){

    return (cel/5) * (9) + 32;

}

// fahrenheit to celsius
function celsius(fah) {
    
    return (fah - 32) * (5) / 9;

}

// Task 0.8
function numberToHours(int) {
    let hrs = Math.floor(int / 60);
    let mins = int % 60;
    
    return (hrs <= 1) ? (hrs + " hour, " + mins + " minutes") : (hrs + " hours, " + mins + " minutes");
    
}

// Task 0.9
/*
Write a function that takes in a string and then prints out all the vowels in the string. 
Make sure it can deal with capital letters and small letters.
 */
function vowels(str) {
    let vowel = aeiouAEIOU;
    let result;
    
    return result;
}