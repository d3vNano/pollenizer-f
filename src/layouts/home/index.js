import Header from "./header";
import Body from "./body";
import Footer from "./footer";

import * as s from "./style";

export default function HomeScreen() {
    return (
        <s.Container>
            <Header />
            <Body />
            <Footer />
        </s.Container>
    );
}
