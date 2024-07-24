const MyStack = function () {
	this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
	this.stack.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
	return this.stack.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
	return this.stack[this.stack.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
	return !this.stack.length;
};

const stack = new MyStack();
stack.push(2);
stack.push(2);
console.log("top", stack.top());
console.log("pop", stack.pop());
console.log("empty", stack.empty());
