/**
 * @typedef {Object} Tree
 * @property {number} val значение
 * @property {Tree | null} left левое поддерево
 * @property {Tree | null} right правое поддерево
 */

/**
 * @param {Tree} tree дерево
 * @returns {number[]} массив значений
 */

const dfs = (tree) => {
  const stack = [tree.right, tree.left];
  const ans = [tree.val];

  while (stack.length) {
    const node = stack.pop();
    ans.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }

  return ans;
};
