import styled from "styled-components";

export const Wrapper = styled.div`
    .counter {
        /* IMPORTANT */
        overflow: hidden;
    }

    .counter > span {
        position: relative;
        overflow: hidden;
    }

    .counter__value {
        /* IMPORTANT: inline elements are not affected by css transforms, so we have
        to convert it to inline-block element */
        display: inline-block;
        width: 150px;
        height: 150px;
        font-size: 110px;
    }

    .ctr-enter {
        background: transparent;
        transform: translateY(-100%);
    }

    .ctr-enter.ctr-enter-active {
        transform: translateY(0);
        transition: all 300ms;
    }

    .ctr-exit {
        transform: translateY(0);
        /* IMPORTANT: so the exiting item will be lined up with the entering item
        , creating a continuous flow effect */
        position: absolute;
        left: 0;
    }

    .ctr-exit.ctr-exit-active {
        transform: translateY(100%);
        transition: all 300ms;
    }

`;