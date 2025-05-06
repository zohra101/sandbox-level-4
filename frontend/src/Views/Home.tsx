// USE DEFAULT IMPORTS (INSTEAD OF NAMED IMPORTS) FOR ASSETS
import React, { useEffect, useState } from "react";
import { handleClick } from "../controllers/handleClickOld";
import { handleSubmit } from "../controllers/handleSubmit";
// import "./Home.scss";
import midEastImage from "../../assets/images/archcopy.png";
// import { Carousel } from "./Carousel";
// import { describeCar } from "../../modules/describeCarTuple";
import { CarClass, CarInterface, CarType } from "../modules/examples/Car";
import { describeCarObject } from "../modules/examples/describeCarObject";
import { Quote } from "./Quote";
import { Trivia } from "./Trivia";
import { ImageMap } from "./ImageMap";
import { useDispatch, useSelector } from "react-redux";
import {
	selectComponent,
	selectDidMount,
} from "../modules/redux/stateSelectors";
import { selectMessage } from "../modules/redux/stateSelectors";
import { selectClickCount } from "../modules/redux/stateSelectors";
import { set } from "../modules/redux/store";

export function Home() {
	// let myTuple: [string, Function];
	// myTuple = useState("hello");
	// const result = JSON.stringify(<ImageMap />; //Creates an infinite loop; cannot be serialized because it's an object, not a string

	const didMount = useSelector(selectDidMount);
	const message = useSelector(selectMessage);
	const clickCount = useSelector(selectClickCount);
	let component: any = useSelector(selectComponent);

	if ((component = "ImageMap")) component = <ImageMap />;
	if ((component = "Quote")) component = <Quote />;
	if ((component = "Trivia")) component = <Trivia />;

	const [carDescription, setCarDescription] = useState(<></>);

	const dispatch = useDispatch();
	useEffect(componentDidMount, []);

	// const adjective = "easier";
	// const message = `The command line is ${adjective} now.`;

	const domain = window.location.hostname;
	console.log(`Home domain: ${domain}`);
	console.log(`Home arch path: ${midEastImage}`);

	return (
		<>
			<header id="homeHeader"></header>
			<main
				className="m-3"
				id="homeMain"
			>
				{component}
				<h1 id="homeTitle">AWS is awesome.</h1>
				{/* <div
					style={{
						width: "fit-content",
						justifySelf: "center",
					}}
				> */}
				<img
					id="midEastImage"
					alt="midEastImage"
					src={midEastImage}
					data-bs-title="A picture of an arch"
					data-bs-toggle="tooltip"
					width="75% !important"
				/>
				{/* </div> */}
				<p className="highlight">The message is: {message}</p>
				<button
					type="button"
					onClick={handleClick}
				>
					Click
				</button>
				<div>
					<br></br>
				</div>
				{/* <Carousel /> */}
				<output id="outputTag"></output>
				{/* <form
					className="mb-3"
					onSubmit={handleSubmit}
				>
					<input type="text"></input>
					<input type="submit"></input>
				</form> */}
			</main>
		</>
	);

	function componentDidMount() {
		// function selectDidMount(state: StateVariables) {
		// 	// const didMount = state.didMount;
		// 	debugger;
		// 	const { didMount } = state;
		// 	return didMount;
		// }

		let action = set.didMount(true);
		dispatch(action);

		action = set.message("Have a nice day!");
		dispatch(action);

		//action = set.component(<Image Map />)
		// action = set.component("ImageMap");
		action = set.component("Quote");
		// action = set.component("Trivia");
		dispatch(action);

		/************************************************************** */
		document.getElementById("midEastImage");
		console.log(`midEastImage: ${midEastImage}`);

		const midEastImageTooltip = document.getElementById("midEastImage");
		new bootstrap.Tooltip(midEastImageTooltip);

		/************************************************************** */

		// const result = describeCarTuple(["red", 2024, false]);

		const carClass = new CarClass();
		carClass.color = "green";
		carClass.year = 2020;
		carClass.isForSale = true;

		const carInterface: CarInterface = {
			color: "red",
			year: 2019,
			isForSale: true,
		};

		const carType: CarType = {
			color: "white",
			year: 2021,
			isForSale: false,
		};

		const result = describeCarObject(carType);
		setCarDescription(<h3>{result}</h3>);
	}
	/************************************************************** */
}
