# AWS -- Amazon Web Services

### Environment variables
`process.env.mode`
- Environment variables are stored outside of your app, but your app has access to them.
- Environment variables can be accessed through the `process` object.
- The `process` object is provided to apps running in NodeJS, not in the browser.
- `AWS` can be configured to run apps in NodeJS.
- A file called `. env` can be used to declare or change environment variables.

### Environment variables route
1. In the `backend`, create the file `.env` in the root folder.
2. Add `.env` to `.gitignore`.
3. To the `.env` file, add `mode=development`.
4. Create a route `"/env"` and a `handler` to send environment variables in the response.
5. Install `dotenv` and initialize it in the handler with `dotenv.config()`.
6. Access the environment variable with `process.env.mode` and send it in a response.

### AWS Lambda
- `AWS Lambda` is a service that can be used to deploy your backend server.
- Your backend server will not actually do the listening.
- `AWS Lambda` will receive requests, then run them through your route handlers (in the routes folder).
- `AWS Lambda` is called a serverless service because it runs more like a function.
- It runs only when called, and only uses your handler functions, not the Express listener.

### Create an AWS Lambda function
1. From the `AWS Lambda` Dashboard, click on `Create Function`.
2. Enter a `function name` (ex. sandbox-level-4).
3. Click `Create Function`.

### Lambda zip file
- The server code can be manually typed or uploaded as a zip file

1. Select the `lambda` function.
2. Click the `Upload from` button and choose `.zip` file.
3. Zip the files in the `dist` folder.
4. Upload the `.zip` file to `AWS Lambda`.

### Test and view logs
- The `lambda` function can go for a test run and logs can be viewed.

1. In the `Test` tab, click the `Test` button.
2. Click `Details` to view the logs.

### AWS Lambda file name
`Error: Cannot find module 'index'`

- AWS Lambda requires a JavaScript file called `index.js`
- Configure Webpack to change the bundle filename.

1. Edit Webpack configuration and add `output: { filename: "index.js" }`.
2. Update NPM scripts to use the new bundle name : `"start-server": "npx nodemon ./dist/index.js",`,
3. Delete dist, rebuild, zip, upload to `AWS Lambda`, test, and view logs.

### AWS Lambda exported handler
`export function handler() {}`

- AWS Lambda requires a function called `handler` to be exported from the index file

1. Edit `index.ts`
2. Export a function called `handler`.
3. Let it be an empty function for now.
4. Delete `dist`, rebuild, zip, upload to `AWS Lambda`, test, and view logs

### Webpack tree shaking
- `Tree shaking` refers to Webpack's ability to exclude unused code.
- The Webpack bundle only includes code that was imported into your app.
- Observe tree shaking efficiency by comparing `node_modules` to the bundle size.
- Tree shaking also excludes exports that are not being used.
- By default, Webpack will not include the unused handler function in the bundle.

### Webpack library files
- Library files contain unused code that are meant to be used by other files (ex. packages)
- Configure Webpack to include the exported handler function so AWS Lambda can use it.

1. Edit the Webpack config file.
2. Add `output: {library:{type:"commonjs}}`.
3. Rebuild, zip, upload to AWS Lambda, test and view logs.

Example webpack.config.ts (staring at target section):
```ts
{
    target: "node", //bundles with the node environment
output: {
        filename: "index.js", //Change the name of the bundle file (default is main.js)
        library: {
            type: "commonjs", //Prevents tree shaking of unused bundle exports AKA indicatesthat the bundle is a library
        },
    },
} as Configuration;
```
