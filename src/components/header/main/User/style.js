import styled from "styled-components";

export const Container = styled.div`
    width: 175px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 100px;
    border: 1px solid #ddd;
    background-color: #fff;

    div {
        width: 75%;

        h1 {
            text-align: end;
            line-height: 18px;
            font-size: 14px;
            font-weight: 500;
            color: #717171;

            cursor: pointer;
        }

        h1:hover {
            color: red;
        }
    }

    spacer {
        width: 2px;
        height: 50%;
        margin: 0 15px;

        background-color: #ddd;
    }

    icon {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 35px;
        margin-right: 5px;
        color: #717171;
    }
`;
