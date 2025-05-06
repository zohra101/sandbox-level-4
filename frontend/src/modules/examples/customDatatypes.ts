import { CarClass, CarInterface, CarType } from "./Car";

export type Cars = Array<CarClass>;
export type Attendance = "present"|"late"|"excused"|"absent"
export type CodexLevel = 1|2|3|4|10|11|12
export type CarInfo = [string, number, Boolean]  //Primitive data types are lower case

// Primitive data types cannot be changed after being declared as a constant
const mystring = "hello";
// mystring = "bye"; //ERROR

// Object data type can change values after being declared as a constant
const myObject = {message: "hello"};
myObject.message = "bye";


const attendance: Attendance = "late";

const level: CodexLevel = 13;

type Cat = "Bengal" | "Siamese" | "Bluepoint" | "Manx"
type Animal = {
    name: string,
    legs: number,
    isEggLayer: boolean
}

const animal1: Animal = {
    name: "zebra",
    legs: 4,
    isEggLayer: false
}

const myCar = {
    color: "red",
    doors: 4, 
    year: 2020
}