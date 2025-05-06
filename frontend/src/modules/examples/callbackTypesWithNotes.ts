import { Attendance } from "./customDatatypes";

// Example 1:
function myOutputer(callback: (message: string) => string) {
	// Insert code here
	callback("Hello");
}

myOutputer(myOutputFunction);

function myOutputFunction(message: string) {
	return `Your message is: ${message}.`;
}

// Explanation:
// This example demonstrates passing a function (`myFunction`) as a parameter to another function (`myOutputer`).
// `myOutputer` calls the `myOutputFunction` callback with a string argument.
// Real-world use case: This pattern can be used in event handling, logging systems, or when implementing custom hooks where the behavior is flexible and can be adjusted by passing different callback functions.

// Example 2:
function myHandler(callback: (event: Event) => void) {
	// Insert code here
	callback(new Event("click"));
}

myHandler(myHandleClick);

function myHandleClick(event: Event) {
	//No return value
}

// Explanation:
// This example shows how to pass an event handler (`myHandleClick`) as a callback to `myHandler`.
// The handler is called with a simulated event.
// Real-world use case: This is common in user interface programming, where event listeners (such as clicks or form submissions) are passed as callback functions to handle specific actions on user interactions.

// Example 3:
function noParameters(callback: () => {}) {
	// Insert code here
	callback();
}

noParameters(myCallback);

function myCallback() {
	const myObject = {};
	//const myObject = { color: "red"};
	return myObject;
}

// Explanation:
// Here, `noParameters` takes a callback that doesn't receive any arguments, and it calls the callback without passing data to it.
// Real-world use case: This pattern is often used for initializing processes, like setting default values, or calling a setup function when no input is needed, such as in configuration scripts or application bootstrapping.

// Example 4:
function myStateFunctiion(
	callback: (value: any) => [any, (value: any) => void]
) {
	// Insert code here
	callback("Hello");
}

myStateFunctiion(myUseState);

function myUseState(value: any) {
	const tuple = [value, setter];
	return tuple as [any, (value: any) => void];

	function setter(value: any) {
		//Insert code about how to set the value
	}
}

// Explanation:
// This example illustrates using a callback that simulates state management, similar to React's `useState` hook, returning a value and a setter function.
// Real-world use case: This pattern is used in modern frontend frameworks (like React) for state management, where you pass a function to handle state changes and retrieve the current state value.

// Example 5:
function myCallerFunction(callback: Function) {
	// Insert code here
	callback();
}

myCallerFunction(myCallback2);

function myCallback2(message: string) {
	return "hello";
}

// Explanation:
// This example shows how a callback function can be passed into another function (`myCallerFunction`), which then invokes the callback.
// Real-world use case: This approach can be used when writing utility functions that perform an action and invoke a callback once the action is completed, such as in asynchronous operations or higher-order functions in libraries.

// FONCTIONS THAT I USE, THAT ACCEPT A CALLBACK FUNCTION
setTimeout((x, y, z) => {}, 1000);
describe("These test are for myFunction", () => {
console.log("hi");
});


function output2(message: string): Attendance {
	console.log(message);
	return "late";
}

(message: string) => {
	console.log(message);
} 

type Callback = (message: string) => void;
function myFunction(callback: Callback) {}

myFunction(myCallback3);

function myCallback3(message: string) {
}

type Callback2 = (event: Event) => string;
const x: Callback2 = function(event: Event) {
	return "hello";
};




