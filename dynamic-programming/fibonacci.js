function fibWithMemoization(n, cache = { 2: 1, 1: 1 }) {
	if (cache[n] !== undefined) return cache[n];

	cache[n] =
		fibWithMemoization(n - 1, cache) + fibWithMemoization(n - 2, cache);

	return cache[n];
}

function fibTabulated(n) {
	if (n <= 2) return;

	const fibNums = [];
	for (let i = 3; i <= n; i++) {
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
	}

	return fibNums[n];
}

function fib(n) {
	if (n <= 2) return 1;

	return fib(n - 1) + fib(n - 2);
}

const start1 = performance.now();
console.log(fibWithMemoization(3000));
console.log(
	"time take with memo",
	+(performance.now() - start1).toFixed(2),
	"ms"
);

// const start2 = performance.now();
// console.log(fib(40));
// console.log(
// 	"time take without memo",
// 	+(performance.now() - start2).toFixed(2),
// 	"ms"
// );

const start3 = performance.now();
console.log(fibTabulated(3000));
console.log(
	"time take tabulated",
	+(performance.now() - start3).toFixed(2),
	"ms"
);
