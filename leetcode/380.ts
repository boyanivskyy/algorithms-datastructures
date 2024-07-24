class RandomizedSet {
	private map = new Map();
	private numbers = new Array();

	insert(val: number): boolean {
		if (this.map.has(val)) return false;

		this.map.set(val, this.numbers.length);
		this.numbers.push(val);

		return true;
	}

	remove(val: number): boolean {
		if (!this.map.has(val)) return false;

		if (this.numbers[this.numbers.length - 1] !== val) {
			const movedValue = this.numbers[this.numbers.length - 1];
			const removedIndex = this.map.get(val);
			this.numbers[removedIndex] = movedValue;
			this.map.set(movedValue, removedIndex);
		}

		this.numbers.pop();
		this.map.delete(val);

		return true;
	}

	getRandom(): number {
		return this.numbers[Math.floor(Math.random() * this.numbers.length)];
	}
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
