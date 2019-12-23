import { describe, Try } from 'riteway';

import { sumMultiplesOfThreeAndFive } from './index.js';

describe('sumMultiplesOfThreeAndFive()', async assert => {
  assert({
    given: 'negative bound',
    should: 'throw',
    actual: Try(sumMultiplesOfThreeAndFive, -10).message,
    expected: 'bound must be a positive number',
  });

  assert({
    given: 'a string as bound',
    should: 'throw',
    actual: Try(sumMultiplesOfThreeAndFive, '10').message,
    expected: 'bound must be a positive number',
  });

  assert({
    given: 'undefined as bound',
    should: 'throw',
    actual: Try(sumMultiplesOfThreeAndFive, undefined).message,
    expected: 'bound must be a positive number',
  });

  assert({
    given: 'a boolean as bound',
    should: 'throw',
    actual: Try(sumMultiplesOfThreeAndFive, true).message,
    expected: 'bound must be a positive number',
  });

  assert({
    given: 'bound of 0',
    should: 'return 0',
    actual: sumMultiplesOfThreeAndFive(0),
    expected: 0,
  });

  assert({
    given: 'bound of 10',
    should: 'return 23',
    actual: sumMultiplesOfThreeAndFive(10),
    expected: 23,
  });

  assert({
    given: 'bound of 15',
    should: 'return 45',
    actual: sumMultiplesOfThreeAndFive(16),
    expected: 60,
  });

  assert({
    given: 'bound of 1000',
    should: 'return 233168',
    actual: sumMultiplesOfThreeAndFive(1000),
    expected: 233168,
  });
});
