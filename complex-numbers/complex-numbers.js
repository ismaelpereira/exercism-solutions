//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(a, b) {
    this._a = a;
    this._b = b;
  }

  get real() {
    return this._a;
  }

  get imag() {
    return this._b;
  }

  add(c) {
    return new ComplexNumber(this._a + c._a, this._b + c._b);
  }

  sub(c) {
    return new ComplexNumber(this._a - c._a, this._b - c._b);
  }

  div(c) {
    return new ComplexNumber(
      (this._a * c._a + this._b * c._b) / (c._a * c._a + c._b * c._b),
      (this._b * c._a - this._a * c._b) / (c._a * c._a + c._b * c._b)
    );
  }

  mul(c) {
    return new ComplexNumber(
      this._a * c._a - this._b * c._b,
      this._b * c._a + this._a * c._b
    );
  }

  get abs() {
    return Math.sqrt(this._a ** 2 + this._b ** 2);
  }

  get conj() {
    let conju = new ComplexNumber(this._a, this._b);
    if (this._b === 0) {
      return conju;
    }
    conju._b *= -1;
    return conju;
  }

  get exp() {
    return new ComplexNumber(
      Math.pow(Math.E, this._a) * Math.cos(this._b),
      Math.sin(this._b)
    );
  }
}
