/* @macrome
 * @generatedby /generate/generators/types/index.cjs
 * @generatedfrom ./$starts-with-seq.d.ts#1643820505053
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncWrappable } from '../../types/async-iterable';

declare function asyncStartsWithSeq(
  same: (a: any, b: any) => boolean,
  seq: AsyncWrappable<any>,
): (iterable: AsyncWrappable<any>) => Promise<boolean>;

declare function asyncStartsWithSeq(
  same: (a: any, b: any) => boolean,
  seq: AsyncWrappable<any>,
  iterable: AsyncWrappable<any>,
): Promise<boolean>;

declare function asyncStartsWithSeq(
  seq: AsyncWrappable<any>,
  iterable: AsyncWrappable<any>,
): Promise<boolean>;

export { asyncStartsWithSeq };
