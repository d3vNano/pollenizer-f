import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100px;
    padding: 0 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #fff;
    border-bottom: 1.5px solid #ddd;
`;

export const Button = styled.button`
    font-size: 17px;
    font-weight: 100;

    border: none;
    background-color: #fff;

    &:hover {
        font-size: 18px;
        cursor: pointer;
    }
`;
