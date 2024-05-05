var numbers = {
  [Symbol.iterator]: function* (start = 0, end = 100) {
    for (var i = start; i <= end; i++) {
      yield i;
    }
  },
};

// should print 0..100 by 1s
for (let num of numbers) {
  console.log(num);
}

// should print 6..30 by 4s
console.log("My lucky numbers are: ____");

// Hint:
//     [...numbers[Symbol.iterator]( ?? )]
