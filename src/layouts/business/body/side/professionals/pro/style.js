import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
`;

export const Option = styled.div`
    width: 110px;
    height: 100%;
    padding: 10px 0;
    margin: 0 15px 0 10px;

    border-radius: 15px;
    //border: 3px solid black;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    p {
        font-size: 13px;
        font-weight: bold;
        text-align: center;
        line-height: 15px;
    }
`;

export const Icon = styled.div`
    width: 55px;
    height: 55px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 100%;
    border: 5px solid
    background-color: #000;

    font-size: 35px;
    color: #000;
`;
