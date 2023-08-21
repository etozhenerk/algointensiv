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
    const queue = [];
    const ans = [tree.val];

    if (tree.left) {
      queue.push(tree.left);
    }

    if (tree.right) {
      queue.push(tree.right);
    }

    while (queue.length) {
      const node = queue.shift();
      ans.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return ans;
  }

  return [];
};
