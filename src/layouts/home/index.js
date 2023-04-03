import { useState } from "react";

import HeaderScreen from "./header";
import BodyScreen from "./body";
import FooterScreen from "./footer";

import * as s from "./style";

import categories from "../../config/database/categorias.json";
import business from "../../config/database/itens.json";

export default function HomeScreen() {
    const [filter, setFilter] = useState({ id: 0, label: "Todos" });
    const filteredBusiness =
        filter.id === 0
            ? business
            : business.filter((data) => data.category.id === filter.id);

    return (
        <s.Container>
            <HeaderScreen
                categories={[{ id: 0, label: "Todos" }, ...categories]}
                onSelect={(category) => setFilter(category)}
            />
            <BodyScreen filteredBusiness={filteredBusiness} />
            <FooterScreen />
        </s.Container>
    );
}
