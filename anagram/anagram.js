//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const findAnagrams = (mainWord, possibleAnagrams) => {
  return possibleAnagrams.filter(
    (word) =>
      word.toLowerCase().split("").sort().join("") ===
        mainWord.toLowerCase().split("").sort().join("") &&
      word.toLowerCase() !== mainWord.toLowerCase()
  );
};
