import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;
export const Total = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px 20px 15px 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-size: 35px;
        font-weight: 500;
    }

    h1 {
        font-size: 35px;
        font-weight: bold;
    }
`;
export const Button = styled.button`
    width: 100%;
    height: 70px;

    border: none;
    outline: none;
    border-radius: 0 0 20px 20px;
    background-color: #038d00;

    font-size: 40px;
    font-weight: 600;
    color: #fff;

    &:hover {
        cursor: pointer;
    }

    &:active {
        background-color: green;
    }
`;
