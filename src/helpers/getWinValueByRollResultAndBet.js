const uniqSymbolsCountToKoeffMap = {
    1: 100,
    2: 2,
    3: 0,
};

// for 3 drums, can be modified
const getWinValueByRollResultAndBet = (rollResult = [], bet = 0) => {
    if(!rollResult?.length) return 0;
    const uniqSymbolsCount = [...new Set(rollResult)].length;
    return Number(bet) * uniqSymbolsCountToKoeffMap[uniqSymbolsCount];
}

export default getWinValueByRollResultAndBet;