// basic structure of function
function name(parameters) {execution}

// other ways to declare a function:
// Storing into a const/var/let ex.:
const fun1 = function (parameters) {execution}

// in a array ex.:
const array = [function(parameters) {execution}, fun1, name]
console.log(array[0](2, 3))

// in a object ex.:
const obj = {}
obj.speak = function() {return 'Hello!'}
console.log(obj.speak())

//
// Default value of a function

function sum(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(sum(0, 0, 0))

// Arrow Funciton

let double = (a) =>  2 * a

let double = (a) =>  {
    return 2 * a
}

let hello = function (){
    return "Helllo!"
}

let hello = () => "Hello!"