import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 115px;
    margin-top: 2px;

    display: flex;

    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.5);
`;

export const Logo = styled.div`
    width: 25%;
    height: 100%;
    padding-top: 10px;

    display: flex;
    align-items: start;
    justify-content: center;

    img {
        width: 55px;
        height: 55px;
        object-fit: cover;
        object-position: center;

        border-radius: 100%;
        background-color: black;
    }
`;

export const Infos = styled.div`
    width: 90%;
    padding-top: 10px;

    display: flex;
    flex-direction: column;

    h1 {
        font-size: 25px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    p {
        font-size: 18px;
        font-weight: 500;
        color: #7d7d7d;
    }
`;

export const Locale = styled.div`
    width: 20%;

    border-left: 1.5px solid #ebebeb;

    display: flex;
    align-items: center;
    justify-content: center;
`;
