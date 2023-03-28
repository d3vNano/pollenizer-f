import styled from "styled-components";

export const Container = styled.div`
    width: 60px;
    height: 25px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 2px solid #64636a;
    border-radius: 100px;

    background-image: linear-gradient(to right, #64636a 15%, #120415);

    cursor: pointer;

    elipse {
        width: 20px;
        height: 20px;
        margin: 0 1.5px;

        display: flex;
        align-items: center;
        justify-content: center;

        border: 2px solid white;
        border-radius: 100%;

        background-image: linear-gradient(95deg, #ddd, #fff 70%);

        icon {
            font-size: 13px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    h1 {
        width: 20px;
        font-size: 7px;
        font-weight: bolder;
        margin-right: 10px;

        color: #fff;
    }
`;
