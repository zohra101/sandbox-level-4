import { CarClass, CarInterface, CarType } from "./Car";
import { Cars, Attendance, CodexLevel, CarInfo } from "./customDatatypes";

{
	//The type of variable can be asserted at the beginning
	const cars: Array<CarType> = [
		{ color: "red", year: 2025, isForSale: true },
		{ color: "green", year: 2024, isForSale: false },
		{ color: "white", year: 2000, isForSale: true },
		// { first: "bob", middle: "greg", last: "smith" }, //Not CarType
	];
}

{
	//The type of variable can be asserted at the beginning with a custom datatype
	const cars: Cars = [
		{ color: "red", year: 2025, isForSale: true },
		{ color: "green", year: 2024, isForSale: false },
		{ color: "white", year: 2000, isForSale: true },
		// { first: "bob", middle: "greg", last: "smith" }, //Not CarType
	];
}

{
	// Interfaces do not show the details of the type on mouseover
	const car: CarInterface = { color: "red", year: 2025, isForSale: true };
}

{
	//The type of variable can be asserted at the end
	const cars = [
		new CarClass(),
		new CarClass(),
		new CarClass(),
	] as Array<CarClass>;
}

{
	//TypeScript provides an Intellisense popup of the available choices
	const attendance1: Attendance = "present";
	//const attendance2: Attendance = "gift"; //Not an Attendance value
}

{
	//let level1: CodexLevel = 5; //Not a CodexLevel value
	let level2: CodexLevel = 4;
}

{
	//Custom data types show the details of the type they alias on mouseover
	const carInfo1: CarInfo = ["red", 2023, false];
	const carInfo2: CarInfo = ["red", 1990, false];
}

{
// Interfaces do not show the details of the type on mouseover
const car: CarInterface = { color: "red", year: 2025, isForSale: true };
}