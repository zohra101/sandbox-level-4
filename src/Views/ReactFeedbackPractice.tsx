import React from "react";
import { handleSubmit } from "../controllers/handleSubmit";

export function ReactFeedbackPractice() {
	const promoMessge = useState("");
	return (
		<main>
			<form onSubmit={handleSubmit}>
				<input type="text">Name</input>
				<input type="email">Email</input>
				<button type="submit">Submit</button>
			</form>
			{promoMessge}
		</main>
	);

	function handleSubmit(event: Event) {
        




    }
}
