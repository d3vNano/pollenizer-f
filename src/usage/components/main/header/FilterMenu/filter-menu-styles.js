import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 10px 80px 0 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    overflow-x: hidden;

    border-bottom: 1px solid #ddd;
`;

export const Button = styled.button`
    width: 100px;

    font-size: 15px;
    font-weight: 500;
    padding-bottom: 12px;
    margin-right: 75px;

    border: none;
    outline: none;
    background: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    :hover {
        cursor: pointer;
    }

    :active {
        padding-bottom: 10px;
        border-bottom: 2px solid black;
    }
`;

export const Icon = styled.div`
    margin-bottom: 15px;
`;
