const Token = require('./token');
const { TOKEN, SETS, KEYWORDS } = require('./res');

class Lexer {
    constructor(text) {
        this.code = text;
        this.iterator = -1;
        this.char = null;
        this.word = null;
        this.tokens = [];

        this.lex();
    }

    lex() {
        this.iterator++;
        this.char = (this.iterator < this.code.length) ? this.code[this.iterator] : null;

        return this;
    }

    lexNumber() {
        let num = '';
        let decim = false;

        while(this.char != null && [...SETS.NUMBERS, '.'].includes(this.char)) {
            let c = this.char;
            if(c === '.') {
                if(!decim) {
                    num += c;
                    decim = true;
                }
            } else 
                num += c;

            this.lex();
        }

        if(decim) this.tokens.push(new Token(TOKEN.FLOAT, num));
        else this.tokens.push(new Token(TOKEN.INT, num));
    }

    lexArithOperator() {
        while(this.char != null && SETS.ARITHMETIC_OPERATORS.includes(this.char)) {
            switch(this.char) {
                case '+':
                    this.tokens.push(new Token(TOKEN.PLUS));
                    break;
                case '-':
                    this.tokens.push(new Token(TOKEN.MINUS));
                    break;
                case '/':
                    this.tokens.push(new Token(TOKEN.DIVIDE));
                    break;
                case '*':
                    this.tokens.push(new Token(TOKEN.MULTIPLY));
                    break;
                case '%':
                    this.tokens.push(new Token(TOKEN.MODULUS));
                    break;
                case '^':
                    this.tokens.push(new Token(TOKEN.EXPONENT));
                    break;
            }

            this.lex();
        }
    }

    lexRelationOperator() {
        let operator = '';

        while(this.char != null && [...SETS.RELATIONAL_OPERATORS].includes(this.char)) {
            operator += this.char;
            this.lex();
        }

        switch(operator) {
            case '<':
                this.tokens.push(new Token(TOKEN.LESS));
                break;
            case '>':
                this.tokens.push(new Token(TOKEN.GREATER));
                break;
            case '=':
                this.tokens.push(new Token(TOKEN.ASSIGNMENT));
                break;
            case "==":
                this.tokens.push(new Token(TOKEN.EQUALS));
                break;
            case "<>":
                this.tokens.push(new Token(TOKEN.NOT_EQUALS));
                break;
            case "<=":
                this.tokens.push(new Token(TOKEN.LESS_EQUALS));
                break;
            case ">=":
                this.tokens.push(new Token(TOKEN.GREATER_EQUALS));
                break;
        }

        return this;
    }

    lexContainer() {
        while(this.char != null && SETS.CONTAINERS.includes(this.char)) {
            switch(this.char) {
                case '(':
                    this.tokens.push(new Token(TOKEN.LPAREN));
                    break;
                case ')':
                    this.tokens.push(new Token(TOKEN.RPAREN));
                    break;
                case '[':
                    this.tokens.push(new Token(TOKEN.LSQUARE));
                    break;
                case ']':
                    this.tokens.push(new Token(TOKEN.RSQUARE));
                    break;
                case '{':
                    this.tokens.push(new Token(TOKEN.LCURLY));
                    break;
                case '}':
                    this.tokens.push(new Token(TOKEN.RCURLY));
                    break;
                case '<':
                    this.tokens.push(new Token(TOKEN.LANGLE));
                    break
                case '>':
                    this.tokens.push(new Token(TOKEN.RANGLE));
                    break;
            }

            this.lex();
        }
    }

    lexString(starter) {
        this.lex();

        let string = '';
        while(this.char != null && this.char != starter) {
            string += this.char;
            this.lex();
        }

        this.lex();
        this.tokens.push(new Token(TOKEN.STR, string));
    }

    lexKeyword() {
        let word = '';
        
        while(this.char != null && SETS.KEYWORD_CHARS.includes(this.char)) {
            word += this.char;

            if(KEYWORDS.RESERVED.includes(word)) {
                this.lex();
                return this.tokens.push(new Token(TOKEN.RESERVED_WORD, word));
            }

            this.lex();
        }

        return this.tokens.push(new Token(TOKEN.USER_WORD, word));
    }

    tokenize() {
        while(this.char != null) {
            let c = this.char;

            if(SETS.SPACES.includes(c)) {
                this.lex();
            } else if(SETS.STATEMENT_END === c) {
                this.tokens.push(new Token(TOKEN.ST_END));
                this.lex();
            } else if(SETS.STRING_STARTERS.includes(c)) {
                this.lexString(c);
            } else if(SETS.NUMBERS.includes(c)) {
                this.lexNumber();
            } else if(SETS.ARITHMETIC_OPERATORS.includes(c)) {
                this.lexArithOperator();
            } else if(SETS.RELATIONAL_OPERATORS.includes(c)) {
                this.lexRelationOperator();
            } else if(SETS.CONTAINERS.includes(c)) {
                this.lexContainer();
            } else {
                this.lexKeyword();
            }
            // } else {
            //     console.error(`Unexpected character: ${c} at Position: ${this.iterator}`);
            // }
        }
    }
}

module.exports = Lexer;