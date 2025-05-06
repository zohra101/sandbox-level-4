import { output } from "../utils/output";


export function doSomething() {
    const variable = 25;

    const myAnonFunction1 = function () {
        let number = variable + 3;
    };

    const myAnonFunction2 = () => {

    };

}


export function doSomething2(callbackFunction) {
    callbackFunction("text");
}

doSomething2(output);