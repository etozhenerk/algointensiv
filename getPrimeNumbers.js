/**
 * @param {number} number число до которого нужно найти простые числа
 * @returns {boolean} массив простых чисел
 */

const getPrimeNumbers = (number) => {
  const ans = [2];

  for (let i = 3; i < number; i++) {
    let isPrime = true;
    for (let j = 0; ans[j] <= Math.sqrt(i); j++) {
      if (i % ans[j] == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      ans.push(i);
    }
  }

  return ans;
};
