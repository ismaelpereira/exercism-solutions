//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (leftStrand, rightStrand) => {
  if (leftStrand === "" && rightStrand === "") {
    return 0;
  }
  if (leftStrand === "") {
    throw new Error("left strand must not be empty");
  }
  if (rightStrand === "") {
    throw new Error("right strand must not be empty");
  }
  if (leftStrand.length !== rightStrand.length) {
    throw new Error("left and right strands must be of equal length");
  }
  let distanceBetween = 0;
  for (let i = 0; i <= leftStrand.length; i++) {
    if (leftStrand[i] !== rightStrand[i]) {
      distanceBetween++;
    }
  }
  return distanceBetween;
};
