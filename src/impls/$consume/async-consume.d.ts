/* @macrome
 * @generatedby /generate/generators/types/index.cjs
 * @generatedfrom ./$consume.d.ts#1643820505031
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncWrappable } from '../../types/async-iterable';

declare function asyncConsume<T>(iterable: AsyncWrappable<T>): Promise<void>;

export { asyncConsume };
