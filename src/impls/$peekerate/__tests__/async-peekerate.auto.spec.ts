/**
 * @generated-from ./async-peekerate.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncPeekerate } from '@iter-tools/es';
import { asyncWrap } from '../../../test/async-helpers.js';

describe('asyncPeekerate', () => {
  it('decorates iterator with the current value in the iterable', async () => {
    const peekerator = await asyncPeekerate(asyncWrap([1, 2, 3]));
    const observed = [];

    while (!peekerator.done) {
      const { current, done, value } = peekerator;
      observed.push({ current, done, value });
      await peekerator.advance();
    }

    expect(observed).toEqual([
      {
        current: {
          done: false,
          value: 1,
        },
        done: false,
        value: 1,
      },
      {
        current: {
          done: false,
          value: 2,
        },
        done: false,
        value: 2,
      },
      {
        current: {
          done: false,
          value: 3,
        },
        done: false,
        value: 3,
      },
    ]);
  });
});
