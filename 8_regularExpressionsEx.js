// The Power of a Smile
// by Tupac Shakur
var poem = `
The power of a gun can kill
and the power of fire can burn
the power of wind can chill
and the power of a mind can learn
the power of anger can rage
inside until it tears u apart
but the power of a smile
especially yours can heal a frozen heart`;

for (let power of powers(poem)) {
  console.log(power);
}
// a gun: kill
// fire: burn
// wind: chill
// a mind: learn
// anger: rage
// smile: heal

function* powers(poem) {
  const regex = /(?<=power of )(?<noun>(a )?\w+).*?(?<=can )(?<verb>\w+)/gs;

  let match;
  while ((match = regex.exec(poem))) {
    const { noun, verb } = match.groups;
    yield `${noun}: ${verb}`;
  }
}

// Hints:
//
// function *powers(poem) { .. }
//
// re = / .. /gs
//
// while (match = re.exec(poem)) { .. }
//
