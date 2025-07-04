# Express

### Express.js
- A JavaScript framework for writing backend server applications.

- A server can be written with Node.js http module, but Express.js is more popular.
- Search Indeed.com for entry level jobs in the USA that want experience with Express.
- https://expressjs.com

### Backend TypeScript template
- Create a TypeScript template to easily start new backend projects.

1. Create a new VS Code workspace for Express Template.
2. Create a `src` folder with `index.ts`.
3. `pnpm install express`.
4. In `index.ts`, `import express from "express"`.

### Backend TypeScript configuration
1. Configure Webpack and Babel to watch and compile TypeScript.
2. To `webpack.config.ts`, add `"target": "node"`.
3. Add `tsconfig.json`, `.gitignore`,np and packages.
4. `pnpm install @types/express --save-dev`.
5. In `package.json`, add `"build": "npx webpack --watch"`.

### Backend TypeScript app
1. Specify variables for the `hostname`, `port`, and `path` of the page.
2. Instantiate an express `app` object.
3. With the `get` method, specify the `path` and the `handler`.
4. For now, let the `handle`r be an empty function.
5. With the `listen` method, listen on the specified `port` and `hostname`.
6. Use NPM script, `"start": "node ./dist/main.js"`.

### Backend listener
```js 
app. listen(port, hostname);
```

- The listener method is used to specify a hostname and port.
- It listens for any activity that happens at that hostname and port.
- When a request comes in, the listener identifies the path.
- Then the listener routes the request to the handler for that path.

### Backend get method
```js
app.get (path, handler);
```

- The `get` method assigns a handler to a `path`.
- When a request goes to the path, the listener calls the handler for that path.

### Backend path handler
```js
function handler(request, response)
```

- The `handler` is a function that processes requests.
- The `listener` gives the `handler` a `request` object, and a `response` object.

1. Add the request and response parameters to handler.
2. Assert their types: `Request` and `Response` from the `express` package. 

### Response object
```js
response.send("<h1>Hello world !< /h1>");
response.send( { message: "Hello World!" } );
```

- The `response` object has a `send` method which takes a string or an object.
- The `send` method sends the response as a string.

1. Try sending `"<h1>Hello world !< /h1>"`.
2. Try sending `{ message: "Hello world!" }`.
3. Must re-run `node ./dist/main. js` or `npm start` to apply changes.

### Request object
```js
const { url } = request;
```

- Contains information about the request that was sent to the server.
- In this case, the request is coming from the browser.

1. Start the server in a JavaScript debug terminal and inspect the request object.
2. Destructure the url property from the request object.
3. Respond with the value of url.

### Express App Summary
```javascript
const app = express();
app.get(path, handler);
app.listen(port, hostname);
```
1. Instantiate an Express app that contains methods for starting server
2. Specify a path and a handler for that path
3. Start the server by listening for activity at a domain (port and hostname)

### Nodemon
- Stands for node monitor
- It's a module that can start automatically reload the Express server
- `https://nodemon.io`

1. Install nodemon: `pnpm install nodemon --save-dev`
2. Update start script in package.json file:`"start": nodemon ./dist/main.js`

***A few notes are missing starting here****

### Listener Callback
`app.listen(port, hostname, handleListen)`

Example: 
function handleListen() {
    console.log(`Listening on http://${hostname}:${port}...`);
    console.log(`Open a new terminal and run 'npm run build' `);
    console.log(`To debug, start this server in a JavaScript Debug Terminal`);
}


(started on this but will finish explanation tomorrow)

### Access the backend from the front-end
`fetch("http://localhost:9000")`
1. Create a React component
2. From `componentDidMount`, send a fetch request
3. Observe the TypeScript error when using `async/await` in componentDidMount
4. Use the `promise.then` method to save the response in a `state variable` and render it
5. Observe the `"failed to fetch"` error

### Review - CORS
- Cross Origin Resource Sharing.
- If the requesting domain is not in the server's CORS list, the browser blocks the response.

1. Use the debugger in the backend.
2. Observe that the server does send the response.
3. Observe that the browser client doesn't receive the response.

### Enable CORS - Cross Origin Resource Sharing
- The cors module allows Cross Origin Resource Sharing between client and server.

1. Install CORS: `pnpm install cors`
2. Add TypeScript support with `pnpm install @types/cors --save-dev`
3. In `index.ts`, `app.use( cors() )`
4. Observe the frontend receive the server response
- NOTE: we enabled our server to have CORS and the server got that info and allowed it to be passed through to the web browser

### Axios (front end and backend use)
- Axios is a module that's more popular than the built-in fetch module
- `https://axios-http.com/`

1. Install Axios: `pnpm install axios`
2. Use the `axios get` method instead of `fetch`
3. Observe the usage differences

### Folder structure for backend routes
```
Express Template
    >src
        >routes
        >index.ts
```
 
- Create a separate file for each path, also knows as routes.
- Match the file name with the path and the function name.

1. Create a `routes` folder in the `src` folder.
2. In `routes`, create a file called `root.ts`.
3. Move the `handler` code into `root.ts` and name the function `root`.

### Add a path for frontend clients
```js
const data = { origin: request.headers.origin };
```
- Frontend clients usually receive data from backend servers.
- The root path of the server can be used for the server page.

1. In the Express server, add the "/api" path and a route handler called api.
2. In the routes folder, add api.ts and a function called api.
3. Let it respond with data only, like an object containing the origin.

Note: (from my understanding based on what was said--Raylon)
Frontend Clients Code Explanation: 
The frontend sends a request to the backend, using the api path.When the api path is called, its instructions are to use the api handler to process it. The api handler has a request and a response property to get the data object.

The front end receives the response from the api handler in the backend. The promise gets the resolve value, which is the response.
The response comes back as an actual object, which needs to be stringified to extract the data from the response. It will return a object with data inside. {origin:request}

### Request query
`axios.get(http://localhost:8000/api?message=hello")`

- Contains query parameters that were sent through the URL

1. Add query parameters to the path `/ api ?message=hello`.
2. Use JavaScript debug terminal to inspect the request object.
3. Add the `query` to the server response data.

### Add Jest to the Express template

1. Install packages and update configurations for `Jest` support.
      - Run: `pnpm install jest @types/jest --save-dev`.
      - Add to babel.config.js: `"@babel/preset-env"`.
      - Run: `pnpm install @babel/preset-env --save-dev`.
2. Add an NPM script for `test`.
      - Add to package.json: `"test":"npx jest"`.
3. Make sure Jest is working.

### Ignore the backend dist folder
- The `dist` folder is for starting the backend server.
- Because GitHub doesn't start the server, the repository can ignore the `dist` folder.

1. Add `dist` to `.gitignore`.
2. `git rm -r --cached dist`.
3. Commit changes and push updates to GitHub.

### HTTP method POST
- `POST` is an HTTP method, a way to communicate with servers, like the `GET` method

1. Add to the AI backend `index.ts` `app.post("/postDemo",postDemo)`.
2. Add the route handler `post` to send and response.
3. Try to use the browser URL bar to send a request to the `postDemo` path.
4. There should be an error.

### Review - Postman
- Postman is an app that can be used to send requests to a server.
- Query parameters can be sent through the `URL` manually.
- Query parameters can be entered in the `Params` section.
- The server response is displayed at the bottom.
- https://www.postman.com/

### POST data
- Using the POST method to send data is more secure because the data is hidden.

1. Observe that data in the `Params` tab is exposed in the `URL`.
2. With the `POST` method, data should be sent through the `Body` tab.
3. Send data through `x-www-form-urlencoded.`
4. Observe the data is hidden and not accessible through request `query` object.

### Request body
- Express must be configured to receive data through the `POST` method.
- The hidden `POST` data is received by the backend server in `request.body`.

1. Use the debugger to observe that `request.body` is not in the `postDemo` handler.
2, Add to the `index.ts` file `app.use(urlencoded())`.
3. Use the debugger to observe that `request.body` is NOW in the `postDemo` handler.

### Request body data
- Send a response that included data from `request.body`.

1. Use the debugger to observe the properties of `request.body`.
2. Respond with information from `request.body`.
3. Use Postman to view the response.

### JSON parameters
- Axios accepts data as an object and uses the post method to send data as a JSON string.
- Express needs to be configured to receive JSON parameters.

```js
app.use(json());
```

1. Use the debugger to confirm that data is not being transmitted from frontend to backend.
2. To the backend `index.ts` file, add `app.use(json())` to enable JSON parameters.
3. Use the debugger to confirm that JSON parameters are being received.