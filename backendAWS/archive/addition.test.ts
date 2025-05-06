import { addition } from "./addition";

describe("Testing the addition function", () => {
	it("adds numbers", addPositiveNumbers);

	function addPositiveNumbers() {
		//ARRANGE: set the variables for the test
		const x = 3;
		const y = 4;

		//ACT: Use the unit with the variables
		const result = addition(x, y);

		//ASSERT: Check if the unit works as expected
		expect(result).toBe(7);
	}

	it("adds a positive and a negative number.", addPositiveNegative);

	function addPositiveNegative() {
		//ARRANGE: set the variables for the test
		const x = 5;
		const y = -3;

		//ACT: Use the unit with the variables
		const result = addition(x, y);

		//ASSERT: Check if the unit works as expected
		expect(result).toBe(2);
	}

	it("adds negative numbers", addNegativeNumbers);

	function addNegativeNumbers() {
		//ARRANGE: set the variables for the test
		const x = -5;
		const y = -3;

		//ACT: Use the unit with the variables
		const result = addition(x, y);

		//ASSERT: Check if the unit works as expected
		expect(result).toBe(-8);
	}

	// it("return NaN when strings are used in math", addStrings);
	// function addStrings() {
	// 	//ARRANGE: set the variables for the test
	// 	const x = "a";
	// 	const y = "b";

	// 	//ACT: Use the unit with the variables
	// 	const result = addition(x, y);

	// 	//ASSERT: Check if the unit works as expected
	// 	expect(result).toBeNaN();
	// }

	// it("returns a number when number strings are used in math", addNumberStrings);
	// function addNumberStrings() {
	// 	//ARRANGE: set the variables for the test
	// 	const x = "5";
	// 	const y = "4";

	// 	//ACT: Use the unit with the variables
	// 	const result = addition(x, y);

	// 	//ASSERT: Check if the unit works as expected
	// 	expect(result).toBe(9);
	// }
});
