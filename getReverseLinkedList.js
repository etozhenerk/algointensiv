/**
 * @typedef {Object} List
 * @property {number} val значение
 * @property {Tree | null} next правое поддерево
 */

/**
 * @param {List} list связный список
 * @returns {List} связный список в развернутом виде
 */

const getReverseLinkedList = (list) => {
  let head = list;

  if (head === null) {
    return;
  }

  let currentNode = head;
  let prevNode = null;
  let nextNode = null;

  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
    nextNode = null;
  }
  head = prevNode;
  return head;
};
