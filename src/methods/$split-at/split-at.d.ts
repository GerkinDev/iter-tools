/**
 * @generated-from ./$split-at.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { GeneratorIterator as SyncGeneratorIterator } from '../../internal/iterable';
import { InputIterable, GeneratorIterator } from '../../internal/iterable';
declare function splitAt(
  position: number,
): <T = any>(iterable: InputIterable<T>) => SyncGeneratorIterator<GeneratorIterator<T>>;
declare function splitAt<T = any>(
  position: number,
  iterable: InputIterable<T>,
): SyncGeneratorIterator<GeneratorIterator<T>>;
export default splitAt;