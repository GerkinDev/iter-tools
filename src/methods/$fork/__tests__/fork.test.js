/**
 * @generated-from ./$fork.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { fork, map } from '../../..';
import { wrap, unwrap } from '../../../test/helpers';

describe('fork', () => {
  const makeIterable = function* _makeIterable() {
    yield 1;
    yield 2;
    yield 3;
  };

  it('creates an iterable of iterables with the same values as its source', () => {
    const [a, b, c] = fork(makeIterable());
    const originalIter = unwrap(makeIterable());

    expect(unwrap(map(iter => unwrap(iter), [a, b, c]))).toEqual(Array(3).fill(originalIter));
  });

  it('can take a number as first argument', () => {
    const gen = fork(3, makeIterable());
    const originalIter = unwrap(makeIterable());
    expect(unwrap(map(iter => unwrap(iter), gen))).toEqual(Array(3).fill(originalIter));
  });

  it('can be curried', () => {
    const gen = fork(3)(makeIterable());
    const originalIter = unwrap(makeIterable());
    expect(unwrap(map(iter => unwrap(iter), gen))).toEqual(Array(3).fill(originalIter));
  });

  it('does not matter which order the fork iterables are consumed in', () => {
    const [a, b, c] = fork(makeIterable());
    const originalIter = unwrap(makeIterable());
    expect(unwrap(map(iter => unwrap(iter), [c, b, a]))).toEqual(Array(3).fill(originalIter));
  });

  describe('source iterable cleanup', () => {
    /* eslint-disable jest/expect-expect */
    it('happens when a fork is exhausted', () => {
      const iterableIterator = fork(wrap([1, 2, 3]))[Symbol.iterator]();
      unwrap(iterableIterator.next().value);
    });

    it('happens when fork is exhausted and then all forks are exhausted', () => {
      const [a, b] = fork(wrap([1, 2, 3]));
      a[Symbol.iterator]().next();
      a.return();
      b[Symbol.iterator]().next();
      b.return();
    });

    it('happens when all forks are exhausted then fork is exhausted', () => {
      const iterableIterator = fork(wrap([1, 2, 3]))[Symbol.iterator]();

      const a = iterableIterator.next().value;
      a[Symbol.iterator]().next();
      a.return();

      const b = iterableIterator.next().value;
      b[Symbol.iterator]().next();
      b.return();

      iterableIterator.return();
    });

    it('happens even when a fork is closed without being used', () => {
      const [a, b] = fork(wrap([1, 2, 3]));
      a.return();
      b.return();
    });

    /* eslint-enable jest/expect-expect */
  });
});
