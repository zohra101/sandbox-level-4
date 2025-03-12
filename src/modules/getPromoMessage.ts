export function getPromoMessage(event: Event) {
	event.preventDefault();
	const inputs = event.target;
	const nameInput = inputs[0];
	const emailInput = inputs[1];
	const name = nameInput.value;
	const email = emailInput.value;

    return (`Hi ${name}, to thank you for completing our survey, we're sending a 20% discount code to your email address: ${email}. This discount is valid until April 30, 2025.`);
}
