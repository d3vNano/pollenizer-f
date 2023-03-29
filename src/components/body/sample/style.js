import styled from "styled-components";

export const Container = styled.div`
    width: 400px;
    height: 500px;

    margin-bottom: 30px;
`;

export const Business = styled.div`
    width: 100%;
    height: 295px;

    border-radius: 1px;
    position: relative;

    border-radius: 20px 20px 0 0;

    img {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.75);
        border-radius: 20px 20px 0 0;
    }

    likeIcon {
        font-size: 25px;
        font-weight: 600;
        color: #fff;

        position: absolute;
        right: 20px;
        top: 20px;

        display: flex;

        p {
            margin-right: 5px;
        }
    }

    evalIcon {
        font-size: 25px;
        font-weight: 600;
        color: #fff;

        position: absolute;
        left: 20px;
        top: 20px;

        display: flex;

        p {
            margin-left: 5px;
        }
    }
`;

export const Carrossel = styled.div`
    width: 100%;
    height: 100px;
    margin-top: 4px;

    display: flex;
    justify-content: space-between;

    border-radius: 0 0 20px 20px;

    img1 {
        width: 25%;
        height: 100%;
        border-radius: 0 0 0 20px;
        background-color: rgba(0, 0, 0, 0.75);
    }

    img2 {
        width: 25%;
        height: 100%;

        background-color: rgba(0, 0, 0, 0.75);
    }

    img3 {
        width: 25%;
        height: 100%;
        border-radius: 0 0 20px 0;
        background-color: rgba(0, 0, 0, 0.75);
    }

    spacer {
        width: 5px;
        height: 100%;

        background-color: #fff;
    }
`;

export const Infos = styled.div`
    width: 100%;
    height: 100px;
    margin-top: 15px;

    h1 {
        font-size: 21px;
        font-weight: 600;
        margin-bottom: 5px;
    }

    h2 {
        font-size: 18px;
        margin-bottom: 5px;
    }
    p {
        font-size: 15px;
        font-weight: 300;
        font-style: italic;
        color: #7d7d7d;
    }
`;
