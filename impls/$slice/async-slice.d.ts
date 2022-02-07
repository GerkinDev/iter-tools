import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';
declare function asyncSlice<T>(opts: {
  readonly start?: number;
  readonly end?: number;
  readonly step?: number;
}): (source: AsyncWrappable<T>) => AsyncIterableIterator<T>;
declare function asyncSlice<T>(start?: number, end?: number, step?: number): (source: AsyncWrappable<T>) => AsyncIterableIterator<T>;
declare function asyncSlice<T>(opts: {
  readonly start?: number;
  readonly end?: number;
  readonly step?: number;
}, source: AsyncWrappable<T>): AsyncIterableIterator<T>;
declare function asyncSlice<T>(start: number, source: AsyncWrappable<T>): AsyncIterableIterator<T>;
declare function asyncSlice<T>(start: number, end: number, source: AsyncWrappable<T>): AsyncIterableIterator<T>;
declare function asyncSlice<T>(start: number, end: number, step: number, source: AsyncWrappable<T>): AsyncIterableIterator<T>;
export { asyncSlice };