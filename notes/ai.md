# AI -- Artificial Intelligence

### Google's NotebookLM
- An Al that's free to use that answers questions about notes and other media you provide

1. Log into `https://notebooklm.google.com/`
2. Add notes, videos, text, and websites in the left panel.
3. Ask questions about the notes and media in the center panel.
4. In the right panel, listen to Al generated audio summarizing the notes and media.

### Artificial Intelligence
- A combination of programming, large sets of data, and problem solving.
- `Machine Learning`: Computers learn from data without being explicitly programmed.
- `Computer Vision`: Computers analyze images and videos, then identify what's in them.
- `Generative Al`: Computers create new text and other media based on data it already has.
- `Natural Language Processing`: Computers understand and generate human language.

### Natural Language Processing (NLP)
- Bridges the communication gap between humans and machines with a natural language.
- NLP analyzes user input then extracts the intent and other info like time and location.
- NLP keeps track of the conversation and context, such as questions previously asked.
- NLP produces a response based on information from the internet or a given context.
- NLP can respond in a language that it has already analyzed and understood.

### Hugging Face Al models
- `Hugging Face` is a platform (website) for creating, running, and deploying Al models.
- Al models are programs that detect patterns in data and respond based on the patterns.
- Al models on `Hugging Face` have been programmed to respond according to tasks.
- `https://huggingface.co/`--FREE for unlimited use.

### Hugging Face AI tasks
- Tasks are actions that AI models have been trained to perform.
- Hugging Face lists a variety of tasks and the pre-trained AI models that can perform them.
- Pre-trained AI models are programs that have recognized patterns in specific sets of data.
- Click on a task to view details about it:
- https://huggingface.co/tasks.

### Question Answering AI
- A question answering AI can answer a question based on a document or text.
- It takes 2 inputs - question and context.
- It provides 1 output - the answer.
- There are thousands of AI models that can perform the question answering task.
- https://hugginface.co/tasks/question-answering

### Hugging Face libraries
- Hugging Face libraries are modules or packages that are used to connect to AI models.
- Inference API - a REST API that a frontend can send inputs and receive AI outputs.
- Push to Hub - AI from a library can be custom trained and uploaded to Hugging Face.
- Widgets - When custom AI from a library is uploaded, it'll have a website interface.
- https://huggingface.co/docs/hub/en/models-libraries.

### Transformers.js library
- Most Hugging Face libraries (packages) were written in the Python programming language.
- Transformers.js makes some AI models compatible with JavaScript.
- Unlike many Hugging Face libraries, Transformers.js can only be downloaded.
- View the similarities and differences between JavaScript and Python.
- https://hugginface.co/docs/transformers.js/v3.0.0/index

### Install Xenova Transformers.js
- Xenova is a company that heavily contributes to the progress of Transformers.js

1. View `@xenova/transformers` in the NPM site.
2. Run `pnpm install @xenova/transformers`.
3. Run `pnpm approve-builds` to run extra scripts that some packages require to complete installation.
4. Install Python by typing python in the terminal.

### Use TDD to design a question answering AI module
1. Create a test file `getAnswer.test.ts`.
2. Test that it receives a `question` and a `context` then response.
3. Test that it responds with the correct answer if it's in the context.
4. Test that it doesn't provide an answer if it's not in the context.
5. Test other likely and unlikely cases.

### Code the function signature
```js
export async function getAnswer(
	question: string,
	context: string
): Promise<string | undefined> {}
```

1. Create the file `getAnswers.ts`
2. Export the function `getAnswer`.
3. Add the parameters - `question` and `context`.
4. Assert the parameter types.
5. Assert the return type(s).

### Transformers.js pipeline
- The pipeline function lets you choose an AI task to perform, then returns an AI model.

```js
import { pipeline, QuestionAnsweringOutput } from "@xenova/transformers";

export async function getAnswer(
	question: string,
	context: string
): Promise<string | undefined> {

	const aiModel = await pipeline("question-answering");
    const response = (await aiModel(
			question,
			context
		)) as QuestionAnsweringOutput;
    const answer: any = response.answer;
	return answer;
}
```
```js
import { pipeline, QuestionAnsweringOutput } from "@xenova/transformers";

export async function getAnswer(
	question: string,
	context: string
): Promise<string | undefined> {

	const aiModel = await pipeline("question-answering");
    const response = await aiModel(question,context) ;
    const { answer } = response as QuestionAnsweringOutput;
	return answer;
}

```
1. View instructions in the Xenova AI model page - Use this model (top left), (CIPRE blocked this page.)
2. Import the pipeline function.
3. Give it the `'question-answering'` task, and it returns an AI Model.
4. Give the AI model a `question` and `context`, then get a response. 

### Jest cannot test Transformers.js
- An error appears with running the test file with Jest.
- Jest is not compatible with the new import/export syntax.
- The new import/export syntax is in the `Transformers.js` modules, not in our code.
- `Transformers.js` also uses `import.meta`, which is not compatible with Jest.
- The `import.meta` syntax imports from different locations depending on the environment.

### Vitest
- A Unit testing framework very similar to Jest, but compatible with Transformers.js

1. Install `vitest` and uninstall all Jest packages.
2. Uninstall and unconfig `@babel/preset-env` because it was only required to use Jest.
3. Change the `jest` commands to `vitest` for running tests.
4. Run the tests with Vitest.

### Vitest configuration
- Some configuration is necessary to make Vitest run without importing the test function.

1. Create `vitest.config.ts` and `import {UserConfigExport} from "vitest/config"`.
2. Export a default object and assert its datatype as `UserConfigExport`.
3. Set the property `test: {globals" true, watch: false}`.
4. Run the test.

### Remove TypeScript and timeout errors
- Tests fail because they timeout - they need time to download the AI Model.
```json
	"types": ["vitest/globals"], //DECLARES TEST FUNCTIONS FOR TYPESCRIPT. LIST OF FOLDERS THAT HAVE DECLARATION FILES.
```

1. In `tsconfig.json`, add `"types":["vitest/globals"]` to declare the functions for TypeScript.
2. Add `{timeout: 100000}` as the second parameter of the `describe` function.

### Configure the AI model
```JS
const DEFAULT_MODEL = "Xenova/distilbert-base-cased-distilled-squad";
const options: PretrainedOptions = { cache_dir: "ai-models" };
```

1. To remove the warning, specify the model to use. 
2. To save AI models in a folder, set the `options` object to `{cache_dr: "ai-models"}`.

### Fix test errors
1. Run the tests in a debugger to find out what's wrong.
2. Don't let the modules return an answer if it's probably wrong.
3. Don't run the AI model if the inputs are invalid.

### Get a response from the backend Al server
1. Create a route and a route handler to run `getAnswer`.
2. Let the route handler extract the question and context query parameters.
3. Send the return value of getAnswer.
4. Try the route with a browser.

### Errors bundling `Transformers.js`
- Bundling `Transformers.js` will result in errors.
- Adding new loaders won't work because `Transformers.js` is different for each platform.
- Bundling assumes that the code should be the same no matter which platform it's on.
- `Transformers.js` needs to be installed specifically on each platform.
- The post-install script ensures compatibility with each platform.

### Configure Webpack to NOT bundle `Transformers.js`
- Externals are modules that won't be included in the Webpack bundle.
- Externals must be imported by the bundle.
- Externals type specifies how the bundles app should import the external module.

1. In the Webpack config, add `externals: ["@xenova/transformers"]`.
2. Also add `externalsType: "commonjs-module"`.

### Install externals
- Because externals are not bundles, they must be installed separately so the app works.

1. Temporarily add the `PORT` environment variables is in the `dist` folder.
2. Go to the `dist` folder and run the bundled app.
3. Delete the `node_module`s folder and try running the bundled app from the `dist` folder.
4. Use `npm` (not PNPM )to install `@xenova/transformers` in the `dist` folder.

### Deploy the AI to App Engine
1. Remove the temporary port from the `dist` folder.
2. Make sure a copy of the `ai-models` folder is in the `dist` folder.
3. Deploy the `dist` folder to App Engine.
4. Get a response from the deployed backend AI server.

### Query parameters special characters
- The browser may insert special characters into query parameters

1. Send query parameters to the backend AI server.
2. Notice that spaces are automatically replaced by `%20` or `+`.

### AI interference
- The special characters can interfere with AI answers.
- The AI may not be able to answer, or it might respond with `%20` or `+`.
- Use the HTTP method `POST` to send data as-is (without replacement characters).
- See [express.md](./express.md) for details.

### Convert the AI route
- Use the POST method to securely send unaltered data through the AI route.

1. In the `index.ts` file, change the AI route to use the `post` method.
2. In the AI route handler, use the data from `request.body`.
3. Use Postman to view the response.

### Frontend AI interface
- Create a frontend user interface that accepts a question and context

```js
<input name="question"/>
<textarea name="context"></textarea>
```

1. Create a React component called `Ai`.
2. Let it render a form that accepts a `question` and a `context`.
3. Use the `name` attribute to easily access values through form elements.

### Frontend AI handler
- Handle the form submission and get the result
```js
const form = event.target.elements;
const question = form.question.value;
const context = form.context.value;
```
 FormEvent<HTMLFormElement>


1. In the submission handler, use the debugger to explore `event.target.elements`.
2. Extract the question and context values from `event.target.elements`.
3. Send the question and context to a module called `getAnswer` (not created yet).
4. Save the response in a local variable.

### Frontend AI module TDD
```js
const data = { question, context };
axios.post("http://localhost:8000/ai", data);
```

1. Create a files called `getAnswer.test.ts`.
2. Write tests for a module called `getAnswer` that accepts a `question` and `context`.
3. Let the module return an answer from the backend AI server.
4. Code `getAnswer` according to the test specifications.
5. Use the Axios `post` method to send `data` to the backend server.
6. Observe that the backend server doesn't receive the data.

### JSON parameters
- Axios accepts data as an object and uses the post method to send data as a JSON string.
- Express needs to be configured to receive JSON parameters.

```js
app.use(json());
```

1. Use the debugger to confirm that data is not being transmitted from frontend to backend.
2. To the backend `index.ts` file, add `app.use(json())` to enable JSON parameters.
3. Use the debugger to confirm that JSON parameters are being received.

### Answer probability score
- The AI model provides the probability that the answer is correct.
- Probability is a score from 0 to 1 in which 1 means the AI is certain of the answer.

```js
const { answer, score } = response;
```

1. Destructure the `answer` and `score` from the `response`.
2. Check if the `score` is high enough.

### Use Redux for rendering the answer
```js
const action = set.globalAnswer(answer);
dispatch(action);
```

1. In `stateVariables.ts` add a categorized state variable for the answer.
2. Code its selector and setter in `stateSelectors.ts` and `stateSetters.ts`.
3. Add `useSelector` and `useDispatch` to the Ai component.
4. Dispatch an action to set the values of the state variables for the answer.
5. Render the answer.

### Use Bootstrap to style the AI interface (example)
- Components: Grid system, Collapse, icon
- Spacing: `m-3` `mt-3` `mb-3` `my-3` `p-3` `pt-3` `pb-3` `py-3`
- Borders: `border border-primary rounded`
- Colors: `bg-primary` `text-primary`
- Size: `fs-3` `w-50` `w-50`


