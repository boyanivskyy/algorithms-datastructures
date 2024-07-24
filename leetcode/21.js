function mergeTwoLists(list1, list2) {
	if (!list1) return list2;
	if (!list2) return list1;

	if (list2.val > list1.val) {
		list1.next = mergeTwoLists(list1.next, list2);
		return list1;
	} else {
		list2.next = mergeTwoLists(list1, list2.next);
		return list2;
	}
}

const l1 = {
	val: 1,
	next: {
		val: 3,
		next: null,
	},
};
const l2 = {
	val: 2,
	next: null,
};

console.log(mergeTwoLists(l1, l2));
