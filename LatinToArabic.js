const tokensMapping = {
    'I': 1, 
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}

const SMALLEST_VALUE = -1;

export function latinToArabic(latin) {
    const tokens = latin.split('');
    const output = tokens.reduce((result, token, index) => {
        const nextToken = index + 1 > tokens.length ? null : tokens[index + 1];
        const nextTokenValue = tokensMapping[nextToken] || SMALLEST_VALUE;
        const currentTokenValue = tokensMapping[token];
        result += nextTokenValue > currentTokenValue ? -currentTokenValue : currentTokenValue;
        return result;
    }, 0);
    return output;
}