export const selectInitDrumSymbols = (state) => state?.slotData?.slotMachine?.drumSymbols;
export const selectInitSymbolsIdxs = (state) => state?.slotData?.slotMachine?.initSymbolsIdxs;
export const selectDrumWheelingStatuses = (state) => state?.slotData?.slotMachine?.drumWheelingStatuses;
export const selectDrumWheelingStatusByIdx = (state, drumIdx) => selectDrumWheelingStatuses(state)?.[drumIdx];

export const selectIsWheelingNow = (state) => {
    const res = selectDrumWheelingStatuses(state);
    return res.filter(o => o).length
}

export const selectUser = (state) => state?.slotData?.user;