import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

export const Container = styled.div`
    border: 1px solid #ddd;
    border-radius: 500px;
`;

export const UserMenuIcon = styled(FaUserCircle)`
    font-size: 28px;
    color: #7d7d7d;
`;

export const UserMenuSign = styled.div`
    width: 100%;
    padding: 7px 12px;
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const Txt = styled.div`
    text-align: end;
`;

export const UserType = styled.p`
    font-size: 13px;
    font-style: italic;
    font-weight: 400;
`;

export const UserName = styled.h1`
    width: 100%;

    font-size: 15px;
    font-weight: 500;
    color: #7d7d7d;
`;

export const Sign = styled.div`
    font-size: 15px;
    font-weight: 500;

    color: #7d7d7d;

    :hover {
        font-size: 16px;
        cursor: pointer;
    }
`;

export const Spacer = styled.div`
    width: 1px;
    height: 100%;
    margin: 0 15px;
    padding: 15px 0;

    background-color: #ddd;
`;
