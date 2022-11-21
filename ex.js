//es5 global constants

var PI = 3.14;
PI = 42; //stop me from doing this

//es2015 global constants
const PI = 3.14;
PI = 42; //will throw an error

//what is the difference between var and let?
// let is tied to the scope of a block statement, var is global

//what is the difference between var and const?
//var is global and can be redeclared and reassigned and hoisted, const is block scope

//what is the difference between let and const?
//let can be reassigned but not redeclared and const can do neither

//what is hoisting?
//it is the process where the interpreter moves the declaration of functions, variables or classes to the top of their scope prior to the execution of the code.
