/**
 * @param {number[]} arr массив чисел
 * @returns {number[]} отсортированный массив
 */

const bubbleSort = (arr) => {
  const sortedArr = [...arr];

  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = i; j < sortedArr.length; j++) {
      if (sortedArr[j] < sortedArr[i]) {
        const tmp = sortedArr[i];
        sortedArr[i] = sortedArr[j];
        sortedArr[j] = tmp;
      }
    }
  }
  return sortedArr;
};
