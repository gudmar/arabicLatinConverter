export const errors = {
    ILLEGAL_SYMBOL: {
        message: 'No symbols other then I, V, X, L, C, D, M are allowed',
        tests:  [/[^IVXLCDM]/]
    },
    TOO_MANY_REPETITIONS: {
        message: 'I, X, C symbols may not repeat more then 3 times in a row ',
        tests:  [/IIII/, /XXXX/, /CCCC/]
    },
    TOO_MANY_REPETITIONS_LDV: {
        message: 'L, D and V symbols may not repeat',
        tests:  [/.*D.*D.*/, /.*L.*L.*/,/.*V.*V.*/]
    },
    REPETITIONS_BEFORE_BIGGER: {
        message: 'Two smaller symbols in a raw cannot be before bigger symbol',
        tests:  [/IIV/, /IIX/, /XXL/, /XXC/, /CCD/, /CCM/]
    },
    ILLEGAL_NEIGHBOUR: {
        message: 'Illegal neighbour',
        tests:  [/IL/, /IC/, /ID/, /IM/, /XD/, /XM/, /DM/, /LC/, /LD/, /LM/]
    },
    ILLEGAL_BEFORE: {
        message: 'Illegal Symbol syntax',
        tests:  [/.*I.+L.*/, /.*I.+C.*/, /.*I.+D.*/, /.*I.+M.*/, /.*X.+D.*/, /.*X.+M.*/, /.*D.+M.*/, /.*L.+C.*/, /.*L.+D.*/, /.*L.+M.*/]
    },

}

const getResult = (result, error) => ({ result, error })

const testCondition = (input, condition) => {
    const result = condition.tests.reduce((acc, test) => {
        if (test.test(input)) acc = false;
        return acc;
    }, true)
    return result;
}

export const validateLatinInput = (input) => {
    const conditions = Object.values(errors);
    for(let condition of conditions) {
        const result = testCondition(input, condition);
        if (!result) return getResult(false, condition.message);
    }
    return getResult(true)
}