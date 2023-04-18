import * as s from "./style";

import MainHeader from "../../common/header/main";
import CoverBanner from "./Banner";

export default function Header() {
    return (
        <s.Container>
            <MainHeader />
            <CoverBanner />
        </s.Container>
    );
}
