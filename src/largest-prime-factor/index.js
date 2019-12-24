import append from 'ramda/src/append.js';
import last from 'ramda/src/last.js';
import pipe from 'ramda/src/pipe.js';

import { positiveNumberOrThrow } from '../fp';

const getPrimeFactors = (n, divisor = 2, factors = []) =>
  n >= 2
    ? n % divisor === 0
      ? getPrimeFactors(n / divisor, divisor, append(divisor, factors))
      : getPrimeFactors(n, divisor + 1, factors)
    : factors;

const getLargestPrimeFactor = pipe(
  positiveNumberOrThrow('n'),
  getPrimeFactors,
  last
);

export { getLargestPrimeFactor };
