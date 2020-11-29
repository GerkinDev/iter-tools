/**
 * @generated-from ./$leading-window.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable.js';
import { CircularBuffer, ReadOnlyCircularBuffer } from '../../internal/circular-buffer.js';

import { validateWindowArgs } from '../$trailing-window/internal/validate-window-args.js';

export async function* asyncLeadingWindow(source, size, { filler, useFiller = true } = {}) {
  const buffer = new CircularBuffer(size);
  const bufferReadProxy = new ReadOnlyCircularBuffer(buffer);

  let len = 0;
  for await (const value of source) {
    buffer.push(value);
    if (buffer.isFull()) {
      yield bufferReadProxy;
    }
    len++;
  }

  if (useFiller) {
    for (let i = len; i < size; i++) {
      buffer.push(filler);
    }
  }

  if (len > 0 && len < size) yield bufferReadProxy;

  for (let i = 0; i < Math.min(size, len) - 1; i++) {
    buffer.shift();
    if (useFiller) {
      buffer.push(filler);
    }
    yield bufferReadProxy;
  }
}

export default /*#__PURE__*/ asyncIterableCurry(asyncLeadingWindow, {
  minArgs: 1,
  maxArgs: 2,
  optionalArgsAtEnd: true,
  validateArgs: validateWindowArgs('asyncLeadingWindow'),
});
