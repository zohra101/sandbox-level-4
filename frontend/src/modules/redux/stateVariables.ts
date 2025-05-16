export const stateVariables = {
	//Declare the state variables that this slice will use as key value pairs
	didMount: false,
	clickCount: 0,
	message: "Hello world!",
	component: undefined,
};

export type StateVariables = typeof stateVariables; 

//NOT NECESSARY TO MANUALLY DEFINE IF USING TYPEOF
// type StateVariables = {
// didMount: boolean;
// clickCount: number;
// message: string;
// };

