import styled from "styled-components";

import { ClosedFooter, OpenFooter } from "../../../components/footer";

export default function Footer() {
    return (
        <Screen>
            <>{false ? <OpenFooter /> : <ClosedFooter />}</>
        </Screen>
    );
}

const Screen = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    position: fixed;
    left: 0;
    bottom: 0;

    background-color: #fff;
    border-top: 1.5px solid #ddd;
`;
