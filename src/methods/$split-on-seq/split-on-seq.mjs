/**
 * @generated-from ./$split-on-seq.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry, ensureIterable } from '../../internal/iterable';
import { splitOnAnySeq } from '../$split-on-any-seq/split-on-any-seq';

export function splitOnSeq(source, separatorSeq) {
  return splitOnAnySeq(source, [separatorSeq]);
}

export default iterableCurry(splitOnSeq, {
  validateArgs(args) {
    args[0] = ensureIterable(args[0]);
  },
});