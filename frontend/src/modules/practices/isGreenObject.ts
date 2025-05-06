export function isGreenObject(obj: any) {
	if (obj.color === "green") return true;
	if (obj.color !== "green") return false;
	if (obj.color === "") return false;
	if (typeof obj.color === "number") return false;
}