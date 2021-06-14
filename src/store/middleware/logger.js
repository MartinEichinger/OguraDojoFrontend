const logger = (param) => (store) => (next) => (action) => {
	console.log("Logging to: ", param);
	next(action);
};

export default logger;
