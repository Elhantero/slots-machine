import {drumSymbolCount, possibleSymbols} from "../constants/slotMachine";
const getDrumSymbols = (count = drumSymbolCount) => possibleSymbols.slice(0, count);
export default getDrumSymbols;