//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(n) {
    let sum = 0;
    let square = 0;
    for (let i = 0; i <= n; i++) {
      sum += i;
      square += i * i;
    }
    this._squareOfSum = sum * sum;
    this._sumOfSquares = square;
  }

  get sumOfSquares() {
    return this._sumOfSquares;
  }

  get squareOfSum() {
    return this._squareOfSum;
  }

  get difference() {
    return this._squareOfSum - this._sumOfSquares;
  }
}
