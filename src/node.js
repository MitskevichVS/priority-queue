class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (node === null) {
			return;
		} else if (this.left === null) {
			this.left = node;
			this.left.parent = this;
		} else if (this.right === null) {
			this.right = node;
			this.right.parent = this;
		}
	}

	removeChild(node) {
		if (node === null) {
			return;
		} else if (this.left === node) {
			this.left.parent = null;
			this.left = null;
		} else if (this.right === node) {
			this.right.parent = null;
			this.right = null;
		} else throw "Error";
	}

	remove() {
		if (this.parent === null) {
			return;
		} else {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent === null) {
			return;
		}
	}
}

module.exports = Node;
