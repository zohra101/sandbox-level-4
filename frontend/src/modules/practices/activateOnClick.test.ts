import { activateOnClick } from "./activateOnClick";

describe("activateOnClick function", () => {
	it("accepts an object without executing its methods", acceptsObject);
	function acceptsObject() {
		//ARRANGE: set the variables for the test
		const clickObject = {
			onClick: function () {},
		};

		//ACT: Use the unit with the variables
		const result = activateOnClick(clickObject);

		//ASSERT: Check if the unit works as expected
		expect(result).toBeTruthy();
	}

	it("activates the onClick method in the object", activatesMethod);
	function activatesMethod() {
		//ARRANGE: set the variables for the test
		const clickObject = {
			onClick: function () {
				return "clicked";
			},
		};

		//ACT: Use the unit with the variables
		const result = activateOnClick(clickObject);

		//ASSERT: Check if the unit works as expected
		expect(result).toMatchObject;
	}

	it("returns something when given an object with an onClick method", retunsSomething);
	function retunsSomething() {
		//ARRANGE: set the variables for the test
		const clickObject = {
			onClick: function () {}
		};

		//ACT: Use the unit with the variables
		const result = activateOnClick(clickObject);

		//ASSERT: Check if the unit works as expected
		expect(result).toBeDefined();
	}

	it(
		"returns the correct result of activating the onClnpmick method in the object",
		correctResult
	);
	function correctResult() {
		//ARRANGE: set the variables for the test
		const clickObject = {
			onClick: function (x: number, y: number) {
				x =5;
				y= 6;
				return x + y;
			},
		};

		//ACT: Use the unit with the variables
		const result = activateOnClick(clickObject);

		//ASSERT: Check if the unit works as expected
		expect(result).toBe(11);
	}
});
