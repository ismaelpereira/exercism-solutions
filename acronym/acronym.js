//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (str) => {
  return str
    .replace("-", " ")
    .replace("_", " ")
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
};
