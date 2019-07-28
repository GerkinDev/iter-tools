import assert from 'static-type-assert';

import { $IterableIterator } from  '../internal/$iterable';
import { $execute } from '..';

declare var Ø: never;

assert<$IterableIterator<123>>($execute(Ø as () => 123));

assert<$IterableIterator<123>>($execute(Ø as <T>(x: T, ...args: Array<unknown>) => T, Ø as 123, Ø as 456));

assert<$IterableIterator<[]>>($execute((...args) => args));

assert<$IterableIterator<[0, 1, 2]>>(
  $execute((...args) => args, Ø as 0, Ø as 1, Ø as 2),
);