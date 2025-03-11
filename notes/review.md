# Review

### Sandobox Level 4
1. Create a new VS Code folder in the file system.
2. Create a VS Code workspace.
3. Copy a React template into the folder. 
4. Do not copy .git or .dist. 

### Review: JSX
```jsx
<main>
<h1>Hello world !< /h1>
</main>
```

-  JavaScript XML - JavaScript syntax that looks like HTML.

1. Rename component files from .js to .jsx.
2. Notice the icon.
3. Try to run the app.

### Configure Webpack for JSX
- Webpack does not process .jsx files by default.
- Let Webpack look for .jsx files when file extensions are not specified in import statements.

1. Add .jsx to the babel-loader section.
2. Specify resolve.extensions: `[".js", ".jsx"]`.

```json
export default {
	//MODULES ARE CODE/FILES THAT ARE IMPORTED
	module: {
		//RULES ARE A LIST OF WAYS TO PROCESS THE MODULES
		rules: [
			{
				test: /\.(js|jsx)/,
				exclude: /\.(scss|css|jpg|png|mp4|jpeg|otf|ttf|json)/, //DON'T COMPILE STYLE MODULES
				use: "babel-loader", //USE THIS LOADER TO COMPILE ALL OTHER MODULES
			},
			{
				test: /\.(scss|css)/, //COMPILE STYLE NODULES
				use: ["style-loader", "css-loader", "sass-loader"], //USE THIS LOADER TO COMPLILE STYLE MODULES
			},
			{
				test: /\.(jpg|png|jpeg|mp4)/,
				type: "asset/resource",
			},
		],
	},
	watch: true, //WATCH FOR CHANGES. PRESS CTRL+C TO CANCEL AND RETURN TO CLI.
	watchOptions: { aggregateTimeout: 3000 }, //GIVES WEBPACK MORE TIME TO COMPILE & PREVENTS BUILD ERRORS
	mode: "development", //ENABLES THE DEBUGGER
	devtool: "source-map", //ENABLES THE DEBUGGER CODE TO MATCH ACTUAL CODE
};
```

### PNPM - Performant Node Package Manager
- A package manager to replace npm
-  Packages installed by npm take up disk space when they are installed in projects
-  PNPM saves space by storing packages in a central location, then projects share them
-  Website: https://pnpm.io/

### Install packages with PNPM

1. Install PNPM globally: `npm install -- global pnpm`.
2. Delete the `node_modules` folder.
3. Install with PNPM: `pnpm install`.
4. Delete `package.lock.json`.
5. Use PNPM to install and uninstall packages from now on.

### Dev dependencies
`pnpm install -- save-dev`

- Packages that are only required for development purposes
- Packages that are not imported by your project
- Categorize packages as dependencies and dev dependencies

1. Uninstall dev packages: `pnpm uninstall`
2. Reinstall as dev dependencies: `pnpm install -- save-dev`

+ @babel/cli 7.26.4
+ @babel/core 7.26.9
+ cli 1.0.1
+ webpack 5.98.0
+ webpack-cli 6.0.1