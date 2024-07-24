// function hash(key, arrayLen) {
// 	let total = 0;
// 	for (let i = 0; i < key.length; i++) {
// 		let char = key[i];
// 		let val = char.charCodeAt(0) - 96;
// 		total = (total + val) % arrayLen;
// 	}
// 	return total;
// }

// NOTE: Hash with prime number
function hash(key, arrayLen) {
	let total = 0;
	let WEIRD_PRIME = 31;
	for (let i = 0; i < Math.min(key.length, 100); i++) {
		let char = key[i];
		let val = char.charCodeAt(0) - 96;
		total = (total * WEIRD_PRIME + val) % arrayLen;
	}

	return total;
}
