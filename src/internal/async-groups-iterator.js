/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$groups-iterator.js#1643820505083
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncPartsIterator, AsyncPartIterator } from './async-parts-iterator.js';
import { split } from './symbols.js';

export class AsyncGroupsIterator extends AsyncPartsIterator {
  async next() {
    if (!this.initialized) await this.init();
    const { spliterator } = this;

    if (this.currentPart !== null) {
      if (spliterator.value !== split || spliterator.current === this.splitStep) {
        // this part was not consumed
        this.currentPart.inactive = true;

        while (!spliterator.done && spliterator.value !== split) {
          await spliterator.advance();
        }
      }
    }

    if (spliterator.done) {
      return { value: undefined, done: true };
    }

    // consume the split
    await spliterator.advance();

    if (spliterator.done || spliterator.value === split) {
      throw new Error('Unexpected empty group');
    }

    const key = spliterator.value;

    await spliterator.advance();

    // The spliterator is now at the first step of the next part.
    // We save the step because an empty part would be represented by
    // [split, split] and we need to know if we've advanced from the
    // first split to the second, thus consuming the empty part.
    this.splitStep = spliterator.current;

    this.currentPart = new AsyncPartIterator(this);
    return { value: [key, this.currentPart], done: false };
  }
}
