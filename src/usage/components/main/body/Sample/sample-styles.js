import styled from "styled-components";

import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";

export const Container = styled.div`
    width: 300px;
    height: 100%;

    margin: 0 12px;
    margin-bottom: 30px;

    position: relative;

    cursor: pointer;
`;

export const Events = styled.div`
    width: 100%;
    padding: 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${(props) => (props.logoType === "Alessandro" ? "#000" : "#fff")};

    position: absolute;
    z-index: 2;
`;

export const Assessments = styled.div`
    display: flex;
    align-items: center;
`;

export const Favorites = styled.div`
    display: flex;
    align-items: center;
`;

export const EvalIcon = styled(AiOutlineStar)`
    font-size: 25px;
    font-weight: 600;
`;

export const LikeIcon = styled(AiOutlineHeart)`
    margin-left: 5px;
    font-size: 25px;
    font-weight: 600;
`;

export const Ammount = styled.p`
    font-size: 18px;
    font-weight: 600;

    text-align: end;

    margin-left: 5px;
`;

export const Card = styled.div`
    width: 100%;
    height: 100%;

    border-radius: 20px 20px 0 0;

    position: relative;
`;

export const Images = styled.div`
    width: 100%;
    height: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.img`
    width: 100%;
    height: 221px;
    border-radius: 20px 20px 0 0;

    object-fit: cover;
`;

export const Carrossel = styled.div`
    width: 100%;
    height: 75px;

    display: flex;
    justify-content: space-between;

    border-radius: 0 0 20px 20px;
`;

export const LeftPhoto = styled.img`
    width: 24%;
    height: 100%;

    object-fit: cover;

    border-radius: 0 0 0 20px;
    background-color: rgba(0, 0, 0, 0.75);
`;

export const CenterPhoto = styled.img`
    width: 24%;
    height: 100%;

    object-fit: cover;

    background-color: rgba(0, 0, 0, 0.75);
`;

export const RightPhoto = styled.img`
    width: 24%;
    height: 100%;

    object-fit: cover;

    border-radius: 0 0 20px 0;
    background-color: rgba(0, 0, 0, 0.75);
`;

export const Infos = styled.div`
    width: 100%;
    height: 100px;
    margin-top: 15px;
`;

export const Name = styled.div`
    width: 100%;
    margin-bottom: 3px;

    display: flex;
    align-items: end;
    justify-content: flex-start;
`;

export const Title = styled.h1`
    margin-right: 5px;

    font-size: 18px;
    font-weight: 600;
`;

export const SubTitle = styled.h2`
    font-size: 15px;
    font-weight: 500;
`;

export const Category = styled.p`
    margin-bottom: 3px;
    font-size: 15px;
    font-weight: 500;
    font-style: italic;
    color: #7d7d7d;
`;

export const Address = styled.p`
    font-size: 13px;
    line-height: 20px;
    font-weight: 300;
    font-style: italic;
    color: #7d7d7d;
`;
