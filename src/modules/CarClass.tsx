import { proposalSyntaxPlugins } from "@babel/preset-env/lib/shipped-proposals";

export class Car {
	color = "red";
	doors = 4;
	vehicleType = "sedan";

	constructor() {
        Car.color="green";
        


    }
}


        const myCar = new Car();
				myCar.color;
				myCar.doors;
				myCar.color = "green";

