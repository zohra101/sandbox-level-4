import React from "react";

export function SignInContent(props) {
	const errorMessage = props.errorMessage;
	return (
		<>
			<div className="m-1">
				Email:{" "}
				<input
					type="email"
					required
				/>
				<br />
				Password:{" "}
				<input
					type="password"
					required
				/>
			</div>

			<div
				className="m-1"
				style={{ color: "red" }}>
				{" "}
				{errorMessage}
			</div>
		</>
	);
}
