/**
 * @param {number} number число
 * @returns {number[][]} все перестановки
 */

const permutations = (number) => {
  const numbers = [];
  const ans = [];

  for (let i = 1; i < number + 1; i++) {
    numbers.push(i);
  }

  backtrack(numbers, 0, ans);

  return ans;
};

/**
 * @param {number[]} numbers массив чисел
 * @param {number} index индекс числа
 * @param {number[][]} перестановки
 * @returns {void}
 */

const backtrack = (numbers, index, ans) => {
  if (index === numbers.length) {
    ans.push(numbers.slice());
    return;
  }
  for (let i = index; i < numbers.length; i++) {
    [numbers[index], numbers[i]] = [numbers[i], numbers[index]];
    backtrack(numbers, index + 1, ans);
    [numbers[index], numbers[i]] = [numbers[i], numbers[index]];
  }
};

console.log(permutations(3));
