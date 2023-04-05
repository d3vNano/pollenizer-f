import * as s from "./style";

import MainHeader from "../../../components/common/header/main";
import CoverBanner from "../../business/header/Banner";

export default function Header() {
    return (
        <s.Container>
            <MainHeader />
            <CoverBanner />
        </s.Container>
    );
}
