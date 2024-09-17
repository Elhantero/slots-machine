import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {fetchInitData} from "../../slices/slotDataSlice";
import {Wrapper} from "../styled/MainStyled";
import SlotView from "../common/SlotView";
import SlotDashboard from "../common/SlotDashboard";

const Main = () => {
    const dispatch= useDispatch();

    useEffect(() => {
        dispatch(fetchInitData());
    }, [dispatch])

    return (
        <Wrapper>
            <SlotView />
            <SlotDashboard/>
        </Wrapper>
    )
}

export default Main;