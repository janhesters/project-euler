import { describe, Try } from 'riteway';

import { getLargestPrimeFactor } from './index.js';

describe('getLargestPrimeFactor()', async assert => {
  assert({
    given: 'negative number',
    should: 'throw',
    actual: Try(getLargestPrimeFactor, -10).message,
    expected: 'n must be a positive number',
  });

  assert({
    given: 'a string as number',
    should: 'throw',
    actual: Try(getLargestPrimeFactor, '10').message,
    expected: 'n must be a positive number',
  });

  assert({
    given: 'undefined as number',
    should: 'throw',
    actual: Try(getLargestPrimeFactor, undefined).message,
    expected: 'n must be a positive number',
  });

  assert({
    given: 'a boolean as number',
    should: 'throw',
    actual: Try(getLargestPrimeFactor, true).message,
    expected: 'n must be a positive number',
  });

  assert({
    given: '2',
    should: 'return 2',
    actual: getLargestPrimeFactor(2),
    expected: 2,
  });

  assert({
    given: '1092',
    should: 'return 13',
    actual: getLargestPrimeFactor(1092),
    expected: 13,
  });

  assert({
    given: '13195',
    should: 'return 29',
    actual: getLargestPrimeFactor(13195),
    expected: 29,
  });

  assert({
    given: '600851475143',
    should: 'return 6857',
    actual: getLargestPrimeFactor(600851475143),
    expected: 6857,
  });
});
