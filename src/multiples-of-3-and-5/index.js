import any from 'ramda/src/any.js';
import curry from 'ramda/src/curry.js';
import dec from 'ramda/src/dec.js';
import mathMod from 'ramda/src/mathMod.js';
import pipe from 'ramda/src/pipe.js';
import reduce from 'ramda/src/reduce.js';

import { positiveNumberOrThrow } from '../fp';

const range = curry((start, end) =>
  Array.from({ length: end - start + 1 }, (x, i) => i + start)
);

const sumMultiples = (...nmbrs) =>
  pipe(
    positiveNumberOrThrow,
    dec,
    range(0),
    reduce((a, c) => (any(x => mathMod(c, x) === 0, nmbrs) ? a + c : a), 0)
  );

/**
 * @param {number} bound - Maximum number (excluded) until which should be summed up to. Must be positive.
 * @returns {number} sum - sum of all multiples of 3 and 5.
 */
const sumMultiplesOfThreeAndFive = sumMultiples(3, 5);

export default sumMultiples;
export { sumMultiplesOfThreeAndFive };
