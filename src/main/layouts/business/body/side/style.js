import styled from "styled-components";

export const Container = styled.div`
    width: 35%;
    height: 100%;
    margin-left: 25px;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: sticky;
    right: 0%;
    top: 0%;

    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.25);

    spacer {
        width: 95%;
        height: 1px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #ddd;
    }
`;
