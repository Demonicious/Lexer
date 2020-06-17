const { readFileSync } = require('fs');
const Lexer = require('./components/lexer');

const code = readFileSync('./test.code', { encoding: 'utf8' });

const lex = new Lexer(code);
lex.tokenize();

console.log(lex.tokens);