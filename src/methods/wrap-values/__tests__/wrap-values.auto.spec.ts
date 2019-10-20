/**
 * @generated-from ./wrap-values.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { wrapValues } from '../../..';
describe('wrapValues', () => {
  it('works with Map', () => {
    const map = new Map([['foo', 'bar'], ['fox', 'far']]);
    expect(Array.from(wrapValues(map))).toEqual(['bar', 'far']);
  });
  it('works with null', () => {
    const i = wrapValues(null);
    expect(Array.from(i)).toEqual([]);
  });
});
