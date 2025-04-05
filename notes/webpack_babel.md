# Webpack &  Babel

### Webpack dev server
- A feature-rich server that's integrated with Webpack
- Fast because it runs in memory only. 
- Writes bundles, but not to the hard drive.
- Uses the Webpack configuration file
- https://webpack.js.org/configuration/dev-server/

### Use Webpack dev server instead of Live Server
1. `pnpm install webpack-dev-server --save-dev`
2. `npx webpack server`
3. Open the displayed URL in a browser tab.
4. Observe the result.

### Webpack dev server folder structure
1. Create the `public` folder on the same level as the `src` folder.
2. Copy `index.html` into the `public` folder.
3. Change the script source to the output filename `src="main.js"`.
4. Refresh the browser result.

### Webpack dev server for SPAs
1. Load a page other than the home page.
2. Make changes to any of the pages.
3. Add Webpack configuration - `devServer: { historyApiFalback: true }`.
4. Restart the server.
5. Optionally open a browser tab automatically - `devServer: { open: true }`.

#### Example: 
```json
    devServer: {
        historyApiFallback: true, //Provides support for SPAs by loading index.html on 404 errors
        open: true, //automatically opens a browser tab when starting Webpack Dev Server 
    },
```
### Unnecessary configuration options
- Watch is not necessary because Webpack dev server automatically watches.
- Delay is not necessary because the dev server bundles without build errors.

In webpack.config.js file:
1. Disable the watch option.
2. Disable the delay option.

### Enable TypeScript support for Webpack
1. Rename the configuration file to `webpack.config.ts`.
2. Webpack uses ts-node to convert webpack.config.ts to JavaScript. `pnpm install ts-node --save-dev`. 
3. In webpack.config.ts, add `import {Configuration} from "webpack"`.
4. Assert the exported object as `Configuration`.
5. Observe Intellisense for configuration options.

### Webpack manual build
- Webpack dev server does not write bundled files to disk.
- Bundle files manually so GitHub (and Live Server) can render your site.

1. Delete `dist` folder and then run `npx webpack server`.
1. Manually bundle files by running `npx webpack`.

### NPM scripts - start webpack
- A convenient way to run (and remember) common CLI commands

1. Add to package.json scripts, `"start": "npx webpack server"`
2. Run the script with `npm run start` (or `npm start`)
3. Define the "start" script to run (and remember how to run) other projects.

### NPM scripts - build

1. Add to package.json scripts, `"build": "npx webpack"`
2. Run the script with `npm run build`.
3. Define the "build" script to build (and remember how to build) other projects.
