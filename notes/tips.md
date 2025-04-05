# Tips

### Object destructuring

- Objects can be destructed similar to arrays. Just match the property names.
- `const {color, year, isForSale} = {color: "red", year:2025, isForSale: true}`
- `const car = {color:"green". year: 2023, isForSale:false}`
- `const {color, year, isForSale} = car;`
- `function getCar({color, year, isForSale})`

### Primitive v. Object constants

```js
// Primitive data types cannot be changed after being declared as a constant
const mystring = "hello";
mystring = "bye"; //ERROR
// Object data type can change values after being declared as a constant
// The object, or container of items, remains contant
// The items can change without changing the container
const myObject = { message: "hello" };
myObject.message = "bye"; //NO ERRROR
```

### NPM scripts

- Add more common CLI commands

1. `"test": "npx jest"` 2.` "deploy": "git push"`
2. To run a single test file `"test": "npx jest ./src/modules/addition.test.ts"`
3. Update script `"build": "npx webpack -- mode=production"`

```json
// watch: true, // Not needed for Webpack dev server
// watchOptions: { aggregateTimeout: 1000 }, // Not needed because Webpack dev server doesn't prodi
// mode: "production", // Disables the debugger. Compresses the code so file size is smaller.
mode: "development", // Enable the debugger
devtool: "source-map", // Allows the debugger to show us the original code instead of the compress
//Webpack does not process .jsx files by default
//Let Webpack look for .jsx files when file extensions are not specified in import statements
resolve: {
extensions: [".js", ".jsx", ".ts", ".tsx"],

devServer: {
historyApiFallback: true, //Provides support for SPA's by loading index.html on 404 errors.
// open: true, //Automatically open a browser tab when starting webpack dev server
as Configuration;
},
```

### Open a browser tab from the CLI.

- The `open-cli` module can open a browser tab from the terminal command line.
- Specify the full URL copied from the browser address bar.

1. Install devDependency:`pnpm install open-cli --save-dev`.
2. Run: `npx open-cli http://localhost:9000`.
3. OPTIONAL:add this script in package.json file `"open-tab": "npx open-cli http://localhost:9000"`.

### Manually close ports

- Sometimes ports can remain open when VS Code is closed without stopping a server
- Use the `kill-port` module to close ports that were accidentally left open

1. Install devDependency: `pnpm install kill-port --save-dev`
2. Run: `npx kill-port 8000`
3. OPTIONAL: add this script in package.json file `"close-port": "npx kill-port 9000"`

### Run multiple commands from 1 script

- Use the `&&` symbol to combine multiple commands into 1 NPM script

1. Edit `start` script in package.json file`"start": "npx kill-port 8900 && npx nodemon ./dist/main.js"`
   - closes the port and then starts the server
2. Edit `build` script in package.json file`"build": "npx open-cli http://localhost:9000 && npx webpack --watch"`
   - opens a browser tab to the specified url then starts webpack bundling
3. OPTIONAL: update `"start"` script in package.json file `"start": "npm run close-port && npm run start-server"`
4. in a new script: `"start-server": npx nodemon ./dist/main.js`
   1. then run the new `"start"` script
   - closes the port and then starts the server
   1. OPTIONAL: add a new `"build"` script in package.json file `"build": "npm run open-tab && start-build"`
   2. add in a new script: `"start-build"`
   3. then run the new `"build"` script above
      -opens the browser window and starts webpack bundling

#### Example: NPM scripts in package.json file
```json
{
    "scripts": {
		"start": "npm run close--port && npm runstart-server",
		"build": "npm run open-tab && npm run start-build",
        "-------------": "----------------", (this is just an empty spacer so that the code doesn't look jumbled; completely OPTIONAL
        "test": "npx jest",
        "deploy": "git push",
        "open-tab": "npx open-cli http://localhost:8000",
        "close-port": "npx kill-port 9000",
        "start-server": "nodemon ./dist/main.js",
        "start-build": "npx webpack --watch"
    }}
```

### Restructure Sandbox Level 4
```
>Sandbox Level 4
   >backend
   >frontend
   >notes
   {} Sandbox Level 4.code.workspace
```
1. Create a folder in Sandbox Level 4 called `frontend`.
2. Move the `frontend` code into the `frontend` folder and create a workspace.
3. The `notes` folder and `workspace` file can stay in the main sandbox folder.
4. Create a folder in Sandbox Level 4 called `backend`.
5. Copy the Express template into the `backend` folder and create a `workspace`.

### Use async/await in a React component
```javascript
function componentDidMount ()
getResponse();
```

- The `ComponentDidMount` function cannot directly use async/await.
- From `componentDidMount`, call a function and use async/await from there.

1. Let componentDidMount call a function.
2. Let that function use async/await.