import append from 'ramda/src/append.js';
import filter from 'ramda/src/filter.js';
import gte from 'ramda/src/gte.js';
import pipe from 'ramda/src/pipe.js';
import sum from 'ramda/src/sum.js';
import takeLast from 'ramda/src/takeLast.js';

import { positiveNumberOrThrow } from '../fp';

const isEven = n => n % 2 === 0;
const filterEvens = filter(isEven);

const buildFibonacciArray = (limit, arr = [1]) => {
  const nextNumber = sum(takeLast(2, arr));
  if (gte(nextNumber, limit)) return arr;
  return buildFibonacciArray(limit, append(nextNumber, arr));
};

const evenFibonacciNumbers = pipe(
  positiveNumberOrThrow,
  buildFibonacciArray,
  filterEvens,
  sum
);

export default evenFibonacciNumbers;
