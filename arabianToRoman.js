const breakingPoints = [
    { arabian: 1, latin: 'I',    },
    { arabian: 4, latin: 'IV',    },
    { arabian: 5, latin: 'V',    },
    { arabian: 9, latin: 'IX',   },
    { arabian: 10, latin: 'X',   },
    { arabian: 40, latin: 'XL',   },
    { arabian: 50, latin: 'L',   },
    { arabian: 90, latin: 'XC',  },
    { arabian: 100, latin: 'C',  },
    { arabian: 400, latin: 'CD',  },
    { arabian: 500, latin: 'D',  },
    { arabian: 900, latin: 'CM', },
    { arabian: 1000, latin: 'M', },
]

export function divideToNamedNumbers(nrToProcess) {
    const m = new Map();
    const points = [...breakingPoints].map(({ arabian }) => arabian);
    let rest = nrToProcess;
    while (points.length > 0) {
        const currentArabian = points.pop();
        const nrOfCurrentArabians = Math.floor(rest / currentArabian);
        rest = rest % currentArabian;
        if (nrOfCurrentArabians > 0) m.set(currentArabian, nrOfCurrentArabians)
    }
    return m;
}

function fillOutputWithNumber({ output, nr, symbol }) {
    if (!nr) return output;
    for (let i = 0; i < nr; i++){
        output += symbol;
    }
    return output;
}

export function arabian2Latin(nrToProcess) {
    let output = '';
    const mappedPoints = divideToNamedNumbers(nrToProcess);
    const points = [...breakingPoints].reverse();
    points.forEach(({ arabian, latin }) => {
        const nrOfArabian = mappedPoints.get(arabian);
        output = fillOutputWithNumber({
            output, nr: nrOfArabian, symbol: latin
        })
    })
    return output;
}

// TDD attempts

// export function arabian2Latin(nrToProcess){
//     let output = '';
//     const _40 = Math.floor(nrToProcess / 40);
//     const _40_mod = nrToProcess % 40;
//     for(let i = 0; i < _40; i++) {
//         output += 'XL'
//     }
//     // if (nrToProcess === 42) return 'XLII';
//     // if (nrToProcess === 41) return 'XLI';
//     // if (nrToProcess === 40) return 'XL';
//     const tenths = Math.floor(_40_mod / 10);
//     const moduloTenths = _40_mod % 10;
//     for(let i = 0; i < tenths; i++) {
//         output += 'X'
//     }
//     if (moduloTenths === 9) return output + 'IX';
//     // if (nrToProcess === 12) return 'XII';
//     // if (nrToProcess === 11) return 'XI';
//     // if (nrToProcess === 10) return 'X';
//     // if (nrToProcess === 9) return 'IX';
//     const fives = Math.floor(moduloTenths / 5);
//     const moduloFives = moduloTenths % 5;
//     if (moduloFives === 4 && fives === 0) return output + 'IV';
//     for(let i = 0; i < fives; i++) {
//         output += 'V'
//     }
//     // if (nrToProcess === 4) return 'IV'
//     // if (nrToProcess === 5) return 'V'
//     // if (nrToProcess === 6) return 'VI'
//     // if (nrToProcess === 7) return 'VII'
//     for(let i = 0; i < moduloFives; i++) {
//         output += 'I'
//     }
//     return output;
    
// }