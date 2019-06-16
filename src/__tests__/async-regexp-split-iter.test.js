/**
 * @generated-from ./$regexp-split-iter.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars */

import { asyncRegexpSplitIter, asyncToArray } from '../..'
describe('asyncRegexpSplitIter', () => {
  it('should split 1', async () => {
    const re = /\s+/g
    const iter = asyncRegexpSplitIter(re, ['aa', 'b', 'cc'])
    expect((await asyncToArray(iter))).toEqual(['aabcc'])
  })
  it('should split 2', async () => {
    const re = /\s+/g
    const iter = asyncRegexpSplitIter(re, ['aa', ' b ', 'cc'])
    expect((await asyncToArray(iter))).toEqual(['aa', 'b', 'cc'])
  })
  it('should split 3', async () => {
    const re = /\s+/g
    const iter = asyncRegexpSplitIter(re, [' aa', ' b ', '    cc '])
    expect((await asyncToArray(iter))).toEqual(['', 'aa', 'b', 'cc', ''])
  })
  it('should split 4', async () => {
    const re = /\s+/g
    const iter = asyncRegexpSplitIter(re, ['aa     ', '', ' b ', '    cc '])
    expect((await asyncToArray(iter))).toEqual(['aa', 'b', 'cc', ''])
  })
  it('should split 5', async () => {
    const re = /\s+/g
    const iter = asyncRegexpSplitIter(re, ['aa     ', ' ', '', ' ', 'b ', '    cc '])
    expect((await asyncToArray(iter))).toEqual(['aa', 'b', 'cc', ''])
  })
  it('should split 6', async () => {
    const re = /\s+/g
    const iter = asyncRegexpSplitIter(re, ['', ' aa', ' b ', '    cc ', ''])
    expect((await asyncToArray(iter))).toEqual(['', 'aa', 'b', 'cc', ''])
  })
  it('should split 7', async () => {
    const re = /\s+/g
    const iter = asyncRegexpSplitIter(re, [' ', ' aa', ' b ', '    cc ', ' '])
    expect((await asyncToArray(iter))).toEqual(['', 'aa', 'b', 'cc', ''])
  })
  it('can be curried', async () => {
    const re = /\s+/g
    const splitter = asyncRegexpSplitIter(re)
    const iter1 = splitter(['aa', ' b ', 'cc'])
    expect((await asyncToArray(iter1))).toEqual(['aa', 'b', 'cc'])
  })
  it('should split (nothing to split)', async () => {
    const re = /\s+/g
    const iter = asyncRegexpSplitIter(re, ['absd'])
    expect((await asyncToArray(iter))).toEqual(['absd'])
  })
  it('should split (no iterables)', async () => {
    const re = /\s+/g
    const iter = asyncRegexpSplitIter(re, null)
    expect((await asyncToArray(iter))).toEqual([])
  })
  it('should split with empty string', async () => {
    const iter = asyncRegexpSplitIter('', ['ab', 'c'])
    expect((await asyncToArray(iter))).toEqual(['a', 'b', 'c'])
  })
})
