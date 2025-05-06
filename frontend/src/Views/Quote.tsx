import React, { useState } from "react";
import axios from "axios";


export function Quote() {
    const [ quote, setQuote] = useState("");
    const [ author, setAUthor] = useState("");

	return (
		<>
			<section>
				<h3>Quote</h3>
				<button onClick={handleClick}>Get a Quote </button>
				<br /> <br />
				<blockquote> {quote}</blockquote>
				{author}
			</section>
			<br />
		</>
	);

	async function handleClick() {
		const response = await axios.get("http://localhost:9000/quote");
		debugger;
		const quote = response.data.quote;
		const author = response.data.author;
        setQuote(`"${quote}"`);
        setAUthor(` - ${author}`);
		
	}
}

