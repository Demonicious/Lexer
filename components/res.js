module.exports = {
    TOKEN: {
        // Data Types
        INT: 'INT',
        FLOAT: 'FLOAT',
        STR: 'STR',
        BOOL: 'BOOL',

        // Arithmetic Operators
        PLUS: 'PLUS',
        MINUS: 'MINUS',
        MULTIPLY: 'MULTIPLY',
        DIVIDE: 'DIVIDE',
        MODULUS: 'MODULUS',
        EXPONENT: 'EXPONENT',

        // Relational Operators
        ASSIGNMENT: 'ASSIGNMENT',
        EQUALS: 'EQUALS',
        LESS: 'LESS',
        GREATER: 'GREATER',
        LESS_EQUALS: 'LESS_EQUALS',
        GREATER_EQUALS: 'GREATER_EQUALS',
        NOT_EQUALS: 'NOT_EQUALS',

        // Logical Operators
        NOT: 'NOT_LOGIC',
        OR: 'OR_LOGIC',
        AND: 'AND_LOGIC',

        // Containers
        LPAREN: 'LPAREN',
        RPAREN: 'RPAREN',
        LCURLY: 'LCURLY',
        RCURLY: 'RCURLY',
        LSQUARE: 'LSQUARE',
        RSQUARE: 'RSQUARE',
        LANGLE: 'LANGLE',
        RANGLE: 'RANGLE',

        // Identifiers
        RESERVED_WORD: 'RESERVED_WORD',
        USER_WORD: 'USER_WORD',
        ST_END: 'ST_END',
    },

    SETS: {
        NUMBERS: [ '0', '1', '2', '3', '4', '5', '6', '7', '8' , '9' ],
        ARITHMETIC_OPERATORS: [ '+', '-', '*', '/', '%', '^' ],
        RELATIONAL_OPERATORS: [ '=', '=', '<', '>' ],
        LOGICAL_OPERATORS: [ '!', 'NOT', '&&', 'AND', '||', 'OR' ],
        CONTAINERS: [ '(', ')', '{', '}', '[', ']', '<', '>' ],
        STRING_STARTERS: [ '`', '"', "'" ],
        SPACES: [ '\n', '\t', ' ', /\s+/g, '\r' ],
        STATEMENT_END: ';',
        KEYWORD_CHARS: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_'
    },

    KEYWORDS: {
        RESERVED: [
            'let', 'const', 'define', 'return', 'print', 'if', 'else', 'while' , 'for', 'foreach', 'do', 'switch', 'case', 'break', 'continue'
        ]
    }
}
