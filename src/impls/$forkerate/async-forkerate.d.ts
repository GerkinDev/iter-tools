/* @macrome
 * @generatedby /generate/generators/types/index.cjs
 * @generatedfrom ./$forkerate.d.ts#1643820505039
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import {
  AsyncWrappable,
  AsyncIteratorResult,
  AsyncNonIterableIterator,
} from '../../types/async-iterable';

export interface AsyncForkeratorIterator<T> {
  next(): AsyncIteratorResult<T>;
  return(): AsyncIteratorResult<T>;
  [Symbol.asyncIterator](): AsyncNonIterableIterator<T>;
}

interface AsyncForkeratorBase<T> {
  readonly index: number;

  /* eslint-disable no-use-before-define */
  advance(): Promise<AsyncForkerator<T>>;
  return(): Promise<AsyncForkerator<T>>;
  /* eslint-enaable no-use-before-define */
  fork(): AsyncForkeratorIterator<T>;
  asIterator(): AsyncForkeratorIterator<T>;
}

interface AsyncDoneForkerator<T> extends AsyncForkeratorBase<T> {
  readonly current: { done: true; value: undefined };
  readonly done: true;
  readonly value: undefined;
}

interface AsyncValueForkerator<T> extends AsyncForkeratorBase<T> {
  readonly current: { done: false; value: T };
  readonly done: false;
  readonly value: T;
}

export type AsyncForkerator<T> = AsyncDoneForkerator<T> | AsyncValueForkerator<T>;

declare function asyncForkerate<T>(source: AsyncWrappable<T>): Promise<AsyncForkerator<T>>;

export { asyncForkerate };
