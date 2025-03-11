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
1. Create `tsconfig.json`.
2. Add an object with compilerOptions.jsx: preserve.
3. Observe TypeScript errors.
4. Add to the object compilerOptions.module: preserve.
5. Observe TypeScript errors.

### Use TypeScript to specify data types
- Specify data types with a colon `color: string`.
- Specify data types for parameters that don't have a default value `event: Event`.
- Specify data types for class properties that don't have a default value.
- If you're not sure what the data type should be, set it to `any`