const [carDescription, setCarDescription] = useState(<></>);
useEffect(componentDidMount, []); 


const result = describeCar(["red", 2021, true]);
const carClass = new CarClass();
carClass.color = "red";
carClass.year = 2023;
carClass.isForSale = true;

const result = describeCarObject( {color: "green", year: 2021, isForSale: true});

const carInterface: CarInterface = {
	color: "green",
	year: 2021,
	isForSale: false,
};

const carType: CarType = {
	color: "blue",
	year: 2020,
	isForSale: true,
};

const result = describeCarObject(carInterface);

setCarDescription(<h3>{result}</h3>);

