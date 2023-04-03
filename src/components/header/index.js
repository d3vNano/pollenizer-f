import { useState } from "react";
import * as s from "./style";

import MainHeader from "./main";
import MenuHeader from "./menu";
import FilterHeader from "./filter";

export default function Header({ categories, onSelect }) {
    return (
        <s.Container>
            <MainHeader />
            <MenuHeader categories={categories} onSelect={onSelect} />
            {/*            <FilterHeader />*/}
        </s.Container>
    );
}
