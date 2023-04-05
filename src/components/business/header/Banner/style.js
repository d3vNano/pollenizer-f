import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 400px;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;
`;

export const Button = styled.button`
    width: 215px;
    height: 70px;

    border-radius: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    z-index: 9;
    bottom: 10%;

    font-size: 18px;
    font-style: italic;
    color: #fff;
    opacity: 50%;

    border: none;
    background-color: #000;
    box-shadow: 0 3px #fff;

    &:hover {
        cursor: pointer;
    }

    &:active {
        bottom: 9%;
        box-shadow: 0 0px;
    }
`;
