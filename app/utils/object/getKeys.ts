export const getKeys = <T>(obj: T extends {} ? any : any) =>
	Object.keys(obj) as Array<keyof T>;
