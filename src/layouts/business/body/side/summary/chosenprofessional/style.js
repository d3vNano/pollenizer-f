import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 15px 25px 15px 25px;

    display: flex;

    border-top: 1px solid #ddd;
`;

export const Photo = styled.div`
    width: 50px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 100%;
    background-color: #ddd;

    font-size: 30px;
    color: #fff;

    img {
        width: 100%;
        height: 100%;

        text-align: center;

        border-radius: 100%;
        object-fit: cover;
    }
`;

export const Infos = styled.div`
    margin-left: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Name = styled.div`
    font-size: 18px;
    font-weight: 600;
`;

export const DateResum = styled.div`
    margin-top: 5px;
    font-size: 15px;
    font-style: italic;
    color: #7d7d7d;
`;
