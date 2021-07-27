//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(scores) {
    this._scores = scores;
    this._latest = scores[scores.length - 1];
    this._personalBest = Math.max.apply(null, scores);
  }

  get scores() {
    return this._scores;
  }

  get latest() {
    return this._latest;
  }

  get personalBest() {
    return this._personalBest;
  }

  get personalTopThree() {
    return this._scores.sort((a, b) => b - a).slice(0, 3);
  }
}
