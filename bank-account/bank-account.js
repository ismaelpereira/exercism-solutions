export class BankAccount {
  open() {
    if (this._balance !== undefined) {
      throw new ValueError();
    }
    this._balance = 0;
  }

  close() {
    if (this._balance === undefined) {
      throw new ValueError();
    }
    this._balance = undefined;
  }

  deposit(value) {
    if (this._balance === undefined || value < 0) {
      throw new ValueError();
    }
    this._balance = this._balance + value;
  }

  withdraw(value) {
    if (this._balance === undefined || this._balance < value || value < 0) {
      throw new ValueError();
    }
    this._balance = this._balance - value;
  }

  get balance() {
    if (this._balance === undefined) {
      throw new ValueError();
    }
    return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
    this.name = this.constructor.name;
  }
}
