/* @macrome
 * @generatedby /generate/generators/types/index.cjs
 * @generatedfrom ./$wrap.d.ts#1643820505060
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { Wrappable, IterableIterator } from '../../types/iterable';

declare function wrap<T>(source: Wrappable<T>): IterableIterator<T>;

export { wrap };
