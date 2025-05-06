import { isGreenObject } from "./isGreenObject";

describe("Testing the isGreenObject function", () => {
	it("property color is green", colorIsGreen);
	function colorIsGreen() {
		//ARRANGE: set the variables for the test
		const testObject = {
			color: "green",
		};

		//ACT: Use the unit with the variables
		const result = isGreenObject(testObject);

		//ASSERT: Check if the unit works as expected
		expect(result).toBe(true);
	}

	it("property color is a color that is not green", colorIsBlue);
	function colorIsBlue() {
		//ARRANGE: set the variables for the test
		const testObject = {
			color: "blue",
		};

		//ACT: Use the unit with the variables
		const result = isGreenObject(testObject);
		
		//ASSERT: Check if the unit works as expected
		expect(result).toBe(false);
	}

	it("no color property", colorIsNull);
	function colorIsNull() {
		//ARRANGE: set the variables for the test
		const testObject = {
			color: "",
		};

		//ACT: Use the unit with the variables
		const result = isGreenObject(testObject);

		//ASSERT: Check if the unit works as expected
		expect(result).toBe(false);
	}

	it("property color is a number string", colorIsNumber);
	function colorIsNumber() {
		//ARRANGE: set the variables for the test
		const testObject = {
			color: "1234",
		};

		//ACT: Use the unit with the variables
		const result = isGreenObject(testObject);

		//ASSERT: Check if the unit works as expected
		expect(result).toBe(false);
	}

	it("property color is a boolean", colorIsBoolean);
	function colorIsBoolean() {
		//ARRANGE: set the variables for the test
		const testObject = {
			color: false,
		};

		//ACT: Use the unit with the variables
		const result = isGreenObject(testObject);

		//ASSERT: Check if the unit works as expected
		expect(result).toBe(false);
	}
});
