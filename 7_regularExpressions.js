/** Look behind (assertion)
 * To match only it it follows a certain pattern
 * Let's first look at "look ahead" which has been supported for a long time
 */
const string = "Hello world";

string.match(/(l.)/g); // normal match => ['ll', 'ld']
string.match(/(l.)$/g); // at the end => ['ld']
string.match(/(l.)(?=o)/g); // look ahead (only if it's followed by o) => ['ll']
string.match(/(l.)(?!o)/g); // look ahead (only if it's not followed by o) => ['ld']
string.match(/(?<=e)(l.)/g); // look behind (only if it follows an e) => ['ll']
string.match(/(?<!e)(l.)/g); // look behind (only if it doesn't follow an e) => ['ld']

/** Capture groups
 * In regular expressions, () serves as a grouping + capturing operators
 * Note: from index 2 (hidden properties)
 */
string.match(/.(l.)/); // => [ 'ell', 'll', index: 1, input: 'Hello world', groups: undefined ]: 'll' is the capture group

/** Back references
 * A capture group allows us to have a sub part of the pattern pulled out separately
 * We can use them as back references
 */
string.match(/([lm])o wor\1/); // => [ 'lo worl', 'l', index: 3, input: 'Hello world', groups: undefined ]

/** Named capture groups
 * Instead of numeric references, you can use readable names
 */
string.match(/(?<cap>[lm])o wor\k<cap>./); // => ['lo world', 'l', index: 3, input: 'Hello world', groups: {cap: 'l'}]

/** dotall mode
 * Regular expressions has always been able to capture matches in one line of a string,
 * so we weren't able to call it on muli-line strings
 * which dotall allows us to do
 * It's /n aware
 */
const string2 = `
JavaScript
is
awsome
`;
console.log(string2.match(/Script.*some/)); // null
console.log(string2.match(/Script.*some/s)); // 'Script\nis\nawsome'
