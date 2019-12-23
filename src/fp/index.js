import complement from 'ramda/src/complement.js';
import is from 'ramda/src/is.js';
import lt from 'ramda/src/lt.js';
import tap from 'ramda/src/tap.js';

const trace = msg => tap(x => console.log(msg, x));

const isNumber = is(Number);
const isNotNumber = complement(isNumber);

const positiveNumberOrThrow = x => {
  if (isNotNumber(x) || lt(x, 0)) {
    throw new Error('bound must be a positive number');
  }
  return x;
};

export { positiveNumberOrThrow, trace };
