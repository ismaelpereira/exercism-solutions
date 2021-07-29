//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
  constructor(p, g) {
    if (p < 1 || p > 9999 || g < 1 || g > 9999) {
      throw new Error("constants out of range");
    }
    for (let i = 2; i < p; i++) {
      if (p % i === 0 && i !== 1 && i !== p) {
        throw new Error("p need to be prime");
      }
      if (g % i === 0 && i !== 1 && i !== g) {
        throw new Error("g need to be prime");
      }
    }

    this._p = p;
    this._g = g;
  }

  getPublicKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this._p) {
      throw new Error("invalid private key");
    }
    return Math.pow(this._g, privateKey) % this._p;
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return Math.pow(theirPublicKey, myPrivateKey) % this._p;
  }
}
