/**
 * @param {number[]} arr массив чисел
 * @returns {number[]} отсортированный массив
 */

const insertionSort = (arr) => {
  const sortedArr = [...arr];
  for (let i = 1; i < sortedArr.length; i++) {
    let current = sortedArr[i];
    let j = i - 1;
    while (j > -1 && current < sortedArr[j]) {
      sortedArr[j + 1] = sortedArr[j];
      j--;
    }
    sortedArr[j + 1] = current;
  }

  return sortedArr;
};
