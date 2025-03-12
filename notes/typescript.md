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
