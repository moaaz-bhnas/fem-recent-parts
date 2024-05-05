/** Destructuring
 * Decomposing a structure into its individual parts
 * Its purpose is to assign some individual parts from larger structure
 */

/**
 * Notice that [...] is on the left-hand side of the equal
 * so it's not a value.
 * It's a *pattern* that describes the expected value on the right
 * It describes for JavaScript how it should break down the structure
 * and make individual assignments for you
 */
var [
  {
    name: firstName = "Moaaz",
    email: firstEmail = "moaaz_bs@mail.com",
    role: firstRole = "Student",
  },
  {
    name: secondName = "Sara",
    email: seconEmail = "sara@mail.com",
    role: seconRole = "Teacher",
  },
] = getRecords();

/** Spread operator
 *
 */
var grades = [5, 4, 8, 6, 7, 2];
var [firstGrade, ...rest] = grades;

/** Access structured value
 * If you still need access to the whole object you can chain the assignment
 */
var data;
var [first, second, ...rest] = (data = getData());

/** Declaration and Assignment
 * They don't have to happen together
 * Destructuring is only about the assignment
 */
var first, second, rest;
[first, second, rest] = getData();

/** Note
 * You can also assign to any valid left-hand side target
 */
var collector = {};
[collector.name, collector.age] = getPersonalData();

/** Comma separation
 * you can ignore indexes by commas
 */
var [
  first,
  second,
  ,
  fourth,
  fifth,
  ,
  seventh,
  eight,
  ,
  tenth,
  ,
  twelve,
  thirteen,
  ...rest
] = grades;

/** Swapping
 * without temp variable
 */
var x = 1;
var y = 2;
[x, y] = [y, x];

/** Parameter arrays
 * Here, if you don't define a fallbak [] array (and no argument was passed),
 * you'll get a type error "trying to access x of undefined"
 * But here you garauntee, that even if nothing was passed, you have these initial values
 */
function data([
  firstName = "Moaaz",
  secondName = "Bhnas",
  age = 27,
  hobby = "Tennis",
] = []) {
  console.log({ firstName, secondName });
}

/** Nested array destructuring
 *
 */
const data = [1, [2, 3], 4];
var [first, [second, third] = [], fourth] = data;
