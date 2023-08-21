/**
 * @param {number[]} numbers массив числе
 * @returns {number} максимальная сумма
 */

const maxSubarr = (numbers) => {
  let maxSum = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    numbers[i] = Math.max(0, numbers[i - 1]) + numbers[i];
    if (numbers[i] > maxSum) {
      maxSum = numbers[i];
    }
  }
  return maxSum;
};
