countLetters("lighthouse in the house");

function countLetters(str) {
  var noSpaces = str.split(" ").join("");
  charCount = {};

  for (var i= 0; i < noSpaces.length; i++) {
    if (charCount[noSpaces[i]]) {
      charCount[noSpaces[i]] += 1;
    } else {
      charCount[noSpaces[i]] = 1;
      }

  }
      console.log(charCount);
}
