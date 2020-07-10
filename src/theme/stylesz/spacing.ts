/**
 * The available spacing.
 *
 * 0 = none    - nothing. only here to bust out of a zero-based array.
 * 1 = tiny    - elements contextually close to each other
 * 2 = smaller - for groups of closely related items or perhaps borders
 * 3 = small   - ?
 * 4 = medium  - ?
 * 5 = medium+ - ?
 * 6 = large   - between groups of content that aren't related?
 * 7 = huge    - ?
 * 8 = massive - an uncomfortable amount of whitespace
 */

export const spacing = {
  '0px': 0,
  '4px': 4,
  '8px': 8,
  '12px': 12,
  '16px': 16,
  '24px': 24,
  '32px': 32,
  '48px': 48,
  '64px': 64,
};

export type Spacing = keyof typeof spacing;
