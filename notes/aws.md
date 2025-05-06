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
`index.handler is undefined or not exported`
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
### Serverless converter
`Task timed out after 3.00 seconds`

- The test sends a request and expects a response within a short amount of time.
- Convert the Express app into a serverless app compatible with AWS Lambda.

1. Install `serverless-http`.
2. `import serverless from "serverless-http";`
3. `export const handler = serverless(app);`
4. Rebuild, zip, upload to AWS Lambda, test, and view logs.

### Congratulations!
- Your backend server is deployed to AWS Lambda.

1. `Configuration` tab -> `Function URL` in the sidebar -> `Create function URL` button.
2. `Auth type` -> `NONE` -> `save` button.
3. `Function overview` section -> `Function URL` click link.
4. View the server page.
5. View the `"/env"` route for environment variables.
6. Observe there are no environment variables.

### AWS Lambda environment variables
- AWS Lambda is a separate environment from your local development environment.
- Configure environment variables in AWS Lambda.

1. `Configuration` tab -> `Environment variables` in the sidebar -> `Edit` button -> `Add environment variable`.
2. Enter `Key: mode | value: production` -> `Save` button.
3. View the `"/env"` route and observe the environment variable.

### Disable the Express listener
```
Listening on http://localhost:8000 ...
Open a new terminal and type 'npm run build'
To debug, start this server in a JavaScript Debug Terminal
```
- AWS Lambda should do the listening while your Express app does the handling.

1. Observe the Express listener in the AWS Lambda Test details.
2. In `index.ts`, import and initialize `dotenv`.
3. If the environment variable `mode` is `development`, start the Express listener.
4. Rebuild, zip, upload to AWS Lambda, test, and view logs.

### Webpack zip plugin
- Webpack can be configured to automatically zip the bundle for AWS Lambda

1. Install `zip-webpack-plugin`package.
2. In Webpack config,`import Zip from "zip-webpack-plugin";`.
3. Install `@types/zip-webpack-plugin` for typescript support.
4. In webpcak config file, add: `plugins: [ new Zip() ]`.
5. Delete dist, rebuild, upload to AWS Lambda, test, and view logs.

### AWS CLI
- Terminal commands can be used to log into AWS and make changes.

1. In the AWS console, create a user with full `AWS Lambda and DynamoDB` access, but no console access.
2. Create a `CLI access key` for the lambda user and download the .csv file.
3. Install `AWS CLI` for your system (search the internet for `"install aws cli"`).
4. Login with the `lambda user` from the CLI with the command `aws configure`.

### AWS Lambda commands
- Terminal commands can be used to make changes to AWS Lambda

1. CLI commands for AWS Lambda - search the internet for "aws cli lambda v2".
2. View the section for updating function code.
3. `aws lambda update-function-code --function-name sandbox-level-4 --zip-file fileb://dist/index.js.zip`
NOTE: The above line means: In aws lambda, we want to update the function code of this specific function name(sandbox-level-4), then zip the file at this specific path.
  
### Automate deployment to AWS Lambda
Create an NPM script that combines these commands:

1. Bundle in production mode and zip.
2. Upload the zip file to AWS Lambda.
3. OPTIONAL: Push to GitHub.

### AWS S3
- Simple Storage Service.
- Bucket - like a hard drive.
- Object - like a file.

### Create an S3 bucket
1. For Bucket name, put `sandbox-level-4`.
2. Leave all other settings as default.
3. Click Create bucket.

### Put objects in the S3 bucket
1. Create a folder called `frontend`.
2. In the `frontend` folder, upload `index.html`.
3. Create a folder called `dist` in the `frontend` folder.
4. In the `dist` folder, upload `main.js`.
5. Leave all upload settings as default.

### AWS CloudFront
- A service that distributes (or copies) your S3 objects worldwide.
- Your website loads faster because the files are physically closer to the user.
- Multiple copies means if one storage goes down, another site can provide the files.
- Can configure which folder and file to render for your website.
- Can configure for SPA sites.

### Create an AWS CloudFront distribution
1. Go to CloudFront > Distribution > Create.
2. For Origin domain, select the `sandbox level 4 S3`.
3. For the `Origin path`, type `/frontend`.
4. Web Application Firewall (WAF) - `do not enable security protections`.
NOTE: costs REAL money to use, not necessary for our use currently.
5. Set `Price` class to `Use only North America and Europe`.
6. Set `Default root object` to `index.html`.

### Give CloudFront access to the S3 bucket
1. `CloudFront > Distributions > Dist Name > Edit origin`.
2. In the Origins tab, select and edit the new origin.
3. Select `Origin access control settings (recommended)`.
4. Click `Create new OAC` then click the `Create` button.
5. Click `Copy policy` and go to the `bucket Permissions` tab (NOTE: easier to click on permissions link underneath this section than to navigate there thru S3 tab).
6. Edit the `Bucket policy` and paste in the policy, then Click `Save changes`.

### Render the website with AWS CloudFront
1. CloudFront > Distributions > Distribution Name.
2. Load the `Distribution domain name` in a browser tab.
3. Observe the home page loads and navigation works.
4. Observe that loading a page other than root shows `Access Denied`.

### SPA settings for AWS CloudFront distributions
1. In `Error pages` tab, click `Create custom error response`.
2. For `HTTP error code`, select `403: Forbidden`.
3. For `Custom error response`, select `Yes`.
4. For `Response page path`, type `/index.html`.
5. For `HTTP Response code`, select `200: OK`.

### Deploy updates to AWS S3 and CloudFront
- Objects must be invalidated to trigger CloudFront to redistribute them

1. `CloudFront > Distributions > Distribution Name > Create Invalidation`.
2. Upload an updated `main.js` file to the S3 `dist` folder.
NOTE: update something in the Home page, then run `npm run build `, then upload the new main.js file to Cloudfront.
3. In the CloudFront `Invalidations` tab, click `Create invalidation`.
4. For `Add object paths`, type `/*` to invalidate all objects in the S3 bucket.
NOTE: means that "changed everything/all the files".
5. Click `Create invalidation`.

### How to get the S3 link (URI)
1. Select the bucket.
2. Select the folder(s).
3. The s3 link (URI) will be at the top left for the selected folder.


### Automate the deployment
1. In `IAM`, attach policies to the CLI user - full access to `S3` and `CloudFront`.
2. Visit link for AWS Documentation: `https://awscli.amazonaws.com/v2/documentation/api/latest/reference/index.html` then search for `s3` & `cloudfront` commands for use in the following steps.
3. Copy your unique s3 URI to the following link using the AWS CLI copy (cp):
`aws s3 cp ./dist/ s3://mini-eval-7/frontend/dist/ --recursive --exclude *.map`
NOTE: this command recursively copies the s3 bucket to the dist folder and excludes all `.map` files as they are too large.
NOTE: Notice that the webpage does not change.
4. `aws cloudfront create-invalidation --distribution-id E3AM0VOA0AH85N --paths  \"/*\""`.
NOTE: creates an invalidation in Cloudfront, which tells it to go to the s3, copy and redistribute the files in the dist/main.js since we changed something and had to rebuild main.js.
NOTE: Will show `in progress` in the status bar; wait patiently for this invalidation to complete.
5. Add to NPM scripts.
Example package.json file:
`"deploy": "npm run s3-upload && npm run update-cloudfront",
"----------------------": "-----------------------",
"s3-upload": "aws s3 cp ./dist/ s3://sandbox-level-4/frontend/dist/ --recursive --exclude *.map",
"update-cloudfront": "aws cloudfront create-invalidation --distribution-id ABCXYZ --paths "/*" "`

#### Hard refresh : `CTRL + SHIFT + R`
Use hard refresh to reflect website updates by redownloading the files.

#### Escape characters: `\`
use the escape character for npm scripts that require double quotes in them.

### Minimize zip size
```js
plugins: [new Zip() ] 
            updates to
plugins: [ new Zip({ include:/^index.js$/}) ]
```

- The `library` option allows Webpack to bundle exported code.
- As a result, unnecessary files may be included in the zipped bundle.
- Minimize `zip` size by specifying the files to include.

1. Edit Webpack config.
2. `plugins: [ new Zip({ include:/^index.js$/}) ]`.

NOTE: This tells webpack that the express app is like a library and we want AWS Lambda to use the serverless handler export, so not to "shake off" the serverless handler export from the bundled code.
    
### Ignore the backend dist folder
- The `dist` folder is for starting the backend server.
- Because GitHub doesn't start the server, the repository can ignore the `dist` folder.

1. Add `dist` to `.gitignore`.
2. `git rm -r --cached dist`.
3. Commit changes and push updates to GitHub.


