const getNewBalance = (prevBalance = 0, betValue = 0, winValue = 0) => {
    return Number(prevBalance) - Number(betValue) + Number(winValue)
}
export default getNewBalance;