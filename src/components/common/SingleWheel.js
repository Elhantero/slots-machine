import React, {useRef, useState, useEffect, useMemo} from 'react';
import {connect, useDispatch} from "react-redux";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {changeDrumWheelingStatusByIdx} from "../../slices/slotDataSlice";
import {
    selectInitDrumSymbols,
    selectInitSymbolsIdxs,
    selectDrumWheelingStatusByIdx,
} from "../../selectors/slotDataSelectors";
import getRandomIntFromInterval from "../../helpers/getRandomIntFromInterval";
import {Wrapper} from "../styled/SyngleWheelStyled";

const SingleWheel = ({
         drumIdx = 0,
         initDrumSymbols = [],
         initSymbolsIdxs = [],
         drumWheelingStatus = false
     }) => {
    const [wheelCount, setWheelCount] = useState(0);

    const dispatch = useDispatch();

    const ref = useRef(initSymbolsIdxs[drumIdx]);

    useEffect(() => {
        if (drumWheelingStatus) {
            setWheelCount(getRandomIntFromInterval(1, 3) * initDrumSymbols.length)
        }
    }, [drumWheelingStatus]);


    useEffect(() => {
        if (wheelCount) {
            setTimeout(() => {
                setWheelCount(prevState => prevState - 1);
                ref.current = ref.current ? ref.current - 1 : initDrumSymbols.length - 1;
                if (wheelCount === 1) {
                    setTimeout(() => {
                        dispatch(changeDrumWheelingStatusByIdx({
                            drumIdx,
                        }))
                    }, 500)
                }
            }, 300 - wheelCount * 10)
        }
    }, [wheelCount])

    return useMemo(() => (
        <Wrapper>
            <div className="counter">
                <TransitionGroup component="span">
                    {/* Make sure this is inline-block */}
                    <CSSTransition
                        classNames="ctr"
                        timeout={{ enter: 300 - wheelCount * 10, exit: 300 - wheelCount * 10 }}
                        unmountOnExit
                        key={wheelCount}
                    >
                        {/* TODO: create speficic classes for inc and dec actions */}
                        <span className="counter__value">{initDrumSymbols[ref.current]}</span>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </Wrapper>
    ), [wheelCount]);
};

const mapStateToProps = (state, {drumIdx}) => ({
    drumWheelingStatus: selectDrumWheelingStatusByIdx(state, drumIdx),
    initDrumSymbols: selectInitDrumSymbols(state),
    initSymbolsIdxs: selectInitSymbolsIdxs(state),
})

export default connect(mapStateToProps)(SingleWheel);