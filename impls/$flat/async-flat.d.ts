import { AsyncWrappable, AsyncLoopable, AsyncIterableIterator } from '../../types/async-iterable';
type AsyncFlattened<T> = T extends Array<infer U> ? U : T extends ReadonlyArray<infer U> ? U : T extends AsyncLoopable<infer U> ? U : T;
declare function asyncFlat<U>(depth: 0, source: U): AsyncIterableIterator<AsyncFlattened<U>>;
declare function asyncFlat<U>(depth: 1, source: U): AsyncIterableIterator<AsyncFlattened<AsyncFlattened<U>>>;
declare function asyncFlat<U>(depth: 2, source: U): AsyncIterableIterator<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>;
declare function asyncFlat<U>(depth: 3, source: U): AsyncIterableIterator<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>;
declare function asyncFlat<U>(depth: 4, source: U): AsyncIterableIterator<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>>;
declare function asyncFlat<U>(depth: 5, source: U): AsyncIterableIterator<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>>>;
declare function asyncFlat<U>(depth: 6, source: U): AsyncIterableIterator<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>>>>;
declare function asyncFlat<U>(depth: 7, source: U): AsyncIterableIterator<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>>>>>;
declare function asyncFlat(depth: 0): <U>(source: U) => AsyncIterableIterator<AsyncFlattened<U>>;
declare function asyncFlat(depth: 1): <U>(source: U) => AsyncIterableIterator<AsyncFlattened<AsyncFlattened<U>>>;
declare function asyncFlat(depth: 2): <U>(source: U) => AsyncIterableIterator<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>;
declare function asyncFlat(depth: 3): <U>(source: U) => AsyncIterableIterator<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>;
declare function asyncFlat(depth: 4): <U>(source: U) => AsyncIterableIterator<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>>;
declare function asyncFlat(depth: 5): <U>(source: U) => AsyncIterableIterator<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>>>;
declare function asyncFlat(depth: 6): <U>(source: U) => AsyncIterableIterator<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>>>>;
declare function asyncFlat(depth: 7): <U>(source: U) => AsyncIterableIterator<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>>>>>;
declare function asyncFlat(shouldFlat: (value: any) => boolean | Promise<boolean>, depth: number, iter: AsyncWrappable<any>): AsyncIterableIterator<any>;
declare function asyncFlat(options: {
  shouldFlat: (value: any) => boolean | Promise<boolean>;
  depth?: number;
}, iter: AsyncWrappable<any>): AsyncIterableIterator<any>;
declare function asyncFlat(source: AsyncWrappable<any>): AsyncIterableIterator<any>;
declare function asyncFlat(depth: number, source: AsyncWrappable<any>): AsyncIterableIterator<any>;
declare function asyncFlat(depth?: number): (source: AsyncWrappable<any>) => AsyncIterableIterator<any>;
export { asyncFlat };