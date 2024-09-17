import {getFromLs, setIntoLs} from "../helpers/localStorage";
import lsKey from "../constants/lsKey";
import getSlotRollResult from "../helpers/getSlotRollResult";
import getWinValueByRollResultAndBet from "../helpers/getWinValueByRollResultAndBet";
import getNewBalance from "../helpers/getNewBalance";

// web api emulation {some_URL}/spin?uid=100&bet=20
const getRollData = async ({ uid, balance, currentBet }) => {
    // server calculations emul
    const rolledSymbolsIdxs =  getSlotRollResult();
    const win = getWinValueByRollResultAndBet(rolledSymbolsIdxs, currentBet)
    const newBalance = getNewBalance(balance, currentBet, win);
    const lsData = getFromLs(lsKey);
    lsData.slotMachine.initSymbolsIdxs = rolledSymbolsIdxs;
    lsData.user = {
        uid,
        balance: newBalance,
        previousBalance: balance,
        last_bet: Number(currentBet),
        win: win,
        rolls: [...lsData.user.rolls, rolledSymbolsIdxs].slice(-5),
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            setIntoLs(lsKey, lsData);
            resolve(lsData)
        }, 1)
    })
}

export default getRollData;