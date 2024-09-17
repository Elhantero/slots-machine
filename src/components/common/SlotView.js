import React from 'react';
import { connect } from "react-redux";
import styled from "styled-components";
import SingleWheel from "./SingleWheel";
import {selectInitSymbolsIdxs} from "../../selectors/slotDataSelectors";

export const Wrapper = styled.div`
    display: flex;
    gap: 15px;
    background: darkcyan;
    padding: 25px;
    > div {
        outline: 3px solid gold;
        background-color: lemonchiffon;
    }
`;

const SlotView = ({ initSymbolsIdxs }) => {
    return (
        <Wrapper>
            {initSymbolsIdxs.map((symbolIdx, drumIdx) => (
                <SingleWheel
                    drumIdx={drumIdx}
                    key={`${symbolIdx}_${drumIdx}`}
                />
            ))}
        </Wrapper>
    );
};

const mapStateToProps = (state) => ({
    initSymbolsIdxs: selectInitSymbolsIdxs(state),
});
export default connect(mapStateToProps)(SlotView);