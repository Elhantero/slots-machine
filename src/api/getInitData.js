import user from "../constants/user";
import {getFromLs, setIntoLs} from "../helpers/localStorage";
import lsKey from "../constants/lsKey";
import getSlotRollResult from "../helpers/getSlotRollResult";
import getDrumSymbols from "../helpers/getDrumSymbols";

// web api emulation {some_URL}/init?uid=100
const getInitData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const lsData = getFromLs(lsKey);
            const initData = {
                slotMachine: {
                    drumSymbols: getDrumSymbols(),
                    initSymbolsIdxs: getSlotRollResult(),
                },
                user,
            };
            if (!lsData) setIntoLs(lsKey, initData);
            resolve(lsData || initData)
        }, 1)
    })
}

export default getInitData;