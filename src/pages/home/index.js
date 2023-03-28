import styled from "styled-components";

import HomeScreen from "../../layouts/home";

export default function HomePage() {
    return (
        <Screen>
            <HomeScreen />
        </Screen>
    );
}

export const Screen = styled.div`
    width: 100%;
    height: 100%;
`;
