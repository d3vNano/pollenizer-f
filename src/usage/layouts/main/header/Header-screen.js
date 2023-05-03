import { CommonHeader } from "../../../components/common/index";
import { FilterMenu } from "../../../components/main/header/FilterMenu/FilterMenu";
import { Screen } from "./header-screen-styles";

export function HeaderScreen({ categories, onSelect }) {
    return (
        <Screen>
            <FilterMenu categories={categories} onSelect={onSelect} />
        </Screen>
    );
}
