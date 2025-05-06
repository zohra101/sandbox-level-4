import React, { useState, useEffect } from "react";

export function ReactRenderPractice() {
	const [elements, setElements] = useState([]);
	const [updateCount, setUpdateCount] = useState(0);

	useEffect(compeonentDidMount, []);
    useEffect(compeonentDidUpdate, [updateCount]);

	return <>{elements}</>;

	function compeonentDidMount() {
		console.log("The component mounted.");
		elements.push(<h1 key="title">React Render Practice</h1>);
		setUpdateCount(updateCount + 1);
	}

	function compeonentDidUpdate() {
		if (updateCount === 1) {
			elements.push(<button key="button">Update Count is 1</button>);
			setUpdateCount(updateCount + 1);
		}
	}
}
