/* @macrome
 * @generatedby /generate/generators/types/index.cjs
 * @generatedfrom ./$split-on-seq.d.ts#1643820505050
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { Wrappable, IterableIterator } from '../../types/iterable';

declare function splitOnSeq(
  same: (a: any, b: any) => boolean,
  separatorSeq: Wrappable<any>,
): <T>(source: Wrappable<T>) => IterableIterator<IterableIterator<T>>;

declare function splitOnSeq<T>(
  same: (a: any, b: any) => boolean,
  separatorSeq: Wrappable<any>,
  source: Wrappable<T>,
): IterableIterator<IterableIterator<T>>;

declare function splitOnSeq<T>(
  separatorSeq: Wrappable<any>,
  source: Wrappable<T>,
): IterableIterator<IterableIterator<T>>;

export { splitOnSeq };
