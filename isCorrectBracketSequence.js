/**
 * @param {string} sequence скобочная последовательность
 * @returns {boolean} определить правильная последовательность или нет
 */

const isCorrectBracketSequence = (sequence) => {
  const brackets = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack = [];

  for (let i = 0; i < sequence.length; i++) {
    if ([")", "]", "}"].indexOf(sequence[i]) > -1) {
      if (brackets[sequence[i]] !== stack.pop()) {
        return false;
      }
    } else {
      stack.push(sequence[i]);
    }
  }

  return stack.length === 0;
};
