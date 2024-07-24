Array.prototype.groupBy = function (fn) {
	let acc = {};

	for (let i = 0; i < this.length; i++) {
		const groupByVal = fn(this[i]);
		console.log("groupByVal", groupByVal);
		if (!acc[groupByVal]) {
			acc[groupByVal] = [];
		}
		acc[groupByVal][acc[groupByVal].length] = this[i];
		console.log(this[i]);
	}

	return acc;
};

console.log([1, 2, 3].groupBy((x) => x)); // {"1":[1],"2":[2],"3":[3]}
