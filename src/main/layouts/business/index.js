import { useParams } from "react-router-dom";
import * as s from "./style";

import HeaderScreen from "./header";
import BodyScreen from "./body";
import FooterScreen from "./footer";

export default function BusinessScreen() {
    const { id } = useParams();

    return (
        <s.Screen>
            <HeaderScreen id={id} />
            <BodyScreen />
            <>FOOTER</>
        </s.Screen>
    );
}
