import Header from "./header";
import Body from "./body";
import Footer from "./footer";

import styled from "styled-components";

export default function HomeScreen() {
    return (
        <Container>
            <Header />
            <Body />
            <Footer />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
`;
