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

1. Start the server in a JavaScript debug terminal.
2. Inspect the request object.
3. Destructure the url property from the request object.
4. Respond with the value of url.

### Express App Summary
```javascript
const app = express();
app.get(path, handler);
app.listen(port, hostname);
```
1. Instantiate an Express `app` that contains methods for starting server.
2. Specify a `path` and a `handler` for that path.
3. Start the server by listening for activity at a `domain` (`port` and `hostname`).

### Nodemon
- Stands for node monitor
- It's a module that can start automatically reload the Express server
- `https://nodemon.io`

1. Install nodemon: `pnpm install nodemon --save-dev`
2. Update start script in package.json file:`"start": nodemon ./dist/main.js`

### Listener Callback
`app.listen(port, hostname, handleListen)`

-When the listener is loaded, it can run a callback function.

1. Add a callback to the listener.
2. Let the callback display the URL for viewing the server response.
3. Also display instructions to run the build script.

#### Example: 
```js
function handleListen() {
    console.log(`Listening on http://${hostname}:${port}...`);
    console.log(`Open a new terminal and run 'npm run build' `);
    console.log(`To debug, start this server in a JavaScript Debug Terminal`);
}
```

### Access the backend from the front-end
`fetch("http://localhost:8000")`

1. Create a React component.
2. From `componentDidMount`, send a fetch request.
3. Observe the TypeScript error when using `async/await` in componentDidMount.
4. Use the `promise.then` method to save the response in a `state variable` and render it.
5. Observe the `"failed to fetch"` error.

### Review - CORS
- Cross Origin Resource Sharing
- If the requesting domain is not in the server's CORS list, the browser blocks the response.

1. Use the debugger in the backend.
2. Observe that the server does send the response.
3. Observe that the browser client doesn't receive the response.

--TO FIX THIS--

### Enable CORS - Cross Origin Resource Sharing
- The cors module allows Cross Origin Resource Sharing between client and server.

1. Install CORS: `pnpm install cors`.
2. Add TypeScript support with `pnpm install @types/cors --save-dev`.
3. In `index.ts`, `app.use( cors() )`.
4. Observe the frontend receive the server response.
- NOTE: we enabled our server to have CORS and the server got that info .and allowed it to be passed through to the web browser.

### Axios (front end and backend use)
- Axios is a module that's more popular than the built-in fetch module
- `https://axios-http.com/`

1. Install Axios: `pnpm install axios`.
2. Use the `axios get` method instead of `fetch`.
3. Observe the usage differences.

### Folder structure for backend routes
```
Express Template
    >src
        >routes
        index.ts
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

1. In the Express server, add the `/api` path and a route handler called `api`.
2. In the `routes` folder, add `api.ts` and a function called `api`.
3. Let it respond with `data` only, like an object containing the origin.

The frontend sends a request to the backend, using the api path. When the api path is called, its instructions are to use the api handler to process it. The api handler has a request and a response property to get the data object. The front end receives the response from the api handler in the backend. The promise gets the resolve value, which is the response. The response comes back as an actual object, which needs to be stringified to extract the data from the response. It will return a object with data inside. `{origin:request}`

### Request query
`axios.get(http://localhost:8000/api?message=hello")`

- Contains query parameters that were sent through the URL.

1. Add query parameters to the path `/api?message=hello`.
2. Use JavaScript debug terminal to inspect the request object.
3. Add the `query` to the server response data.

### Add Jest to the Express template

1. Install packages and update configurations for `Jest` support.
      - Run: `pnpm install jest @types/jest --save-dev`.
      - Add to babel.config.js: `"@babel/preset-env"`.
      - Run: `pnpm install @babel/preset-env --save-dev`.
2. Add an NPM script for `test`
      - Add to package.json: `"test":"npx jest"`
3. Make sure Jest is working.

### Backend Routes Practice
Communicate with backend routes that send different responses

1. In the backend, use the Express get method to assign the route "/home" to a handler.
2. Create the handler module in the routes folder.
3. Code the handler to respond with an HTML string to render a home page.
4. Use the browser to render the "/home" route.
5. In the frontend, use Axios and a component to render the response from "/home".
6. In the backend, use the Express get method to assign the route "/client" to a handler.
7. Create the handler module in the routes folder.
8. Code the handler to respond with an object that has 3 key/value pairs.
9. Use the browser to render the "/client" route.
10. In the frontend, use Axios and a component to render the response from "/client".

### Frontend Request Practice
Observe the difference between requests from the frontend and from the browser.

1. In the backend, add the route "/headers" and process it with a handler.
2. In the frontend, use Axios to send a request to the "/headers" route.
3. In the backend, use the JavaScript Debug Terminal to observe properties in the request object.
4. Code the handler to respond with 3 values from the request's headers.
5. Use the browser to view the response from the "/headers" route.
6. In the frontend, use a component to render the response from "/headers".
7. In the backend, add the route "/ request" and process it with a handler.
8. Code the handler to respond with the request's path, method, and origin.
9. Use the browser to view the response from the "/ request" route.
10. In the frontend, use Axios and a component to render the response from "/request".

### TDD Query Practice
Send queries from the frontend and develop a backend handler to process the response.

1. In the backend, add the route "/query" and process it with a handler.
2. In the frontend, create a query string that has 3 key/value pairs.
3. Use Axios and a component to send the query string to the "/query" route.
4. Use the JavaScript Debug Terminal to observe the query in the request object.
5. Write tests for a module function called getMessage, which accepts a query object.
6. Test if the function properly returns a sentence that uses values in the query object.
7. Code a function called getMessage according to the test specifications.
8. Pass 5 tests that include likely and unlikely possibilities.
9. Let the "/query" handler send a response with the results from getMessage.
10. In the frontend, render the response from "/query".

### Review - Proxy server/Free APIs
- From the frontend, a proxy server was required to receive a response from APIs
  
- `https://opentdb.com`
- `https://favqs.com/api`
- `https://github.com/Freeboard/thingproxy`
- `https://corsproxy.io/`

### Custom API proxy
1. Write tests for a function called `getQuote` with no parameters.
2. Test if the function properly returns information from the FavQs API.
3. Code `getQuote` according to the test specifications.
4. Add a `route` and a `handler` to send a response with the results of `getQuote`.
5. In the frontend, use `Axios` and a component to render the response.

### API proxy with query parameters

1. Write tests for a function called `getTrivia` that accepts a query object.
2. Test if the function uses the query to return information from the `OpenTDB API`.
3. Code `getTrivia` according to the test specifications.
4. Add a `route` and a `handler` to send a response with the results of `getTrivia`.
5. In the frontend, use `Axios` and a `component` to render the response.