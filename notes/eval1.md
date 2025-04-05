### Properly explain the 3 HTML tags that should only be in the body tag.

1. Header - holds titles and navigation options that go at the top or aides of the page
2. Main - holds the primary content of the page
3. Footer - holds copyright info, links, site map, and any other information that goes at the bottom of the page 


### Properly explain these primitive data types: number, string, and Boolean.
Numbers, convert string into number, strings, single quote, double quote, template string,
Boolean, naming convention. Why can't their values change after declaring them as const?

1. Primitive Data Types:

Number:
- represents both integer and floating-point numbers. JavaScript doesn’t differentiate between integers and floating-point numbers.
  - Example: 
    let age = 25;  // integer
    let price = 19.99;  // floating-point number

String:
- sequence of characters that can be alphabetic, numberic, or alphanumeric, enclosed in either single quotes (`'`), double quotes (`"`), or backticks (`` ` ``). All three are used to represent text.
  - Example:
    let firstName = 'John';  // single quote
    let lastName = "Doe";  // double quote
    let message = "It's valid until the end of the month."
    let message = 'Descartes said "I think, therefore I am."'
    let greeting = `Hello, ${firstName} ${lastName}!`;  // template string

Boolean:
- can only have two values: 0 (falsy) or 1 (truthy), true or false, yes or no. Used for conditional checks, controlling attributes and flags for felds (when managed in a database) and logical operations.
  - Example:
    let isActive = true;
    let isComplete = false;

    Falsy: empty string
    Truthy: populated string
- should start with a question word, whatever makes the most sense for the situation: is, should, did, etc.

2. Converting String to Number:
- You can convert a string into a number in a few ways:
  - Using `Number()` constructor:
    let str = '123';
    let num = Number(str);  // num is now 123 (a number)

3. Single Quotes (`'`) and Double Quotes (`"`): 
- Used to define strings. JSON requires double quotes. Single quotes are used for specific cases, like strings within objects or functions, to improve readability
    let str1 = 'Hello';  // single quote
    let str2 = "World";  // double quote

4. Template String (Backticks `` ` ``):
- Template strings, denoted by backticks, allow embedding variables or expressions inside the string using `${}`. Also used in Markdown to add emphasis so code snippets are easier to read. 
  - Example:
    let name = 'Alice';
    let greeting = `Hello, ${name}!`;  // "Hello, Alice!"

5. Naming Convention:
- Variables and constants in JavaScript typically follow the camelCase convention, meaning that the first word is lowercase, and subsequent words are capitalized.
- Functions are usually also in camelCase.
- Components use PascalCase.
- Clsses use PascalCase.
- All coding elements' names should reflect their purpose, i.e. a function should start with a verb explaining what it does, such as handleSumbit or getRootPath. 

6. Why Can’t Values Change After Declaring with `const`?
- `const` is used to declare variables that don't change, like a constant in math, meaning their value cannot be reassigned once the variable is assigned. However, the contents of objects and arrays declared with `const` can still be modified, but the variable identifier itself cannot point to a different object or array. This behavior helps maintain the integrity of data and prevents accidental changes to values that should remain constant.

### Properly explain these object data types: arrays and objects
Array syntax, length, items, extract items, object syntax, properties, dot notation, bracket notation, add properties before object creation, add properties after object creation. Why can they be declared as const but their values can change?

1. Arrays - ordered collections of values, where each item is assigned an index starting with 0. Created with brackets [].
    ```js
    const car = ["red", 2020, isForSale]`
    ```
     - .length = length of array `console.log(car.length)`
     - extract items - uses bracket notation to extract by the position `console.log(car[0])`

2. Objects - collections of key-value pairs where each key or property name maps to a value; comma-separated list
 ```js  
    const person = {
      name: "Alice",
      age: 25,
      city: "New York"
    };

    person.name = "Ted";
    person.lastname = "Smith";
    person.birthday = "19700325";

    const car = {};
    car["color"] = "red";
    
    const property = "engine";
    car[property] = "v6"
```
- You can add properties after creation by using bracket or dot notation.      
- items - the contents of the object, can have properties, uses dot notation `car.color`, `car.year`, `car.status` 
- Brcket notation:
    
3. Why can they be declared as const but their values can change?
- The contents of objects and arrays declared with `const` can still be modified, but the variable identifier itself cannot point to a different object or array. This behavior helps maintain the integrity of data and prevents accidental changes to values that should remain constant.

### Properly explain functions.
Syntax, parameters, code block, return value, anonymous functions, arrow functions, inner functions.

- A block of reusable code that performs a specific task, used to break code into manageable pieces
  
1. Syntax

```js
function functionName(parameter1, parameter2, parameter3, parameterN) {
  // Code block
  return value; // Optional
}
```
- function declaration - function keyword identifies the following code block as a function
- functionName - actionverbOther 
  
2. parameters - input values passed into the function when called, can be none
3. code block - defines what the function does enclosed in {}
4. return value - result when function is completed, return keyword sends back a value if needed
5. anonymous functions - functions without names, often used as values in callbacks; often called as a variable or a parameter
6. arrow functions - => a shorter way to write functions
7. inner functions - nested inside other functions and can only be accessed from within that function; has access to the outer functions parameters and variables; cannot be called from other outer functions