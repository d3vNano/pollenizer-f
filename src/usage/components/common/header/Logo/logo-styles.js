import styled from "styled-components";
import { GiHoneycomb } from "react-icons/gi";

export const Container = styled.div`
    width: 175px;
    height: 40px;

    display: flex;
`;

export const Logo = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
`;

export const Icon = styled(GiHoneycomb)`
    font-size: 35px;
    color: orange;
`;

export const Txt = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Name = styled.h1`
    font-size: 18px;
    font-weight: 600;
    color: #000;
`;

export const Slogan = styled.h2`
    font-size: 16px;
    font-weight: 500;
    color: #000;
`;
