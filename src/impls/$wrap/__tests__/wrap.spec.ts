/* @macrome
 * @generatedby /generate/generators/types/index.cjs
 * @generatedfrom ./$wrap.spec.ts#1643820505060
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import assert from 'static-type-assert';

import { IterableIterator } from '../../../types/iterable';
import { wrap } from 'iter-tools-es';

declare const Ø: never;

assert<IterableIterator<1 | 2 | 3>>(wrap(Ø as [1, 2, 3]));
