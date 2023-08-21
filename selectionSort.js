/**
 * @param {number[]} arr массив чисел
 * @returns {number[]} отсортированный массив
 */

const selectionSort = (arr) => {
  const sortedArr = [...arr];

  for (let i = 0; i < sortedArr.length; i++) {
    let min = i;
    for (let j = i + 1; j < sortedArr.length; j++) {
      if (sortedArr[j] < sortedArr[min]) {
        min = j;
      }
    }

    if (min != i) {
      let tmp = sortedArr[i];
      sortedArr[i] = sortedArr[min];
      sortedArr[min] = tmp;
    }
  }

  return sortedArr;
};
