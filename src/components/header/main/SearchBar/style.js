import styled from "styled-components";

export const Container = styled.div`
    width: 350px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    position: relative;

    border: 1px solid #ddd;
    border-radius: 15px;

    spacer {
        width: 1px;
        height: 75%;

        background-color: #ddd;
    }
`;

export const FirstSearch = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    margin-left: 15px;
    margin-right: 50px;

    input {
        width: 100%;
        border: none;
        outline: none;

        font-size: 15px;

        text-align: start;
        padding-left: 15px;
        padding-right: 15px;

        ::placeholder {
            color: #000;
        }
    }
`;
/*
export const SecondSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        border: none;
        outline: none;

        font-size: 15px;

        text-align: start;
        padding-left: 15px;

        ::placeholder {
            color: #000;
        }
    }
`;
*/

export const Target = styled.div`
    width: 50px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 0;

    font-size: 20px;

    cursor: pointer;
`;
