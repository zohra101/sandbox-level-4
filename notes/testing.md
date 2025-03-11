# Testing 
### Unit Testing
- Individual functions or classes are tested to ensure they work as expected.
- Automatically check functions or classes for bugs.
- Describe what is being tested and how to test it.
- Helps us to search for and find bugs.
  
### Describe a test
`const result = addition(x,y);`
- What is being tested? The addition function.
- What is expected? The result to be the addition of x and y.
- How to prepare the test? Set the numerical values of x and y.

### Jest Installation
- A node module (or package) for writing automated tests.
1. `npm install jest`
2. `npm install @jest/globals`

### Babel
- A node module (or package) for converting export/import syntax to the old way.
- Jest is only compatible with the old import/export syntax.

- `npm install @babel/core`
- `npm install @babel/preset-env`
- Add to `babel.config-json` `"presets": ["@babel/preset-env"]`
  
   ```jsx
   { "presets":["@babel/preset-env", "@babel/preset-react"]
        }
    ```

### Write a test description
`test ("The addition function adds numbers", callbackTest1);`

1. Code the addition function in `addition.js`.
2. Create `addition.test.js` and import the addition function.
3. Use the test function to describe the test.
4. Include a callback which will contain instructions for the test.

### AAA test phases
- Instructions for a unit test should include AAA phases.
- A unit is the function or class being tested.

1. `Arrange` - Set the variables for the test.
2. `Act` - Use the unit with the variables.
3. `Assert` - Check if the unit works as expected.

### Write the test with AAA phases
1. `Arrange` - In the callback, set the numerical values of x and y.
2. `Act` - Use the addition function with the variables and capture the result.
3. `Assert` - Use the expect function and the toBe method to validate the result.
4. Use comments to mark each test phase.

AAA Example:
```javascript
function callbackTest1() {
    //ARRANGE: set the variables for the test
    const x = 3;
    const y = 4;

    //ACT: Use the unit with the variables
    const result = addition(x, y);

    //ASSERT: Check if the unit works as expected
 expect(result).toBe(7);
}
```
### Run the automated test
- The Jest module searches for test files and runs the tests they contain.
  
1. In the terminal, type `npx jest`.
2. Observe the results.

### Add another test
- Write a `test` in `addition.test.js` using addition with a positive and negative number.

`test("The addition function adds a positive and negative number.", callbackTest2);`
  
1. Use the `test` function to describe what is being tested and include `callbackTest2`.
2. Write the `test` instructions in `callbackTest2`.
3. Include AAA phases in the test and use comments to mark each phase.
4. Use `Jest` to run the tests.

### Group the tests together
- Tests can be grouped together with the `describe` function and an anonymous function.

`describe("Testing the addition function", function () {});`

1. Use the `describe` function to indicate that the `addition` function is being tested.
2. Move the tests into the anonymous function code block.
3. Rewrite the test descriptions to be less redundant.
4. Use `Jest` to run the tests and observe the difference `npx jest`.

### Arrow function
```javascript
function () {}; // anonymous function
() => {}; //arrow function
```
- An arrow function can take the place of an anonymous function

```js
describe("", () => {});
```

1. Remove the `function` keyword.
2. Put an `arrow` between the parentheses and the code block.

### Increase readability
- Use an `arrow` function and the `it` function to increase readability

`describe("The addition function", () => {});`
  
1. Replace the `anonymous function` with an `arrow` function.
2. Replace the `test` function with the `it` function.
3. Rewrite the `test` descriptions to be less redundant.
4. Rename the `callbacks` to describe what they are testing.

#### Example:
```js
describe("Testing the addition function", () => {
    it(" adds numbers", addPositiveNumbers);
    it("adds positive and negative numbers.", addPositiveNegative);
});
```

### Test more possibilities
- Write a test for the addition function with 2 negative numbers
`it("can add negative numbers", addNegatives);`

1. Use the `it` function to describe the test and include a descriptive callback
2. Write the test instructions in the callback
3. Include AAA phases in the test and use comments to mark each phase
4. Use Jest to run the tests `npx jest`

### Test unlikely possibilities
`expect (result) .toBe(NaN) ;`
1. Test when the variables are `strings`.
2. Test when the variables are `number strings`.
3. Use `Jest` to run the tests `npx jest`.

### Failed tests
`const result = Number(x) + Number(y) ;`
- When a test fails, find out what went wrong
1. Check the test for bugs.
2. Check the addition function for bugs.
3. Change the addition function to handle strings.
4. Use `Jest` to run the tests.

### Unit Testing Summary
- Jest packages: `
`npm install jest`
`npm install @jest/globals package`
- Babel packages
`npm install @babel/core`
`npm install @babel/preset-env`
`describe` function
 `test` function
`it` function
`expect` function
- Filename with `.test.js`
- Test likely possibilities
- Test unlikely possibilities
- Arrange
- Act
- Assert

### Test DatabaseSimulation
- Create new JS file :  DatabaseSimulation.test.js

1. Use the `describe` function for the constructor.
2. Add tests for likely and unlikely possibilities.
3. Use the `describe` function for `getData`.
4. Add tests for likely and unlikely possibilities.
5. Use `Jest` to run the tests `npx jest`.

```js
describe("The DatabaseSimulation constructor", () => {
it("connects when the api key is correct", correctApikey);
it("doesn't connect when the api key is wrong", wrongApiKey);
it("doesn't connect when the api key is empty", emptyApiKey);
it("doesn't connect when the api key is a number", numberApikey);
it("doesn't connect when the api key is a booleTh", booleanApikey);
it("doesn't connect when the api key is a object", numberApikey);
});
```

#### EXAMPLE 1: CORRECT CREDENTIALS
```js
async function correctEmail() {
    //ARRANGE
    const apiKey = "xyz321";
    const client = new DatabaseSimulation(apiKey);
    const email = "abc@logins.com";

    //ACT
    const response = await client.getData(logins, email);

    //ASSERT
    expect(response).toEqual({ email: "abc@logins.com", password: "aaa" });
} 
```

NOTE: COMPARISON OF OBJECTS NEEDS TO USE toEqual INSTEAD OF toBe

#### EXAMPLE 2: INCORRECT CREDENTIALS
```js
async function wrongEmail() {
    //ARRANGE
    const apiKey = "xyz321";
    const client = new DatabaseSimulation(apiKey);
    const email = "zzz@logins.com";

    //ACT
    const response = await client.getData(logins, email);

    //ASSERT
    expect(response).toEqual({});
} 
```
NOTE: EXPECTS AN EMPTY OBJECT IF THE LOGIN DETAILS ARE INCORRECT

### Integration testing
- A set of functions or classes are tested to ensure they work together.
- Because one unit depends on another unit, the test results may not be reliable.
- The inner unit should be thoroughly tested and in working.

### Test authenticationSimulationDB
1. Test when the email and password are correct.
2. Test when the email is correct, and password are incorrect.
3. Test when the email is not in the list.
4. Test when the email is in the list, but the password is empty.
5. Test when the email is empty, but the password is in the list.

### toBe vs toEqual
```js
expect(result).toBe("dog");
expect(result) . toEqual({ animal: "dog" });
```

- Use `toBe` for strings, numbers, Booleans, NaN, null, and undefined
- Use `toEqual` for objects, arrays, classes, and functions
- Other expect methods https://jestjs.io/docs/expect

### Test Driven Development
- The technique of writing tests first, then writing the code afterwards.
- The tests act like a todo list, and can help with code planning and design.
- As tests pass, they provide a sense of achievement and satisfaction.
- TDD can reduce the feeling of being overwhelmed because each test is a small step.

### Functional Programming

- The technique of writing functions that accept input value and return output values.
- Code is more readable because functions describe what they do.
- Code is more reusable, especially if the functions accomplish only 1 task.
- Code is more composable - small functions can be combined to create a large function.