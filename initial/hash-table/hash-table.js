class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;

		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}

		return total;
	}

	set(key, val) {
		const idx = this._hash(key);

		if (!this.keyMap[idx]) {
			this.keyMap[idx] = [];
		}

		this.keyMap[idx].push([key, val]);
	}

	get(key) {
		const spot = this.keyMap[this._hash(key)];
		return (spot || []).find(([k]) => k === key);
	}

	keys() {
		const res = [];

		for (let i = 0; i < this.keyMap.length; i++) {
			const spot = this.keyMap[i];
			if (!Array.isArray(spot)) continue;

			for (let j = 0; j < spot.length; j++) {
				res.push(spot[j][0]);
			}
		}

		return res;
	}

	values() {
		const res = [];

		for (let i = 0; i < this.keyMap.length; i++) {
			const spot = this.keyMap[i];
			if (!Array.isArray(spot)) continue;

			for (let j = 0; j < spot.length; j++) {
				res.push(spot[j][1]);
			}
		}

		return res;
	}
}

const hashTable = new HashTable();
hashTable.set("hello", "world");
hashTable.set("hello", "world");
hashTable.set("hi", "there");
hashTable.set("how are", "you");
console.log(hashTable.keys());
console.log(hashTable.values());
