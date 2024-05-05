/** Note
 * JS will always give you more strings that interploated values
 * even if empty strings
 */
function formatCurrency(strings, ...values) {
  var result = strings[0];

  for (var i = 0; i < values.length; i++) {
    result +=
      typeof values[i] == "number" ? `$${values[i].toFixed(2)}` : values[i];
    result += strings[i + 1];
  }

  return result;
}

const result = formatCurrency`Yo ${5 + 3}`;

console.log("👼", result);
