export function getPromoMessage(event: Event) {
	event.preventDefault();
	const inputs = event.target;
	const nameInput = inputs[1];
	const emailInput = inputs[2];
	const name = nameInput.value;
	const email = emailInput.value;

	if (name === "" && email !== "") return "";
	if (name !== "" && email === "") return "";
	if (name === "" && email === "") return "";

	// /^\d+$/.test(name): This is a regular expression test.
	// ^: Matches the beginning of the string.
	// \d+: Matches one or more digits (0-9).
	// $: Matches the end of the string.

	// .test(name): The test() method of the regular expression checks if the name string matches the pattern.
	if (/^\d+$/.test(name)) return "";
	
	// console.log(name, typeof name);

	const message = `Hi ${name}, to thank you for completing our survey, we're sending a 20% discount code to your email address: ${email}. This discount is valid until April 30, 2025.`;

	return message;
}
