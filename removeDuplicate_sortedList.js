var deleteDuplicates = function(head) {
	if(!head) {
		return null;
	}

	let current = head;

	while(current) {
		if(current.next && current.val === current.next.val) {
			current.next = current.next.next;
		} else {
			current = current.next;
		}
	}

	return head;
};