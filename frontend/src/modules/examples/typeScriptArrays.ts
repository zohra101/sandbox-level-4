export function addition(numbers: Array<number>) {
	// return x + y;
}
const result = addition([16, 27, 32, 45, 52, 60]);

function getGreeting(greetings: Array<string>) {
	return greetings[0];
}
const result2 = getGreeting(["hello", "hi", "what's up"]);

// function getGreeting2(greetings2: string[]) {
// }

function getCombo(combos: Array<string | number>) {
	const result3 = getCombo(["hello", 3, "what's up"]);
	return result3;
}

if (result2 === "hello" || result3 === "hi")
	console.log("Those are my favorite greetings.");

if (result2 === 123 || result2 === "hi")
	console.log("Those are my favorite greetings.");
if (result2 === "123" || result2 === "hi")
	console.log("Those are my favorite greetings.");

export function addition2(x: number | string, y: number | string) {
	const result4 = Number(x) + Number(y);
	return result4;
}

export function addition3(x, y: number | string) {
	// const result4 = Number(x) + Number(y);
	return x + y;
}

const colors: Array<string> = ["red", "yellow", "blue"];

const colors2: Array<string | number> = ["red", 3, "blue"];

