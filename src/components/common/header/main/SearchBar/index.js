import * as s from "./style";

import * as fi from "react-icons/fi";
import * as bi from "react-icons/bi";

export default function SearchBar() {
    return (
        <s.Container>
            <s.FirstSearch>
                <bi.BiBookmarkAlt />
                <input placeholder="Encontre serviços" />
                <spacer />
            </s.FirstSearch>
            <s.Target>
                <bi.BiTargetLock />
            </s.Target>
        </s.Container>
    );
}
