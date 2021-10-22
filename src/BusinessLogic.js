export function countCharacters(text) {
  var count = {};
  text.split("").forEach((val) => (count[val] = (count[val] || 0) + 1));
  return count;
}

export function getMostFrequentCharacters(characterCount) {
  const characters = Object.keys(characterCount);

  // take the first five and sort them by frequ
  const fiveMostFrequ = characters
    .slice(0, 5)
    .sort((a, b) => characterCount[a] - characterCount[b]);

  // for each char, if its more frequent than least frequent in fiveMostFrequ,
  // replace least frequent fiveMostFrequ and resort.
  // we could do this without sorting but it's all constant time anyway.
  characters.slice(5).forEach((character) => {
    if (characterCount[character] > characterCount[fiveMostFrequ[0]]) {
      fiveMostFrequ[0] = character;
      fiveMostFrequ.sort((a, b) => characterCount[a] - characterCount[b]);
    }
  });

  return fiveMostFrequ;
}
