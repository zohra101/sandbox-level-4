// USE DEFAULT IMPORTS (INSTEAD OF NAMED IMPORTS) FOR ASSETS
import React, { FormEvent, useEffect, useState } from "react";
// import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import {
	selectComponent,
	selectDidMount,
} from "../modules/redux/stateSelectors";
import { selectMessage } from "../modules/redux/stateSelectors";
import { selectClickCount } from "../modules/redux/stateSelectors";
import { set } from "../modules/redux/store";
import { getAnswer } from "../modules/getAnswer";

export function Ai() {
	const didMount = useSelector(selectDidMount);
	const message = useSelector(selectMessage);
	const clickCount = useSelector(selectClickCount);
	// let component: any = useSelector(selectComponent);

	// if ((component = "ImageMap")) component = <ImageMap />;

	const dispatch = useDispatch();
	useEffect(componentDidMount, []);

	const domain = window.location.hostname;
	console.log(`Home domain: ${domain}`);

	return (
		<>
			<main
				className="m-3"
				id="homeMain"
			>
				<h1 id="aiTitle">Use the AI to answer a question</h1>
				<form
					className="mb-3"
					onSubmit={handleSubmit}
				>
					Question: <br />
					<input name="question" defaultValue="What is my name?"/>
					Context: <br />
					<textarea name="context" defaultValue="My name is Alex."></textarea>
					<br />
					<input type="submit"></input>
				</form>
			</main>
		</>
	);

	function componentDidMount() {
		let action = set.didMount(true);
		dispatch(action);

		// action = set.component("Quote");
		// dispatch(action);
	}
}

async function handleSubmit(event: any) {
	event.preventDefault();
	const form = event.target.elements;
	const question = form.question.value;
	const context = form.context.value;
    const answer = await getAnswer(question, context);
}
