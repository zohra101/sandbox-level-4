import { CarClass } from "./Car";


export function describeCarObject(car: CarClass) {
    const { color, year, isForSale} = car;
    return (`Your car is ${color}, made in ${year}, and for sale is ${isForSale}.`);
};
