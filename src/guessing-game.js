class GuessingGame {
    constructor() {
        
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.previous = Math.ceil((this.max+this.min)/2);
    }

    lower() {
        this.max = this.previous;
    }

    greater() {
        this.min = this.previous;
    }
}

module.exports = GuessingGame;
