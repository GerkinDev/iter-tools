/**
 * @generated-from ./$find.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncSourceIterable } from '../../types/async-iterable';

declare function asyncFind<T, S extends T>(
  predicate: (item: T, i: number) => item is S,
): (iterable: AsyncSourceIterable<T>) => Promise<S | undefined>;

declare function asyncFind<T>(
  predicate: (item: T, i: number) => boolean | Promise<boolean>,
): (iterable: AsyncSourceIterable<T>) => Promise<T | undefined>;

declare function asyncFind<T, S extends T>(
  predicate: (item: T, i: number) => item is S,
  iterable: AsyncSourceIterable<T>,
): Promise<S | undefined>;

declare function asyncFind<T>(
  predicate: (item: T, i: number) => boolean | Promise<boolean>,
  iterable: AsyncSourceIterable<T>,
): Promise<T | undefined>;

export default asyncFind;
