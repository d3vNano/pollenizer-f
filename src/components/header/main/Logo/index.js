import * as s from "./style";

import * as gi from "react-icons/gi";

export default function Logo() {
    return (
        <s.Container>
            <gi.GiHoneycomb fontSize={30} color="orange" />
            <div>
                <h1>POLLENIZER</h1>
                <h2>Polinize-se</h2>
            </div>
        </s.Container>
    );
}
