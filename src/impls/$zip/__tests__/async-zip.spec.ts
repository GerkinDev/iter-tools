/* @macrome
 * @generatedby /generate/generators/types/index.cjs
 * @generatedfrom ./$zip.spec.ts#1643820505061
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import assert from 'static-type-assert';

import { AsyncIterableIterator } from '../../../types/async-iterable';
import { asyncZip } from 'iter-tools-es';

declare const Ø: never;

assert<AsyncIterableIterator<[number, string]>>(asyncZip(Ø as [0, 1, 2], Ø as ['a', 'b', 'c']));
assert<AsyncIterableIterator<[number, string, boolean]>>(
  asyncZip(Ø as [0, 1, 2], Ø as ['a', 'b', 'c'], Ø as [true, false, true]),
);
