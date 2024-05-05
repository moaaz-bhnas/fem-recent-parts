/** Named arguments
 * If you have 3 or more parameters for a function, it's easy to forget their order
 * so it's recommended to use destructuring in this case
 */

/** Destructuring & Restructuring
 * If you have a config of default values that you pass in different places
 * with some different value in each place
 * you can define a function that does just that
 */
function axiosOptions({
  url = "https//theyarestories.com",
  method = "get",
  data,
  callback,
  headers: [header0 = "Content-Type: text/plain", ...otherHeaders] = [],
} = {}) {
  return { url, method, data, callback, headers: [header0, ...otherHeaders] };
}
axiosOptions(); // just the defaults
axiosOptions({ data: {} }); // overrides the default
