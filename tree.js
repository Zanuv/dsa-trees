class TreeNode {
	constructor(val, children = []) {
		this.val = val;
		this.children = children;
	}
}

class Tree {
	constructor(root = null) {
		this.root = root;
	}

	sumValues() {
		let total = 0;

		const dfs = (node) => {
			if (!node) return;
			total += node.val;
			for (let child of node.children) {
				dfs(child);
			}
		};

		dfs(this.root);
		return total;
	}

	countEvens() {
		let count = 0;

		const dfs = (node) => {
			if (!node) return;
			if (node.val % 2 === 0) {
				count++;
			}
			for (let child of node.children) {
				dfs(child);
			}
		};

		dfs(this.root);
		return count;
	}

	numGreater(lowerBound) {
		let count = 0;

		const dfs = (node) => {
			if (!node) return;
			if (node.val > lowerBound) {
				count++;
			}
			for (let child of node.children) {
				dfs(child);
			}
		};

		dfs(this.root);
		return count;
	}
}

module.exports = { Tree, TreeNode };
