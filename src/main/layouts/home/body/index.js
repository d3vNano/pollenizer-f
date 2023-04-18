import * as s from "./style";

import MainBody from "../../../components/home/body";

export default function BodyScreen({ filteredBusiness }) {
    return (
        <s.Screen>
            <MainBody filteredBusiness={filteredBusiness} />
        </s.Screen>
    );
}
