var NestedIterator = function (nestedList) {
	this.arr = [];
	this.curr = 0;

	const arr = [];
	flatten(nestedList);
	this.arr = arr;

	function flatten(smth) {
		if (Array.isArray(smth)) {
			for (let i = 0; i < smth.length; i++) {
				flatten(smth[i]);
			}
		} else {
			arr.push(smth);
		}
	}
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
	return this.curr < this.arr.length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
	const nextEl = this.arr[this.curr];
	this.curr++;
	console.log(nextEl);

	return nextEl;
};

// testing the code
let i = new NestedIterator([[1, 1], 2, [1, 1]]);
let a = [];

while (i.hasNext()) {
	a.push(i.next());
}

console.log(a);
