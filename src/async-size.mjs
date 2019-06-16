/**
 * @generated-from ./$size.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncEnsureIterable } from './internal/async-iterable'
const TypedArrayProto = Object.getPrototypeOf(Int8Array)

async function asyncSize (iterable) {
  const iter = asyncEnsureIterable(iterable)
  if (Array.isArray(iter)) return iter.length
  if (iter instanceof Map || iter instanceof Set) return iter.size
  if (Object.getPrototypeOf(iter) === TypedArrayProto) return iter.length
  let size = 0
  /* eslint-disable no-unused-vars */

  for await (const _ of iter) {
    /* eslint-enable no-unused-vars */
    size++
  }

  return size
}

export default asyncSize
