class BinaryTreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinaryTree {
	constructor(root = null) {
		this.root = root;
	}

	minDepth() {
		const dfs = (node) => {
			if (!node) return 0;
			if (!node.left && !node.right) return 1;
			if (!node.left) return dfs(node.right) + 1;
			if (!node.right) return dfs(node.left) + 1;
			return Math.min(dfs(node.left), dfs(node.right)) + 1;
		};
		return dfs(this.root);
	}

	maxDepth() {
		const dfs = (node) => {
			if (!node) return 0;
			return Math.max(dfs(node.left), dfs(node.right)) + 1;
		};
		return dfs(this.root);
	}

	maxSum() {
		let maxSum = -Infinity;

		const dfs = (node) => {
			if (!node) return 0;
			const left = Math.max(0, dfs(node.left));
			const right = Math.max(0, dfs(node.right));
			maxSum = Math.max(maxSum, node.val + left + right);
			return Math.max(left, right) + node.val;
		};

		dfs(this.root);
		return maxSum;
	}

	nextLarger(lowerBound) {
		let result = null;

		const dfs = (node) => {
			if (!node) return;
			if (node.val > lowerBound) {
				if (result === null) result = node.val;
				else result = Math.min(result, node.val);
			}
			dfs(node.left);
			dfs(node.right);
		};
		dfs(this.root);
		return result;
	}
}

module.exports = { BinaryTree, BinaryTreeNode };
