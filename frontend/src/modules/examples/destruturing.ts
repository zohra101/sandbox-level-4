{
	//Extracting values without destructuring
	const car = { color: "red", year: 2025, isForSale: true };
	const color = car.color;
	const year = car.year;
	const isForSale = car.isForSale;
}

function getCar({ color, year, isForSale });

{
	// obfects on the right side of the equal sign can be destructure on the left side
	// The properties must match on the left side
	const { color, year, isForSale } = {
		color: "red",
		year: 2025,
		isForSale: true,
	};

	function getCar({ color, year, isForSale });
}

{
	//Variables that are objects can be destructured
	const car = { color: "green", year: 2023, isForSale: false }; //Create the object
	const { color, year, isForSale } = car; //Destructure the object
}

{
	//Extracting values from a parameter without destructuring
    function getCarDescription1(carObject: any) {
	const color = carObject.color;
	const year = carObject.year;
	const isForSale = carObject.isForSale;
	return `Your car is ${color}, made in ${year}, and for sale is ${isForSale}.`;
    }
}

{
	//Extracting values from a parameter with destructuring
	function getCarDescription2({ color, year, isForSale }) {
		return `Your car is ${color}, made in ${year}, and for sale is ${isForSale}.`;
	}
}
