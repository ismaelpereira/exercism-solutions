const allergies = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128,
};

export class Allergies {
  constructor(allergies) {
    this._allergies = allergies;
  }

  list() {
    let listOfAllergies = [];
    let allergieItens = Object.keys(allergies);
    for (let i = 0; i < allergieItens.length; i++) {
      let mask = allergies[allergieItens[i]] & ~this._allergies;
      if (mask === 0) {
        listOfAllergies.push(allergieItens[i]);
      }
    }
    return listOfAllergies;
  }

  allergicTo(item) {
    let mask = allergies[item] & ~this._allergies;
    return mask === 0;
  }
}
