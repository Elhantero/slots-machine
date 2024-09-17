import styled from 'styled-components'
export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const BetStatWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const BetBtnWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    label {
        display: flex;
        background-color: #fff312;
        cursor: pointer;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        &:hover {
            font-weight: bold;
            font-size: 18px;
            box-shadow: 0 0 25px -5px rgba(9, 168, 83);
            background-color: #ffac12;
        }
    }

    input[type="radio"]:checked + label {
        font-weight: bold;
        font-size: 18px;
        box-shadow: 0 0 25px -5px rgba(9, 168, 83);
        background-color: #ffac12;
    }

    input[type="radio"]:disabled + label {
        background-color: darkgray;
    }
`;

export const StatBlock = styled.div`
    display: flex;
    gap: 15px;
`;

export const BalanceBlock = styled.div`
    display: flex;
    width: 115px;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding: 15px;
    background: #04630f;
    border-radius: 10px;
    color: #ffd700;
    font-size: 20px;
    box-sizing: border-box;
    font-weight: bold;
    > span {
        color: #fff;
        font-size: 16px;
        font-weight: normal;
    }
`;

export const ResultBlock = styled.div`
    display: flex;
    width: 115px;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding: 15px;
    background: #04630f;
    border-radius: 10px;
    color: #ffd700;
    font-size: 18px;
    font-weight: bold;
    > span {
        color: #fff;
        font-size: 16px;
        font-weight: normal;
    }
`;

export const BlinkingDiv = styled.div`
    font-size: 20px;
    &.blink-hard {
        animation: blinker 1s step-end infinite;
    }
    &.blink-soft {
        animation: blinker 1.5s linear infinite;
    }
    @keyframes blinker {
        50% {
            opacity: 0;
        }
    }
`;
export const RollBtn = styled.button`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease-in-out;
    color: #fff;
    border-radius: 5px;
    background-color: #e32626;
    white-space: nowrap;

    &:hover {
        background-color: #af1515;
    }
    &:disabled {
        background-color: #a5a5a5;
    }
`;