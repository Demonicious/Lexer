class Token {
    constructor(TYPE, VALUE = null) {
        this.type = TYPE;
        this.value = VALUE;

        return this;
    }
}

module.exports = Token;