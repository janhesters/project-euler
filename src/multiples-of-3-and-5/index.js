import any from 'ramda/src/any.js';
import complement from 'ramda/src/complement.js';
import is from 'ramda/src/is.js';
import lt from 'ramda/src/lt.js';
import mathMod from 'ramda/src/mathMod.js';
import reduce from 'ramda/src/reduce.js';

const isNumber = is(Number);
const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (x, i) => i + start);

const sumMultiples = (...nmbrs) => bound => {
  if (complement(isNumber)(bound) || lt(bound, 0)) {
    throw new Error('bound must be a positive number');
  }
  return reduce(
    (a, c) => (any(x => mathMod(c, x) === 0, nmbrs) ? a + c : a),
    0,
    range(0, bound - 1)
  );
};

/**
 * @param {number} bound - Maximum number (excluded) until which should be summed up to. Must be positive.
 * @returns {number} sum - sum of all multiples of 3 and 5.
 */
const sumMultiplesOfThreeAndFive = sumMultiples(3, 5);

export default sumMultiples;
export { sumMultiplesOfThreeAndFive };
