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
    let output = 0;
    tokens.forEach((token, index) => {
        const nextToken = index + 1 > tokens.length ? null : tokens[index + 1];
        const nextTokenValue = tokensMapping[nextToken] || SMALLEST_VALUE;
        const currentTokenValue = tokensMapping[token];
        output += nextTokenValue > currentTokenValue ? -currentTokenValue : currentTokenValue;
    })
    return output;
}