import { getPromoMessage } from "./getPromoMessage";

describe("The getPromoMessage function", () => {
	it("generates the correct message with the correct user's name and correct user's email", () => {
		//ARRANGE
		const event: any = {
			preventDefault: () => {},
			target: [{}, { value: "Alex" }, { value: "starfire8152@gmail.com" }],
		} ;
		//ACT
		const emailProvided = getPromoMessage(event);

		//ASSERT
		expect(emailProvided).toBe(
			`Hi Alex, to thank you for completing our survey, we're sending a 20% discount code to your email address: starfire8152@gmail.com. This discount is valid until April 30, 2025.`
		);
	});

	it("user did not enter email", () => {
		//ARRANGE
		const event: any = {
			preventDefault: () => {},
			target: [{}, { value: "Alex" }, { value: "" }],
		};
		//ACT
		const emailProvided = getPromoMessage(event);

		//ASSERT
		expect(emailProvided).toBe("");
	});

	it("user did not enter name", () => {
		//ARRANGE
		const event: any = {
			preventDefault: () => {},
			target: [{}, { value: "" }, { value: "starfire8152@gmail.com" }],
		};
		//ACT
		const emailProvided = getPromoMessage(event);

		//ASSERT
		expect(emailProvided).toBe("");
	});

	it("user did not enter email and name", () => {
		//ARRANGE
		const event: any = {
			preventDefault: () => {},
			target: [{}, { value: "" }, { value: "" }],
		};
		//ACT
		const emailProvided = getPromoMessage(event);

		//ASSERT
		expect(emailProvided).toBe("");
	});

	it("user entered numbers without letters for name", () => {
		//ARRANGE
		const event: any = {
			preventDefault: () => {},
			target: [{}, { value: "1234" }, { value: "starfire8152@gmail.com" }],
		};
		//ACT
		const emailProvided = getPromoMessage(event);

		//ASSERT
		expect(emailProvided).toBe("");
	});
});
