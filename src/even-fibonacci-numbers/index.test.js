import { describe, Try } from 'riteway';

import evenFibonacciNumbers from './index.js';

describe('evenFibonacciNumbers()', async assert => {
  assert({
    given: 'negative bound',
    should: 'throw',
    actual: Try(evenFibonacciNumbers, -10).message,
    expected: 'bound must be a positive number',
  });

  assert({
    given: 'a string as bound',
    should: 'throw',
    actual: Try(evenFibonacciNumbers, '10').message,
    expected: 'bound must be a positive number',
  });

  assert({
    given: 'undefined as bound',
    should: 'throw',
    actual: Try(evenFibonacciNumbers, undefined).message,
    expected: 'bound must be a positive number',
  });

  assert({
    given: 'a boolean as bound',
    should: 'throw',
    actual: Try(evenFibonacciNumbers, true).message,
    expected: 'bound must be a positive number',
  });

  assert({
    given: 'a bound of 8',
    should: 'return 2',
    actual: evenFibonacciNumbers(8),
    expected: 2,
  });

  assert({
    given: 'a bound of 10',
    should: 'return 10',
    actual: evenFibonacciNumbers(10),
    expected: 10,
  });

  assert({
    given: 'a bound of 35',
    should: 'return 44',
    actual: evenFibonacciNumbers(35),
    expected: 44,
  });

  assert({
    given: 'a bound of 4,000,000',
    should: 'return 4613732',
    actual: evenFibonacciNumbers(4000000),
    expected: 4613732,
  });
});
