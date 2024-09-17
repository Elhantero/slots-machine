import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 530px;
    margin: 0 auto;
    user-select: none;
    position: relative;
    z-index: 99;
    top: 100px;
    background-color: rgba(0, 0, 0, 0.25);
    >div:first-child {
        display: flex;
        gap: 15px;
        background: #008b8b59;
        padding: 25px;
        > div {
            outline: 3px solid gold;
            background-color: lemonchiffon;
        }
    }
    > button {
        width: 300px;
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
    }
`;