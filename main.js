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

    let semiperimeter = 0.5*(a + b + c);

    let area = Math.sqrt(semiperimeter*(semiperimeter - a)*(semiperimeter - b)*(semiperimeter - c)); // Heron's formula

    return area;
}

// Task 0.6
function maxNumber() {

    let maxNumber = 0;

    for(var i = 0; i < arguments.length; i++){
        if(arguments[i] > maxNumber){
            maxNumber = arguments[i]
        }
    }
    return maxNumber;
}

// Task 0.7
function celsiusToFahrenheit(celsius){

    return (celsius/5) * (9) + 32;

}

function fahrenheitToCelsius(fahrenheit) {
    
    return (fahrenheit - 32) * (5) / 9;

}

// Task 0.8
function numberToHours(int) {
    let hrs = Math.floor(int / 60);
    let mins = int % 60;
    
    return (hrs <= 1 && mins > 11) ? (hrs + " hour, " + mins + " minutes")
    : (hrs > 1 && mins <= 1) ? (hrs + " hours, " + mins + " minute")
    : (hrs <= 1 && mins <= 1) ? (hrs + " hour, " + mins + " minute")
    : (hrs + " hours, " + mins + " minutes");
    
}

// Task 0.9
function vowels(str) {

    let vowel = /[aeiouAEIOU]/gi;
    let output = str.match(vowel);

    console.log(output.toString());
}

// Task 0.10
function commonChars(str1, str2) {
    let commonLetters = [];

    for(var i = 0; i < str1; i++){
        for(var j = 0; j < str2; j++){
            if(str1[i] === str2[j]) {
                commonLetters.push(str1[i])
            }
        }
    }
    return "Common letters: " + commonLetters.toString();
}
