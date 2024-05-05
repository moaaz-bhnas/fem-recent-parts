/**
 * In es6, they made all the built-in data structures iterable
 * An iterable is an object that implements the iterator protocol
 * by having a next() method that returns { value: next value, done: boolean }
 * Last iteration => {value: undefined, done: true}
 */

// Let's contruct iterators from a string
const myName = "Yuri";
const myNameIterator = myName[Symbol.iterator]();

myNameIterator.next(); // => { value: "Y", done: false }
myNameIterator.next(); // => { value: "u", done: false }
myNameIterator.next(); // => { value: "r", done: false }
myNameIterator.next(); // => { value: "i", done: false }
myNameIterator.next(); // => { value: "undefined", done: true }
myNameIterator.next(); // => { value: "undefined", done: true }

/** Declarative iterators for..of
 * for..of only take iterables
 * You can use it to loop over the interator or the value itself
 */
for (const letter of myName) {
}

for (const letter of myNameIterator) {
}

/** Note
 * ... only consumes iterators
 */

/** Objects
 * They didn't add the iterator to objects for some reason, but it's easy to implement
 */
var obj = {
  name: "Moaaz",
  age: 27,
};
// console.log(...obj); // Uncaught TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function

var iterableObj = {
  name: "Moaaz",
  age: 27,
  [Symbol.iterator]: function createIterator() {
    var keys = Object.keys(this);
    var index = 0;
    return {
      next: () =>
        index >= keys.length
          ? { done: true, value: undefined }
          : { done: false, value: this[keys[index++]] },
    };
  },
};
console.log(...iterableObj); // Moaaz 27

/** Generators
 * You can tell that the former implementation was a bit imperative
 * generators are a special type of functions that when invoked, they don't run
 * instead, they produce an iterator
 */

/** Yield
 * When you call .next() on an iterator that's attached to a generator,
 * it gives you the value that was yielded out from that generator
 */

function* main() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

var iterator = main();

iterator.next(); // {value: 1, done: false}
iterator.next(); // {value: 2, done: false}
iterator.next(); // {value: 3, done: false}
iterator.next(); // {value: 4, done: true}

[...main()]; // [1, 2, 3]

/** Note
 * When we spreaded the iterator, it stops at the return
 * so always yield (not return) the value
 */

// Let's refactor the iterableObj using generators
var iterableObj = {
  name: "Moaaz",
  age: 27,
  [Symbol.iterator]: function* createIterator() {
    for (const key of Object.keys(this)) {
      yield this[key];
    }
  },
};
