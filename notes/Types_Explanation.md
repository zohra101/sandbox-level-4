
# Properly explain array types, custom types, callback types, and function return types

## Array types

1. **How to define them:**
   - `arrayName: Array<string>` - an array of strings.
   - `arrayName: string[]` - an alternative syntax for an array of strings.
   - `arrayName: Array<number>` - an array of numbers.
   - `arrayName: number[]` - an alternative syntax for an array of numbers.
   - `arrayName: Array<boolean>` - an array of booleans.
   - `arrayName: boolean[]` - an alternative syntax for an array of booleans.
   - `arrayName: Array<null>` - an array of null values.

2. **How to assert them:**
   Type assertion allows you to specify the type of an array. Example:
   ```typescript
   let arr = <Array<string>>["apple", "banana", "cherry"];
   // or
   let arr = ["apple", "banana", "cherry"] as Array<string>;
   ```

3. **Syntax:**
   - `name: type` — the syntax for declaring a variable and specifying its type.
     Example: `let fruits: Array<string> = ["apple", "banana", "cherry"];`

4. **Combination types:**
   - You can create arrays that accept multiple types, e.g., strings, numbers, and booleans:
   ```typescript
   let mixedArray: Array<string | number | boolean> = ["apple", 42, true];
   ```

## Custom types

5. **How to define them:**  
   Custom types can be created by defining aliases for existing data types. This can make complex types easier to manage and read.  
   Example:
   ```typescript
   type StringOrNumber = string | number;
   ```

6. **How to assert them:**  
   Type assertion for custom types works the same way as with arrays.  
   Example:
   ```typescript
   let value = <StringOrNumber>42; // or
   let value = 42 as StringOrNumber;
   ```

7. **Syntax:**
   - `type CustomType = <type definition>` — defines a custom type alias.
   Example:
   ```typescript
   type UserID = string | number;
   ```

8. **Combination types:**
   Custom types can be combined in many ways.  
   Example:
   ```typescript
   type Point = { x: number; y: number };
   type Shape = Point | { radius: number };
   ```

## Callback types

9. **How to define them:**
   A callback type is defined by creating a function type alias.  
   Example:
   ```typescript
   type Callback = (message: string) => void;
   ```

10. **How to assert them:**
    You can assert a variable to be a callback type similarly to other types.  
    Example:
    ```typescript
    let handleCallback = <Callback>((msg) => { console.log(msg); });
    ```

11. **Syntax:**
    - `type Callback = (param: type) => returnType` — defines a callback type.
    Example:
    ```typescript
    type Callback = (name: string, age: number) => string;
    ```

12. **Combination types:**
    A callback can accept multiple argument types.  
    Example:
    ```typescript
    type MultiCallback = (x: string | number, y: boolean) => void;
    ```

## Function return types

13. **How to define them:**
    A function return type is specified after the parameter list using `: returnType`.  
    Example:
    ```typescript
    function add(x: number, y: number): number {
      return x + y;
    }
    ```

14. **How to assert them:**
    You can assert the return type of a function using type assertions.  
    Example:
    ```typescript
    let result = <number>add(2, 3);
    ```

15. **Syntax:**
    - `function name(param: type): returnType` — defines the function with a return type.
    Example:
    ```typescript
    function greet(name: string): string {
      return `Hello, ${name}`;
    }
    ```

16. **Combination types:**
    Functions can return multiple types using union types.  
    Example:
    ```typescript
    function parseInput(input: string | number): string | number {
      if (typeof input === "string") {
        return input.toUpperCase();
      }
      return input * 2;
    }
    ```
