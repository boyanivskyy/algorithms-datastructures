const maxProfit = (prices) => {
	let buy = 0;
	let sell = 1;
	let maxProfit = 0;

	while (sell < prices.length) {
		if (prices[sell] > prices[buy]) {
			maxProfit = Math.max(maxProfit, prices[sell] - prices[buy]);
		} else {
			buy = sell;
		}

		sell++;
	}

	return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
