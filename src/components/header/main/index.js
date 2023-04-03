import * as s from "./style";

import SearchBar from "./SearchBar";
import Logo from "./Logo";
import User from "./User";

export default function MainHeader() {
    return (
        <s.Container>
            <Logo />
            <SearchBar />
            <User />
        </s.Container>
    );
}
