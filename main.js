//functions 
// const sayHello = function(name) {
//     console.log('Hello world ' + name)
// }

// let name = prompt('Enter a name')
// sayHello(name)
//-----------------------------------------
// const growOld = function(user) {
//     user.age++
// }

// const newUser = {
//     name: 'Shira',
//     age: 35
// }

// growOld(newUser)
// console.log(newUser)
//-----------------------------------------I/O
// const getSum = function(x, y) {
//     return (parseInt(x) + parseInt(y))
// }

// let x = prompt('Enter a X')
// let y = prompt('Enter a Y')
// console.log("The calculation is " + getSum(x, y))
//     //-----------------------------------------find the largest number
// const findLargest = function(arr) {
//     let largestNum = arr[0]
//     for (const value of arr) {
//         if (value > largestNum)
//             largestNum = value
//     }
//     return largestNum
// }
// const numbers = [1, 4, 55, 23, 4, 5, 33, 20]
// const largestNum = findLargest(numbers)
// console.log(largestNum)

//--------------------------------------------method
// const user = {
//     name: 'Danny',
//     speak: function() {
//         console.log('hello class')
//     }
// }
// user.speak()

//----------------------------------------------------
// const growOld = function(user){
//     user.age++
//   }

//   const aDude = {name:"Ayd Ood", age: 23}
//   growOld(aDude)

//   console.log(aDude) // prints {name: "Ayd Ood", age: 24}
//----------------------------------------------------
// function sum(...theArgs) {
//     return theArgs.reduce((previous, current) => {
//         return previous + current;
//     });
// }

// console.log(sum(1, 2, 3));
// // expected output: 6

// console.log(sum(1, 2, 3, 4));
// // expected output: 10

//---------------------------------------------------------
// const multiply = function(x, y = 2) {
//     console.log(x * y)
// }

// multiply(3, 4) // prints 12
// multiply(3) // prints 6
//------------------------------------------------------------------------------
// const changeArray = function(arr){
//     let innerArray = arr
//     innerArray[0] = 50
//   }

//   const numbers = [1, 2, 3]

//   changeArray(numbers)
//   console.log(numbers) // prints [50, 2, 3]
//----------------------------------------------------------------------------
// const getInterest = function(money) {
//     return money * 0.2
// }

// const getDebt = function(money) {
//     const interest = getInterest(money)
//     return money + interest
// }

// const borrowedMoney = 100
// const debt = getDebt(borrowedMoney)
// console.log(debt) // prints 120
//--------------------------------------------------------------------------------
// greet() //works without a problem,function declarations can be called from anywhere because JS will hoist them (send them up to) the top of the JS file
// greetExpression() //throws an error,function expressions can only be used after they're initialized

// function greet() {
//     console.log("Hello there, from the wild, wild West")
// }

// const greetExpression = function() {
//     console.log("Uh oh")
// }

//----------------------------------------------------------------------------------method
const person = {
    name: "Julius",
    speak: function() {
        console.log("Et tu, Brutus?")
    }
}
console.log(person.name) //you know what this will do

person.speak() //and this? Try it out!
    //-----------------------------------------------------------------------------------------------------