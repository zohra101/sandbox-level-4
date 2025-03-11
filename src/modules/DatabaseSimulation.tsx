export class DatabaseSimulation {
	secretKey = "api123xyz";
	isConnected = false;

	constructor(apiKey = "") { //Authenticates api key
		console.log(this.secretKey);
		console.log(this.isConnected);

		const doesMatch = apiKey === this.secretKey;
		if (doesMatch) this.isConnected = true;
	}

	getData(logins = [], email = "") {//Gets user signin information and authenticates it against authorized users lookup
		console.log("Getting data...");

		const promise = new Promise(findLogin); //Begins user autheentication process
		return promise;

		function findLogin(resolve) {
			//Promise callback
			console.log(`I promise to find ${email} in logins.`);

			const matchingLogin = {}; //Returns matching credentials or empty object if no match is found
			for (const login of logins) {
				//Loops through logins.js, the authorizied users list
				const doesMatch = email === login.email;
				if (doesMatch) {
					matchingLogin.email = login.email;
					matchingLogin.password = login.password;
				}
			}
			resolve(matchingLogin); //Indicates promise is fulfilled and sends value of matching login to promise
		}
	}
}

const newLogin = new DatabaseSimulation();
const loginData = newLogin.getData(email, password);
