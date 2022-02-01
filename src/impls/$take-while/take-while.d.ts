/* @macrome
 * @generatedby /generate/generators/types/index.cjs
 * @generatedfrom ./$take-while.d.ts#1643820505056
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { Wrappable, IterableIterator } from '../../types/iterable';

declare function takeWhile<T>(
  predicate: (value: T, i: number) => boolean,
): (source: Wrappable<T>) => IterableIterator<T>;

declare function takeWhile<T>(
  predicate: (value: T, i: number) => boolean,
  source: Wrappable<T>,
): IterableIterator<T>;

export { takeWhile };
