import {drumsCount,drumSymbolCount} from "../constants/slotMachine";
import getRandomIntFromInterval from "./getRandomIntFromInterval";
const getSlotRollResult = (
    drums_count = drumsCount,
    drum_symbol_count = drumSymbolCount
) => {
    return Array
        .from(Array(drums_count))
        .map(() => getRandomIntFromInterval(0, drum_symbol_count - 1))
}

export default getSlotRollResult;