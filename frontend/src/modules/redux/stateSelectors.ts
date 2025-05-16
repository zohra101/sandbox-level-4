import { StateVariables } from "./stateVariables";

export function selectDidMount(state: StateVariables) {
	const { didMount } = state;
	return didMount;
}

export function selectMessage(state: StateVariables) {
	const { message } = state;
	return message;
}

export function selectClickCount(state: StateVariables) {
	const { clickCount } = state;
	return clickCount;
}

export function selectComponent(state: StateVariables) {
	const { component } = state;
	return component;
}
