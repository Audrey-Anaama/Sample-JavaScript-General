//Log a statement using console.log
console.log('hello from main.js')

//Variables

let age = 25
console.log(age)

const salary = 8000
console.log(salary)

//String type
const name = 'Audrey'
const language = 'JavaScript'
const channel = 'codevolution'

//Number type
const total = 0
const PI = 3.14

//Boolean type
const isPrimaryNumber = true
const isNewUser = false

//undefined type
let result
console.log(result)

// const res = null

//null type
const data = null

//non primitive (object)
const person = {
    'firstName': 'Bruce',
    'lastName': 'Wayne',
    'age': 30
}
console.log(person.firstName)

//Array
const oddNumbers = [1, 3, 5, 7, 9]
console.log(oddNumbers[1])

let a = 10
a = 'Audrey'
a = true
console.log(a)

// Assignment operator(=)
// let x = 10

// Arithmetic operator
let x = 10
let y = 5

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)
console.log(++x)
console.log(--y)

//comparison operators
let m = 10
let n = 5
console.log(m == n)
console.log(m != n)
console.log(m === n)
console.log(m !== n)
console.log(m > n)
console.log(m >= n)
console.log(m < n)
console.log(m <= n)

//Logical operators
const isValidNumber = x > 8 && 8 > y
console.log(isValidNumber)

//return true if either of the operands is true else return false
const isOkayNumber = x > 20 || 8 > y
console.log(isOkayNumber)

//Variable Negation
const isValid = false
console.log(!isValid)

//String operators
console.log('Bruce ' + 'Wayne')

//ternary operator (replaces a value based on the condition)
const isEven = 10 % 2 === 0 ? true : false
console.log(isEven)

//concatenation
console.log(2 +'3')
console.log(true + 3)
console.log(true + '3')

//Implicit Conversion (Javascript converts numbers in strings to actual numbers when an arithmetic operator is used)
console.log('4' - '2')
console.log('4' * '2')
console.log('4' / '2')
console.log('Bruce' - 'Wayne')
console.log('5' + true)
console.log(true + '5')
console.log('5' - true)
console.log('5' - false)
console.log('5' - null)

//Explicit Type Conversion
console.log(Number('5'))
console.log(Number(false))
console.log(Number(''))
//alternative
console.log(parseInt('5'))
console.log(parseFloat('3.14'))
console.log(String(500))
console.log(String(true))
//string alternative(will not work on NULL and UNDEFINED)
console.log((500).toString())
console.log(Boolean(10))
//NULL, UNDEFINED, 0, '', NaN all return false when converted to boolean everything else will return true
console.log(String(    ))

//EQUALITY
const var1 = 10
const var2 = '10'

console.log(var1 == var2)
console.log(var1 === var2)

//For Loop
for(let i = 1; i <= 5; i++) {
    console.log('Iteration number ' + i)
}

//While Loop
let i = 1 
while(i <= 5) {
    console.log('Iteration number ' + i)
    i++
}

//Do While Loop
let o = 1
do {
    console.log('Iteration number ' + o)
    o++
} while(o <= 5)

//For Of Loop
const numArray = [1, 2, 3, 4, 5]

for (const num of numArray) {
    console.log('Iteration ' + num)
}

//Functions
function greet(username) {
   console.log('Good morning ' + username) 
}

greet('Audrey') 
greet('Brenda')
greet('Jooeee')

function add(a, b) {
    return a + b
}

const sum = add(10, 5)
console.log(sum)


//Scope (Accessibilty of variables)
//Global scope
const myNum = 100

//Block scope ('Let' and 'const' variables can only be accessed within the curly brackets)
if (true) {
    const myName = 'Audrey'
console.log(myName)
console.log(myNum)
}


//Function scope(Variables declared within a function cannot be accessible from outside the function)
function testFn() {
    const myName = 'Brenda'
    console.log(myName)
    console.log(myNum)
}
testFn()

 