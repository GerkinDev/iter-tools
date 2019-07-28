import { $InputIterable, $IterableIterator, $MaybePromise } from './internal/$iterable';

declare function $groupBy(
  key: null | undefined,
): <T = any>(iterable: $InputIterable<T>) => $IterableIterator<[T, $IterableIterator<T>]>;

declare function $groupBy<K, T = any>(
  key: (item: T) => $MaybePromise<K>,
): (iterable: $InputIterable<T>) => $IterableIterator<[K, $IterableIterator<T>]>;

declare function $groupBy<T = any>(
  key: null | undefined,
  iterable: $InputIterable<T>,
): $IterableIterator<[T, $IterableIterator<T>]>;

declare function $groupBy<K, T = any>(
  key: (item: T) => $MaybePromise<K>,
  iterable: $InputIterable<T>,
): $IterableIterator<[K, $IterableIterator<T>]>;

export default $groupBy;