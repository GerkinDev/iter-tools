/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$join.js#1643820505045
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import {
  asyncWrapWithIterableIterator,
  asyncEnsureIterable,
} from '../../internal/async-iterable.js';
import { __asyncJoinWithSeq } from '../$join-with-seq/async-join-with-seq.js';

const emptySeq = [];

export function __asyncJoin(source) {
  return __asyncJoinWithSeq(asyncEnsureIterable(source), emptySeq);
}

export const asyncJoin = /*#__PURE__*/ asyncWrapWithIterableIterator(__asyncJoin);
