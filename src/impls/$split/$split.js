import { $map } from '../$map/$map.js';

function* iterableOf(value) {
  yield value;
}

export function $split(source) {
  return $map(source, (value) => iterableOf(value));
}

export default $split;
