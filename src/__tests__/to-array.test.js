/**
 * @generated-from ./to-array.test.template.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars */

import { $toArray, range } from './fns'
const $methodName = 'toArray'
describe($methodName, () => {
  it('works', () => {
    expect($toArray(range(3))).toEqual([0, 1, 2])
  })
})
