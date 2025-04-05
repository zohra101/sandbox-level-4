# TypeScript

### TypeScript
- A programming language that enhances JavaScript
- Allows data types to be specified and verified
- When data types are specified, bugs can be avoided
- Specified data types provide a popup intellisense menu of available properties
- Website: https://www.typescriptlang.org/

### Configure Babel for TypeScript
1. Change `babel.config.json` to `babel.config.js`.
2. Install the preset: `pnpm install -save-dev @babel/preset-typescript`.
3. Add the preset to `babel.config.js`.

```js
export default {
presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
};
```

### Configure Webpack for TypeScript
1. Add `.ts` and `.tsx` to the `babel-loader` exclude section.
2. Add `.ts` and `.tsx` to the `resolve` section.

### Create a TypeScript React template
1. Rename files in the \src folder `.js` to `.ts`.
2. Rename files in the \src folder `.jsx` to `.tsx`.
3. Observe TypeScript errors.
4. Run the app.

### Configure TypeScript to be less strict
```json
{
    "compilerOptions": {
        "jsx":"preserve",
        "module": "preserve"
    }
}
```

1. Create `tsconfig.json`.
2. Add an object with compilerOptions.jsx: preserve.
3. Observe TypeScript errors.
4. Add to the object compilerOptions.module: preserve.
5. Observe TypeScript errors.

### Use TypeScript to specify data types
- Specify data types with a colon `color: string`.
- Specify data types for parameters that don't have a default value `event: Event`.
- Specify data types for class properties that don't have a default value.
- If you're not sure what the data type should be, set it to `any`.

### TypeScript convenient imports
- TypeScript provides intellisense popup menus for objects and exports.
- The files do not need to be open for TypeScript to get information.
- The objects and exports should be in TypeScript files.
- Try doing an import from a file that's closed.

### No built-in TypeScript support for React
- TypeScript cannot provide intellisense popup for JavaScript files.
- React was written in JavaScript.

1. From a `.tsx` file, try to import `React`.
2. Try to automatically import `useState` and `useEffect`.
3. Observe no automatic imports.

### React data types
- Install a package that provides TypeScript support for React

1. `pnpm install -- save-dev @types/react`
2. Try to automatically import `React`, `useState`, and `useEffect`.
3. Observe automatic import statements.

### TypeScript primitive data types
- String - `color: string`
- Number - `year: number`
- Boolean - `isForSale: boolean`
- Null - `myNullVariable: null`
- Undefined - `myUndefinedVariable: undefined`

### TypeScript array data types
- String array - `colors: Array<string>` or `string[]`
- Number array - `years: Array<number>` or `number[]`
- Boolean array - `isForSale: Array<boolean>` or `boolean[]`
- Combination array - `myData: Array<string | number | boolean>`

### React Feedback Practice
- Use functional programming to output form feedback the React way.

1.	In a React component, create a state variable called `promoMessage`.
2.	Render` promoMessage` and a `form` that accepts a `name` and `email`.
3.	When the form is submitted, let it call `handleSubmit`, an inner function.
4.	Create a module function called `getPromoMessage` that accepts an event object.
5.	Let `getPromoMessage` extract the values from the form in the event target.
6.	Create a promo code message that includes the values from the form.
7.	Let `getPromoMessage` return the promo code message.
8.	In `handleSubmit`, call `getPromoMessage `and store the return value.
9.	Use a `setter` to store the return value in` promoMessage`.
10.	Render the `promoMessage` in a Bootstrap Alert instead.

### TypeScript tuple data types
```js
	let myTuple: [string, Function];
	myTuple = useState("hello");
```
- Informsts TypeScrept about the length and items of an array
- Tuple for color, year, and isForSale - `carInfo:[string,number,boolean]`.
- Tuple for first, middle and last name - `fullName:[string,string,string]`.
- Tuple for grades per Codex level - `grades:[number,number,number,number]`.

### TypeScript object data types
- Informs TypeScript about the properties that are expected to be in objects.

- `class Car {color: string, year: number, isForSale: Boolean}`.
- `interface FullName{first: string, middle: string, last: string}`.
- `type CodexGrade = {level1: number, level2: number, level3: number, level4: number}`.

### TypeScript custom data types
- A custom data type can be created from any of the JavaScript data types.
- Informs TypeScript of the alias that you want to use for the data type.
- See [customDatatypes.ts](../src/modules/customDatatypes.ts) for examples. 

- `type Cars = Array<Car>`
- `type Attendance = "present"|"late"|"excused"|"absent"`
- `type CodexLevel = 1|2|3|4`
- `type CarInfo = [string, number, Boolean]`

### Type assertion  
- Informs TypeScript about the data type you expect a variable to be.
- See [assertion.ts](../src/modules/assertion.ts) for examples. 
  

- `const cars: Cars=[{"red",2025,true},{"green",2024,false},{"white", 2000, true}]`
- `const cars = [new Car(), new Car(), new Car()] as Cars`
- `const attendance: Attendance = "present"`

NOTE: place assertions at the beginning to minimize errors; you'll know the times when you are not able to do this.

### Enable TypeScript support for Jest
1. Uninstall `@jest/globals`.
2. Install `@types/jest` to enable TypeScript support for Jest.
3. Install `@babel/preset-typescript`.
4. Add `@babel/preset-typescript` to the Babel config file.
5. Observe intellisense without importing Jest test functions because it's only for JavaScript files.

### Return types
- Informs TypeScript about the data type a function should return.
- See [returnTypes.ts](../src/modules/returnTypes.ts) for examples. 
  
- `function output( message:string ) : void`
- `function getPromoMessage( event: Event ) : string`
- `function authentication( email: string, password: string ) : boolean`
- `function handleSignlnAttempt( event: Event ) : string | void`

### Callback types
- Informs TypeScript about what type of callback function signature is expected.
- See [callbacTypesWithNotes.ts](../src/modules/callbackTypesWithNotes.ts\) for examples. 
  
- `(message: string) => string`
- `(event: Event) => void`
- `() => {}`
- `(value: any) => [ any, (value: any) => void ]`
- `Function`

### Declaration file
- Declaration files inform TypeScript of data types that were not defined in the source code
- Filename must end with `.d.ts`

1. Create `index.d.ts` in the root folder
2. Add `declare module " *. jpg"` to inform TypeScript that `.jpg` files can be imported
      1. `*` is like a wildcard, as it acts for any asset extension
3. Add declarations for other asset extensions, examples below

```jsx
// TypeScript declaration file
// Declaration files inform TypeScript of data types that were not defined in the source code
// Filename must end with .d.ts
//Inform TypeScript that the declared file types can be imported

declare module "*.jpg";
declare module "*.png";
declare module "*.mp4"; 
declare module "*.jpeg";
```

### Data types for built-in JavaScript modules
```jsx
async function myFunction(){};
const promise = new Promise(callback);
```
- Some built-in JavaScript modules do not have TypeScript support.

1. Observe TypeScript errors when using `async` and `Promise`.
2. Run: `pnpm install @types/node --save-dev`.
3. Observe the TypeScript error is gone.

### TypeScript declarations for external scripts
- TypeScript doesn't recognize functions that come from external scripts (like CDN files).
- Add functions and objects from external scripts to the TypeScript
declaration file.

1. Edit the TypeScript declaration file (ex. `index.d.ts`).
2. Add an object declaration for Bootstrap - `declare const bootstrap: any`.
3. Add a declaration for image maps - `declare const imageMapResize: any`.



