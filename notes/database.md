# Databases

### Database
- A database is a collection of data
- Software dedicated to storaging and managing data
- A server that allows interaction with the data

### Database simulation - Setup
1. Create the file `authenticationSimulationDB.js`.
2. Copy `authenticationSimulation.js` to `authenticationSimulationDB.js`.
3. Rename the function to `authenticationSimulationDB`.
4. Delete all the code in `authenticationSimulationDB` so we can update it.
5. Let `handleSignIn` use `authenticationSimulationDB` instead.

### How to create DatabaseSimulation.js
```javascript
const client = new DatabaseSimulation();
```

1. Create a file called `DatabaseSimulation.js`.
2. Export a class called `DatabaseSimulation`.
3. Use `DatabaseSimulation` in `authenticationSimulationDB`.
4. Use the debugger to find bugs.

### How to make DatabaseSimulation accept an apiKey?
```javascript
new DatabaseSimulation(apiKey)`
```

1. Add a constructor to `DatabaseSimulation`.
2. Let the constructor accept an `apiKey`.
3. In `authenticationSimulationDB` add `apiKey` to `DatabaseSimulation`.
4. Use the debugger to find bugs.

### If DatabaseSimulation has these properties, how to check their values in the constructor?
```javascript
class DatabaseSimulation {
  secretKey = "abc123";
  isConnected = false;
}
```

1. Use keyword `this` to access the properties.
2. In the constructor add `this.secretKey` and `this.isConnected`.
3. In `DatabaseSimulation`, add `secretKey` and `isConnected`.
4. Use the debugger to find bugs.

### How to check if the `apiKey` matches `the secretKey`?
```javascript
const doesMatch = apiKey === this.secretKey;
```

1. In the constructor, compare if `apiKey` is equal to `this.secretKey`.
2. Store the results in a Boolean variable `doesMatch`.
3. Use the debugger to find bugs.

### How to set `isConnected` to true if the `apiKey` matches
```javascript
if (doesMatch) this.isConnected = true;
```
1. Add a condition to the constructor.
2. If `doesMatch` is true, set `this.isConnected = true`/
3. Use the debugger to find bugs.

### Database client
```javascript
const client = new DatabaseSimulation(apiKey);
```

- The database client contains commands that can be sent to the database.
- To add a command, add a method to `DatabaseSimulation`.

### How to give client the `getData` method?
```javascript
    getData() {
        console.log("Getting data.");
    }
```
```javascript
client.getData();
```

1. Add the method `getData` to `DatabaseSimulation`.
2. In `authenticationSimulationDB`, activate `getData`.
3. The method `getData` simulates a database command.
4. Use the debugger to find bugs.

### How to let `getData` accept logins and an email?
```javascript
getData(logins = [], email = "") {
    console.log("Getting data.");
}
```
```javascript
client.getData(logins, email);
```
1. `InDatabaseSimulation`, add the parameters (`logins` and `email`) to `getData`.
2. In `authenticationSimulationDB`, update `getData` with `logins` and `email`.
3. Use the debugger to find bugs.

### How to let `getData` return a promise
```javascript
	getData(logins = [], email = "") {
		console.log("Getting data.");
		const promise = new Promise();
		return promise;
	}
```
```javascript
const promise = client.getData(logins, email);
```

1. In `getData`, create a new promise object (include a temporary callback function).
2. Return the promise.
3. Update `authenticationSimulationDB` to store the promise.
4. Use the debugger to find bugs.
5. We will review the Javascript Promise.

### Why should getData return a promise
1. It takes time to get a response from the database server.
2. For simplicity, we will skip the use of `setTimeout` to simulate a delay.

### What task should the promise accomplish?
```javascript
getData(logins, email) {
  const promise = new Promise();
  return promise;
}
```

1. It should check `logins` for a matching `email`.
2. Create the function `findLogin` (replace the temporary callback).
3. Let `findLogin` be the Promise callback.
4. Use the debugger to find bugs.

### Why should findLogin be an inner function?
```javascript
getData(logins, email) {
  const promise = new Promise(findLogin);
  return promise;
}
```

1. So it has access to `logins` and `email`.
2. Make `findLogin` an inner function.
3. Use the debugger to find bugs.

### How should `findLogin` find a match?
```	javascript
for (const login of logins) {
		const currentEmail = login.email;
		if (email === currentEmail) return true;
}
```

1. Loop through each `login` of `logins`.
2. Compare if the `email` matches the login `email`.
3. Store the result in `doesMatch`.
4. Use the debugger to find bugs.

### If `matchingLogin` starts empty, how should it change when a match is found?
```javascript
const matchingLogin = {}
	for (const login of logins) {
		const doesMatch = email === login.email;
		if (doesMatch) {
			matchingLogin.email = login.email;
			matchingLogin.password = login.password;
		}
	}
```

1. If `doesMatch` is `true`, copy the login `email` and `password` to `matchingLogin`.
2. Add an empty object called `matchingLogin`.
3. Use the debugger to find bugs.

### Why can't we just return the matching login?
`return matchingLogin;`

1. It won't resolve the promise.
2. There is a different way to return values through a promise.
3. Try returning `matchingLogin`.
4. Use the debugger to find bugs.

### Why should `findLogin` have resolve as a parameter?
```javascript
function findLogin(resolve) {
	console.log(`I promise to find ${email} in logins.`);
}
```

1. The function `findLogin` is a `Promise` callback.
2. Promise callbacks receive he `resolve` parameter.
3. Add the `resolve` parameter to the `findLogin` function definition.
4. Use the debugger to find bugs.

### What is the `resolve` parameter for?
```javascript
getData(logins = [], email = "") {
		console.log("Getting data.");

		const promise = new Promise(findLogin);
		return promise;

		function findLogin(resolve) {
			console.log(`I promise to find ${email} in logins.`);
	
		const matchingLogin = {};
		for (const login of logins) {
			const doesMatch = email === login.email;
			if (doesMatch) {
				matchingLogin.email = login.email;
				matchingLogin.password = login.password;
			}
		}

		resolve(matchingLogin);
```

1. It indicates that the promise if fulfilled.
2. The `resolve` parameter is a function.
3. Activate the `resolve` function to indicate that the Promise is fulfilled.
4. Use the debugger to find the bugs.

### When the promise is resolved, what value should it contain?
```javascript
const promise = client.getData(logins, email);
```

1. It should contain the matching login object.
2. If there is no match, it should contain an empty object.

### What does this code do?
`resolve(matchingLogin);`

1. It indicates the promise if fulfilled.
2. It sends the value of `matchingLogin`.
3. Activate `resolve` with `matchingLogin`.
4. Use the debugger to find bugs.

### What will the `then` method do?
```javascript
export function authenticationSimulationDB(email = "", password = "") {
	const apiKey = "api123";
	const client = new DatabaseSimulation(apiKey);
	const promise = client.getData(logins, email);
	promise.then(getResolveValue);
```

1. It will call the function `getResolveValue` and send the resolve value to the function.
2. The resolve value is the value contained in the promise.
3. Add the `then` method to `authenticationSimulationDB`.
4. Use the debugger to find bugs.

### What will the `resolveValue` be?
```javascript
function getResolveValue(resolveValue) {
	console.log("Getting the mnatching login...");
	resolveValue;
}
```

1. It will be the login object that matched the email.
2. Add the parameter `resolveValue` to `getResolveValue`.

### How to use the resolve value to properly set isAuthenticated?
```javascript
import { DatabaseSimulation } from "./DatabaseSimulation.js";
import { logins } from "./logins.js";

export function authenticationSimulation(email = "", password = "") {
	const apiKey = "api123";
	const client = new DatabaseSimulation(apiKey);
	const promise = client.getData(logins, email);
	promise.then(getResolveValue);

	function getResolveValue(matchingLogin) {
		console.log("Getting the mnatching login...");
		matchingLogin;
	}
}
```

1. Label the resolve value as a login object.
2. Check if the passwords match.
3. Store the result in `isAuthenticated`.
4. Make `getResolveValue` an inner function so it has access to `password`.
5. Use the debugger to find bugs.

### If we want to return `isAuthenticated`, why will this not work?
```js
 function getResolveValue(resolveValue) {
    const matchingLogin = resolveValue;
    const isAuthenticated = password === matchingLogin.password;
    return isAuthenticated;
  }
  ```

1. `getResolveValue` returns `isAuthenticated` to `authenticationSimulationDB`.
2. `authenticationSimulationDB` returns undefined because it doesn't return anything.
3. Use the debugger to find bugs.

### If `authenticationSimulationDB` returns `isAuthenticated`, why will it not work?
```js
const promise = client.getData(logins, email);
promise.then(getResolveValue);
return isAuthenticated;
```

1. `isAuthenticated` is not defined.
2. `authenticationSimulationDB` doesn't have access to `isAuthenticated`.
3. Use the debugger to find bugs.

### Async and await
```js
export async function authenticationSimulationDB(email = "", password = "") {
const resolveValue = await client.getData(logins, email);
}
```

- Keyword `async` enables a function to use the `await` keyword.
- Keyword `await` makes a function wait until a promise is resolved.
- The resolve value of the promise can be directly stored in a variable.

### Use async and await to get the resolve value instead of the promise
```js
export async function authenticationSimulationDB(email = "", password = "") {
	const apiKey = "api123xyz"; 
	const client = new DatabaseSimulation(apiKey); 
	const promise = await client.getData(logins, email); 
	promise.then(getResolveValue);

	function getResolveValue(resolveValue) {
		debugger;
		console.log("Getting the mnatching login...");
		const matchingLogin = resolveValue; 
		const isAuthenticated = password === matchingLogin.password;
		debugger;
		return isAuthenticated; 
	}
}
```
1. Backup the code in `authenticationSimulationDB` and disable it.
2. Insert `async` to the function signature of `authenticationSimulationDB`.
3. Insert `await` and store the resolve value instead of the promise.
4. Use the debugger to see the `resolveValue`.

### Directly determine the value of `isConnected` and return it
```js
const resolveValue = await client.getData(logins, email);
const matchingLogin = resolveValue;
const isAuthenticated = password === matchingLogin.password;
return isAuthenticated;
```

1. Specify that the resolve value is a login object.
2. Compare if the passwords match.
3. Store the result in `isAuthenticated`.
4. Return `isAuthenticated`.
5. Use the debugger to find bugs.

### Async
```js
const didFindMatch = authenticationSimulation(email, password);
```

- Causes a function to return a promise.
- The resolve value is the return value of the function.

1. In `handleSignIn`, use the debugger to see the value of `isAuthenticated`.
2. Use the debugger to find bugs.


### Use async and await to directly get the resolve value
```js
export async function handleSignInAttempt(event = new Event(), setErrorMessage, onSignIn) {
	event.preventDefault();

	debugger;
	const inputs = event.target;
	const emailInput = inputs[1];
	const passwordInput = inputs[2];
	const closeButton = inputs[3];

	const email = emailInput.value;
	const password = passwordInput.value;

	const isAuthenticated = await authenticationSimulationDB(email, password);
	if (isAuthenticated) {
		closeButton.click();
		inputs.reset();
		onSignIn();
	} else
		setErrorMessage(
			"The email and password entered do not match any authorized login."
		);
}
```

1. Insert `async` into the `handleSignAttempt` function definition.
2. Insert `await` to properly get `isAuthenticated`.
3. Use the debugger to find bugs.

### Search the database only if the `apiKey` was correct
```js
if(this.isConnected)
```

1. In `getData` add a condition to check `isConnected`.
2. If `isConnected` is true, continue running the function.
3. Add comments for the condition.
4. Observe what `getData` returns when the database is not connected.
5. Use the debugger to find bugs.

### Database simulation summary

1. Connect to the database with an API key.
2. Receive a database client.
3. Make request.
4. Receive response.
5. Use the response.

### DynamoDB

- https://aws.amazon.com/dynamodb/
- DynamoDB is a database with Amazon Web Services.
- We will use this dtabase to store login informatoin (example: emails and passwords).
- DynamoDB is free for personal use, but an AWS account is required.

### AWS account

- Create an account at https://aws.amazon.com/.
- This is a root account that has access to all account features.
- The account is free as long as paid features are not used.
- NOTE: A valid credit card or debit card is required to sign up.

### Least Privilege Policy
- Least privilege is a principle of granting only the permissions required to complete a task.
- For security purposes, do not use the root account regularly.
- Use an account with the access you need (example: admin account).

### IAM - Identity Access Management
- Use IAM to create an admin account without root access.

1. Go to the `IAM` dashboard (search for "iam").
2. Click on `Users` in the sidebar.
3. Click on `Create user`.

### Create admin account
1. `User name`: AnyUserName
2. Select `Provide user access to the AWS Management Console`.
3. Select `I want to create an IAM user`.
4. Unselect `Users must create a new password at next sign-in`.
5. Click `Next`.

### Specify admin account permissions
1. Select `Attach policies directly`.
2. Select `AdministratorAccess` (search for "AdministratorAccess).
3. Click `Next`.
4. Click `Create user`.

### Login with the admin account
1. Click `Download .csv file`.
2. Save to `.aws` folder in React Workspace.
3. Logout of the root account.
4. Login to the admin account with the information in the .csv file.

### Admin account
- Use this administrative account instead of the root access.
- Only use the root account to access features that the administrative account cannot.

### Setup DynamoDB
1. Login with the admin account (not root account).
2. Go to the `DynamoDB Dashboard` (search for "dynamoDB).
3. Select te region closest to you.
4. Click on `Create Table`.

### Add a table to DynamoDB
- A database table stores data items, like an array stores objects.
- A partition key (or primary key) is the unique id for each data item, like position number.

1. Table name: logins.
2. Partition key: email.
3. Click `Create table`.

### Set up data items in DynamoDB

1. In DynamoDB Tables, click on the `logins` table.
2. Click `Explore table items`.
3. Click `Create item`.

### Create data items in DynamoDB

1. `email`: test@email.com
2. Click `Add new attribute - String`.
3. `Attribute name`: password: test.
4. Click `Create item`.
5. Create 2 more logins.

### Setup credentials (API key) for remote access

1. Go to `IAM` dashboard (search "iam").
2. Click `Users` in the sidebar.
3. Click on the `admin` account.
4. Click on `Security credentials` tab.
5. Click on `Create access key`.

### Create an access key

1. Select `Application running outside AWS`.
2. Click `Next`.
3. `Description tag value`: dynamodb.
4. Click `Create access key`.

### Make your credentials confidential

1. Click `Download .csv file`.
2. Save to `.aws` folder in React Workspace.
3. Add `.aws` to `.gitignore`.

### Credentials file for programming
- Make the credentials accessible to the JAvascript program.

1. In `.aws` folder, create `credentials.js`.
2. `export const accessKeyId = "myAccessKeyId"`.
3. `export const secretAccessKey = "mySecretAccessKey"`.
4. `export const regions = "us-east-1"`.
5. Copy and paste the access key information into `credentials.js`.

### AWS DynamoDB packages
- Install packages to easily communicate with DynamoDB

1. `npm install @aws-sdk/client-dynamodb`
2. `npm install @aws-sdk/lib-dynamodb`

### DynamoDB credentials
- Importing credentials makes them accessible without exposing them.
```jsx
import { region, accessKeyId, secretAccessKey} from "../../.aws/credentials.js"
	const apiKey = {
		region: region,
		credentials: {
			accessKeyId: accessKeyId,
			secretAccessKey: secretAccessKey,
		},
	};
```

1. In /modules, create the module `authenticationAws.js` similar to the simulation.
2. Use `authenticationAws` for signing in.
3. Import credentials items.
4. Create an `apiKey` object from the credentials items.

### DynamoDB clients
```js
const client = new DynamoDB(apiKey);
```

- The first client is the original DynamoDB client.
- The second client is updated and nice to work with.

1. `const client = new DynamoDB(apiKey);`
2. `const niceClient = DynamoDBDocument.from(client);`

### DynamoDB request
- This will be the data we'll request from DynamoDB.

```js
const request = {
  TableName: "logins",
  Key: {email: "test@gmail.com"},
};
```

1. Specify the TableName.
2. Specify the Key and the requested value.

### DynamoDB command

```js
const response = await niceClient.get(request);
```

- this will get the requested data from DynamoDB.

1. Make `authenticationAws` an `async` function.
2. `const response = await niceClient.get(request);`

### Authenticate

```js
const matchingLogin = response.Item;
const isAuthenticated = (password = matchingLogin.password);
return isAuthenticated;
```

- Authenticate based on the data received

1. Extract the login from the response.
2. Check if the password from the user matches the password from the response.
3. Return the appropriate authentication response.







