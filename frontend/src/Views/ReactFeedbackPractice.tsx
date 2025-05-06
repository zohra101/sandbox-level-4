import React, { FormEvent, useState } from "react";
import { getPromoMessage } from "../modules/practices/getPromoMessage";


export function ReactFeedbackPractice() {
	const [promoMessge, setPromoMessage] = useState("");
	
	return (
		<>
			<main>
				<h1>React Feedback Practice</h1>
				<form onSubmit={handleSubmit}>
					<fieldset>
						<legend>Enter your nanme and email address:</legend>
						<input name="name" />
						<span> Name</span>
						<input
							type="email"
							name="email"
						/>
						<span> Email</span>
						<button type="submit">Sign Up</button>
					</fieldset>
				</form>
				{promoMessge && (
					<div
						className="alert alert-primary"
						role="alert"
					>
					{promoMessge}
					</div>
				)}
			</main>
		</>
	);

	function handleSubmit(event: any) {
		const message = getPromoMessage(event);
		setPromoMessage(message);
    }
}

