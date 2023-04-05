import styled from "styled-components";

export const Close = styled.div`
    width: 100%;
    height: 40px;
    margin: 0 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        align-items: center;
    }

    copy {
        font-size: 12px;
        font-weight: 500;
    }

    p {
        font-size: 12px;
        font-weight: 500;

        cursor: pointer;
    }

    spacer {
        margin: 0 10px;
    }

    lang {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 10px;

        flag {
            width: 21px;
            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 2px;
            margin-right: 10px;
            background-color: #73af00;
        }

        p {
            display: flex;
            align-items: center;
            justify-content: center;

            font-weight: 600;

            icon {
                display: flex;
                align-items: center;
                justify-content: center;
                color: #ddd;
            }
        }
    }

    more {
        display: flex;
        align-items: center;
        margin-left: 10px;

        cursor: pointer;
    }
`;

export const Open = styled.div``;
