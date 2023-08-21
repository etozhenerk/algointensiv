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

const bfs = (tree) => {
  if (tree) {
    const queue = [tree.left, tree.right];
    const ans = [tree.val];

    while (queue.length) {
      const node = queue.shift();
      if (node) {
        ans.push(node.val);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }

    return ans;
  }

  return [];
};
