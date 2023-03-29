import * as s from "./style";

import MainHeader from "../../../components/header/main";
import MenuHeader from "../../../components/header/menu";
import FilterHeader from "../../../components/header/filter";

export default function Header() {
    return (
        <s.Screen>
            <MainHeader />
            <MenuHeader />
            <FilterHeader />
        </s.Screen>
    );
}
