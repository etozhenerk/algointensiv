/**
 * @param {number[]} arr массив чисел
 * @returns {number[]} отсортированный массив
 */

const bubbleSort = (arr) => {
  const sortedArr = [...arr];

  for (let i = 0; i < sortedArr.length; i++) {
    const a = sortedArr[i];

    for (let j = i; j < sortedArr.length; j++) {
      const b = sortedArr[j];

      if (b < a) {
        sortedArr[i] = b;
        sortedArr[j] = a;
      }
    }
  }

  return sortedArr;
};
