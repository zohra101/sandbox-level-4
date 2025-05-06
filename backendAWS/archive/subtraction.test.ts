import { subtraction } from "./subtraction";

describe("Testing the subtraction function", () => {
	it("subtracts positive numbers", subtractPositiveNumbers);
	function subtractPositiveNumbers() {
		//ARRANGE: set the variables for the test
		const x = 13;
		const y = 4;

		//ACT: Use the unit with the variables
		const result = subtraction(x, y);

		//ASSERT: Check if the unit works as expected
		expect(result).toBe(9);
	}

	it("subtracts a positive and a negative number", subtractPositiveNegative);
	function subtractPositiveNegative() {
		//ARRANGE: set the variables for the test
		const x = 5;
		const y = -3;

		//ACT: Use the unit with the variables
		const result = subtraction(x, y);

		//ASSERT: Check if the unit works as expected
		expect(result).toBe(8);
	}

	it("subtracts negative numbers", subtractNegativeNumbers);
	function subtractNegativeNumbers() {
		//ARRANGE: set the variables for the test
		const x = -5;
		const y = -3;

		//ACT: Use the unit with the variables
		const result = subtraction(x, y);

		//ASSERT: Check if the unit works as expected
		expect(result).toBe(-2);
	}

	it("subtracts a negative and a positive number", subtractNegativePositive);
	function subtractNegativePositive() {
		//ARRANGE: set the variables for the test
		const x = -8;
		const y = 3;

		//ACT: Use the unit with the variables
		const result = subtraction(x, y);

		//ASSERT: Check if the unit works as expected
		expect(result).toBe(-11);
	}

	it("returns a number when number strings are used in math", subtractNumberStrings);
	function subtractNumberStrings() {
		//ARRANGE: set the variables for the test
		const x: any = "5";
		const y: any = "4";

		//ACT: Use the unit with the variables
		const result = subtraction(x, y);

		//ASSERT: Check if the unit works as expected
		expect(result).toBe(1);
	}
});
