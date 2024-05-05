/**
 * Unlike arrays, where the source is the index, onjects don't have indexes.
 * So we need to define the source
 * The structure is
 * source: target = defaultValue
 */
function data() {
  return { a: 1, b: 2, c: 3 };
}

const { a: first = 1, b: second = 2, c: third = 3 } = data();

/** Assignment
 * Like arrays, objects destructuring is about only the assignment
 * so you could do this, right?
 * var a, b, c;
 * {a: first = 1, b: second = 2, c: third = 3} = data()
 * nope, {} means a "block" to JS engines, so this is a syntax error
 */
var temp, a, b, c;
({ a: first = 1, b: second = 2, c: third = 3 } = data()); // this works
temp = { a: first = 1, b: second = 2, c: third = 3 } = data(); // or this, where it doesn't start with {}

/** Nested object destructuring
 *
 */
function data2() {
  return {
    a: 1,
    b: 2,
    c: {
      d: 3,
      e: 4,
    },
  };
}

const { a, b, c: { d, e } = {} } = data2() || {};

/** Q1
 * What's the difference between a, b, and c
 */
// a
function doSomething({ a = 1, b = 2, c = 3 }) {}
// b
function doSomething({ a = 1, b = 2, c = 3 } = {}) {}
// c
function doSomething({ a, b, c } = { a: 1, b: 2, c: 3 }) {}

/** A1
 * a: If you don't pass an object, you'll get a type error "TypeError: Cannot read properties of undefined (reading 'a')"
 * b: If you pass only a and b, you'll get c = 3. if you don't pass at all, you'd still get all the values
 * c: If you pass any object, say empty object, you won't get any of the defaults
 * So it's recommended to always pass the fallback as {} empty object
 */

/** Note
 * Object destructuring allows you to specify a source more than once
 */
var obj2 = {
  a: 1,
  b: {
    c: 2,
  },
};

const {
  a,
  b,
  b: { c },
} = obj2;

/** Note
 * you can have array pattern inside an object pattern and vice versa
 */
var obj3 = {
  a: 1,
  b: [2, 3],
};

const {
  a,
  b: [two, three],
} = obj3;
