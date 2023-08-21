/**
 * @param {number[]} arr отсортированный массив
 * @param {number} val число, которое можно найти
 * @returns {number | undefined} индекс числа или undefined
 */

const binSearch = (arr, value) => {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    let m = Math.floor((l + r) / 2);

    if (arr[m] >= value) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  if (arr[l] === value) {
    return l;
  }
};

console.log(binSearch([0, 100, 200, 300, 400, 500], 500));
