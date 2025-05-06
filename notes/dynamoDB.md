# DynamoDB

### Connect to DynamoDB with environment variables
1. In the backend, save `accessKeyId`, `secretAccessKey`, and `region` in `.env`.
2. Import `dotenv` and initialize it.
3. Use the environment variable to construct the `apiKey` object.
4. Connect to DynamoDB with the `apiKey` object.
5. Create the nice DynamoDB client.

### CRUD
- CRUD refers to actions that can be performed on a database.

1. CREATE: Add new data to a database.
2. READ: Retrieve existing data from a database.
3. UPDATE: Change existing data in a database.
4. DELETE: Remove data from a database.

### Review--Read from DynamoDB
```js
const request = {
        TableName: "logins",
        Key: {
            email: "test@email.com",
        },
    };

    const response = await niceClient.get(request);
    const loginData = response.Item;
```
1. In the sandbox, create the `read.ts` module in a `dynamodb` folder.
2. Form the request object with `TableName` -the name of the table in DynamoDB `Key` - an object that contains the key and value to look for.
3. Send the request object with the `get` method.
4. If there's a match, the response will have an Item object containing the data.

### Create data in DynamoDB
```js
const request = {
        TableName: "logins",
        Item: { email: "new@logins.com", password: "new" },
    };

    const response = await niceClient.put(request);
```
1. In the sandbox, create the `create.ts` module in the dynamodb folder.
2. Form the request object with `TableName` - the name of the table in `DynamoDB` and an `Item`-an object that contains the keys and values to put in the table.
3. Send the request object with the `put` method.
4. If successful, the response will have `httpStatusCode 200`.
NOTE: Expect that a new login has been created/added to the DynamoDB table.

### Update data in DynamoDB
```js
const request: UpdateCommandInput = {
        TableName: "logins",
        Key: {
            email: "test@email.com",
        },
        AttributeUpdates: { password: { Value: "new password" } },
    };

    const response = await niceClient.update(request);
```
1. In the sandbox, create the `update.ts` module in the dynamodb folder
2. Form the request object with `TableName , Key` of the data to update, and `AttributeUpdates`-an object whose properties are the keys that should update,which are objects with a Value property which contain a new value
Assert the request object as `UpdateCommandInput`
3. Send the request object with the update method
4. If successful, the response will have `httpStatusCode 200`. 
NOTE: Expect that the password in the DynamoDB table has updated to the new password entered.

### Delete data in DynamoDB
```js
const request = {
        TableName: "logins",
        Key: {
            email: "test@email.com",
        },
    };

    const response = await niceClient.delete(request);
```
1. In the sandbox, create the `del.ts` module in the dynamodb folder
2. Form the request object with `TableName` and the `Key` of the data to delete
3. Send the request object with the `delete` method
4. If successful, the response will have `httpStatusCode 200`
NOTE: Expect that the login details in the Key has been deleted from the table in DynamoDB.

### TDD Read Practice
- Use TDD to create a backend route that reads account information from DynamoDB

1. In the `DynamoDB console`, add a `name` and `phone` to each login.
2. In `index.ts`, define the route `/read` and handler for reading account info.
3. In the `module`s folder, use TDD to test the function `readAccount`.
4. Test that it returns an `email`, `password`, `name`, and `phone` when given an existing email.
5. Test that the result matches - the email in the result is the same as the given email.
6. Test that it doesn't return a result when the email is not in the list.
7. Test that it doesn't return a result when the email is an object.
8. Code the function signature and assert the return type.
9. Code the function according to the test specifications.
10. Code the route handler to respond with the result of `readAccount`.