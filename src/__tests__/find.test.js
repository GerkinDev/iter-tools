/**
 * @generated-from ./$find.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars */

import { find, asyncFind, range } from '../..'
describe('find', () => {
  it('returns found item', () => {
    const found = find(item => item === 5, [1, 2, 3, 4, 5, 6])
    expect(found).toBe(5)
  })
  it('returns undefined if no item found', () => {
    const found = find(item => item === 100, [1, 2, 3, 4, 5, 6])
    expect(found).toBe(undefined)
  })
  it('returns found item from iterable', () => {
    const found = find(item => item === 5, range({
      start: 1,
      end: 7
    }))
    expect(found).toBe(5)
  })
  it('returns undefined if no item found from iterable', () => {
    const found = find(item => item === 100, range({
      start: 1,
      end: 7
    }))
    expect(found).toBe(undefined)
  })
  it('returns filtered iterable (curried version)', () => {
    const findFive = find(item => item === 5)
    expect(findFive(range({
      start: 1,
      end: 7
    }))).toBe(5)
  })
  it('returns undefined if passed null', () => {
    const found = find(item => item, null)
    expect(found).toBe(undefined)
  })
})
