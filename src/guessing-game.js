class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.guessNum = null;
    }

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        this.guessNum = Math.ceil((this.min + this.max) / 2);
        return this.guessNum;
    }

    lower() {
        this.max = this.guessNum;
    }

    greater() {
        this.min = this.guessNum;
    }
}

module.exports = GuessingGame;
