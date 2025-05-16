import { StateVariables } from "./stateVariables";

export const stateSetters = {
	//Methods that match their state variables
	didMount: function (state: StateVariables, action: ActionBoolean) {
		const newValue = action.payload;
		state.didMount = newValue;
	},

	clickCount: function (state: StateVariables, action: ActionNumber) {
		const newValue = action.payload;
		state.clickCount = newValue;
	},

	message: function (state: StateVariables, action: ActionString) {
		const newValue = action.payload;
		state.message = newValue;
	},

	component: function (state: StateVariables, action: ActionString) {
		const newValue = action.payload;
		state.component = newValue;
	},
};

type ActionString = {
	type: string;
	payload: string;
};

type ActionBoolean = {
	type: string;
	payload: boolean;
};

type ActionNumber = {
	type: string;
	payload: number;
};
