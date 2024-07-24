var promiseAll = function (functions) {
	return new Promise((resolve, reject) => {
		let results = [];

		for (let i = 0; i < functions.length; i++) {
			functions[i]()
				.then((result) => {
					results[i] = result;

					if (results.length === functions.length) {
						console.log("resolve");
						resolve(results);
					}
				})
				.catch(reject);
		}
	});
};

// promiseAll([
// 	() => new Promise((resolve) => setTimeout(() => resolve(5), 200)),
// ]).then((result) => {
// 	console.log(result);
// });

(async function () {
	console.log(
		await promiseAll([
			() => new Promise((resolve) => setTimeout(() => resolve(5), 200)),
		])
	);
})();
