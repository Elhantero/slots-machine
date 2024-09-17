import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from "react-redux";
import {selectInitSymbolsIdxs, selectIsWheelingNow, selectUser} from "../../selectors/slotDataSelectors";
import {fetchRollData} from "../../slices/slotDataSlice";
import {
    Wrapper,
    RollBtn,
    BetStatWrapper,
    BetBtnWrapper,
    StatBlock,
    BalanceBlock,
    ResultBlock,
    BlinkingDiv
} from "../styled/SlotDashboardStyled";
import * as betVariants from "../../constants/bets";

const SlotDashboard = ({
      initSymbolsIdxs, isWheelingNow, user,
    }) => {
    const [currentBet, setCurrentBet] = useState(betVariants.b20);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user.last_bet) {
            setCurrentBet(user.last_bet)
        }
    }, [user.last_bet])

    const onClickRoll = () => {
        if (initSymbolsIdxs?.length) {
            dispatch(fetchRollData({
                uid: user.uid,
                balance: user.balance,
                currentBet,
            }))
        }
    };
    const changeBet = (e) => setCurrentBet(e.target.value);

    const resStr = user.win ? `WIN ${user.win}!!!` : 'Try again!'
    return (
        <Wrapper>
            <BetStatWrapper>
                <BetBtnWrapper>
                    {[betVariants.b20, betVariants.b50, betVariants.b100].map((value) => (
                        <div key={value}>
                            <input
                                hidden
                                type="radio"
                                name={value}
                                id={value}
                                onChange={changeBet}
                                value={value}
                                checked={Number(currentBet) === value}
                                disabled={user.balance < value}
                            />
                            <label
                                style={{
                                    width: `${50 + value * 0.15}px`,
                                    height: `${50 + value * 0.15}px`
                                }}
                                htmlFor={value}
                            >{value}</label>
                        </div>
                    ))}
                </BetBtnWrapper>

                <StatBlock>
                    <BalanceBlock>
                        <span>My balance</span>
                        {isWheelingNow ? user.previousBalance - user.last_bet : user.balance}
                    </BalanceBlock>
                    <ResultBlock>
                        <span>Result</span>
                        {isWheelingNow ? (
                            <BlinkingDiv className="blink-hard">???</BlinkingDiv>
                        ) : resStr}
                    </ResultBlock>
                </StatBlock>
            </BetStatWrapper>

            <RollBtn onClick={onClickRoll} disabled={isWheelingNow || user.balance < betVariants.b20}>Roll!</RollBtn>
        </Wrapper>
    );
};
const mapStateToProps = (state) => ({
    initSymbolsIdxs: selectInitSymbolsIdxs(state),
    isWheelingNow: selectIsWheelingNow(state),
    user: selectUser(state),
});
export default connect(mapStateToProps)(SlotDashboard);