# 0x0C. JavaScript advanced
## Learning Objectives
### What is lexical scoping in JavaScript
To fist understand **Lexical scoping** we must understand the different ways of declaring variables within JavaScript.
	* **let**, **var**, and **const** are the three different ways to declare variables within JavaScript, however, they have different scopes from one another. 
		ex.
```
{
  // do some job with local variables that should not be seen outside

  let message = "Hello"; // only visible in this block

  alert(message); // Hello
}

alert(message); // Error: message is not defined
```
* In JavaScript every code clock and running function has have an internal associated object known as a lexical environment.
	* This Consists of two parts: *Environment Record* that stores all local variables as its properties(this).
	* A reference to the outer lexical environment that is associated with the outer code.
### What is closure in JavaScript
* Closure in JavaScript is a way of defining all functions in javascript because they are all considered Closures  but more specifically closure is a technique in which a function has access to the parent functions’ scope, even after the parent function scope has closed.
``` 
const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter}
})();

add();
add();
add();

// the counter is now 3
```

### How to use closure
* You can use closure by wrapping a function inside of another function so that the inner function may have access to the parent functions variables.

### How to chain different closures
You can chain different closures by having them return on each other as long as they are nested and have access to the outer function variables.
```
// global scope
var e = 10;
function sum(a){
  return function(b){
    return function(c){
      // outer functions scope
      return function(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

console.log(sum(1)(2)(3)(4)); // log 20

// You can also write without anonymous functions:

// global scope
var e = 10;
function sum(a){
  return function sum2(b){
    return function sum3(c){
      // outer functions scope
      return function sum4(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

var sum2 = sum(1);
var sum3 = sum2(2);
var sum4 = sum3(3);
var result = sum4(4);
console.log(result) //log 20
```
### How to simulate private methods with Closure
* To simulate private methods with Closure within JavaScript all you have to do is declare an anonymous function and have multiple functions declared within it that all have access to the same lexical scope of outside of itself and in the parent.
```
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  }
};

var counter1 = makeCounter();
var counter2 = makeCounter();

alert(counter1.value());  // 0.

counter1.increment();
counter1.increment();
alert(counter1.value()); // 2.

counter1.decrement();
alert(counter1.value()); // 1.
alert(counter2.value()); // 0.

```
### The execution stack order with JavaScript
The execution of the stack-order within JavaScript is the LIFO(Last In First Out) principal. Whenever you run a script  Global Execution Context is put on the stack as a reference to all variables within that function. If a function is within a function that Global Execution Context of that function gets pushed on the stack as well. 
