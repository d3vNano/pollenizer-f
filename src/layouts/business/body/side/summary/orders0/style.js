import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const Order = styled.div`
    width: 100%;
    height: 100%;
    padding: 15px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #ebebeb;
`;

export const Title = styled.h1`
    padding-left: 30px;
    font-size: 20px;
    font-weight: 600;
`;

export const Price = styled.p`
    padding-right: 30px;
    font-size: 25px;
    font-weight: bold;
`;
