import React, { useState, useEffect } from "react";
import { SignInModal } from "./SignInModal";
import { SignOutModal } from "./SignOutModal";

export function SignInArea() {
	const [button, setButton] = useState(<></>);
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [didMount, setDidMount] = useState(false);

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate, [isSignedIn]);

	return <>{button}</>;

	function componentDidMount() {
		console.log("MOUNT PHASE: SignInArea");
		if (isSignedIn) setButton(<SignOutModal onSignOut={handleSignOut} />);
		else setButton(<SignInModal onSignIn={handleSignInAttempt} />);
		setDidMount(true);
	}

	function componentDidUpdate() {
		if (didMount) {
			console.log("UPDATE PHASE: SignInArea");
			if (isSignedIn) setButton(<SignOutModal onSignOut={handleSignOut} />);
			else setButton(<SignInModal onSignIn={handleSignInAttempt} />);
		}
	}

	function handleSignInAttempt() {
		setIsSignedIn(true);
	}

	function handleSignOut() {
		setIsSignedIn(false);
	}
}
