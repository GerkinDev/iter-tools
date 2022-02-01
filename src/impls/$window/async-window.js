/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$window.js#1643820505059
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncIterableCurry } from '../../internal/async-iterable.js';
import { CircularBuffer, ReadOnlyCircularBuffer } from '../../internal/circular-buffer.js';

export async function* __asyncWindow(source, size) {
  const buffer = new CircularBuffer(size);
  const bufferReadProxy = new ReadOnlyCircularBuffer(buffer);

  for await (const value of source) {
    buffer.push(value);
    if (buffer.isFull()) {
      yield bufferReadProxy;
    }
  }
}

export const asyncWindow = /*#__PURE__*/ asyncIterableCurry(__asyncWindow, {
  validateArgs(args) {
    if (typeof args[1] !== 'number') {
      throw new Error(`${'asyncWindow'} must be passed a numeric size`);
    }
  },
});
