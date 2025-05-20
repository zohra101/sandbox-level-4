import axios from "axios";

export async function getAnswer(userQuestion: string, userContext: string): string {
    const url = "http://localhost:8000/ai";
	const data = { question: userQuestion, context: userContext };
	const response = await axios.post(url, data);
    const answer: string = response.data;
    return answer;
}
