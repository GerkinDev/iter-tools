/* @macrome
 * @generatedby /generate/generators/types/index.cjs
 * @generatedfrom ./$take-sorted.d.ts#1643820505055
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { Wrappable, IterableIterator } from '../../types/iterable';

declare function takeSorted<T>(iterable: Wrappable<T>): IterableIterator<T>;

declare function takeSorted<T>(n: number): (source: Wrappable<T>) => IterableIterator<T>;

declare function takeSorted<T>(
  n: number,
  compare: (a: T, b: T) => number,
): (source: Wrappable<T>) => IterableIterator<T>;

declare function takeSorted<T>(
  compare: (a: T, b: T) => number,
): (source: Wrappable<T>) => IterableIterator<T>;

declare function takeSorted<T>(n: number, source: Wrappable<T>): IterableIterator<T>;

declare function takeSorted<T>(
  n: number,
  compare: (a: T, b: T) => number,
  source: Wrappable<T>,
): IterableIterator<T>;

declare function takeSorted<T>(
  compare: (a: T, b: T) => number,
  source: Wrappable<T>,
): IterableIterator<T>;

export { takeSorted };
