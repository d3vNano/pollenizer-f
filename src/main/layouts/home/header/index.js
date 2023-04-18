import * as s from "./style";

import Header from "../../../components/home/header";

export default function HeaderScreen({ categories, onSelect }) {
    return (
        <s.Screen>
            <Header categories={categories} onSelect={onSelect} />
        </s.Screen>
    );
}
