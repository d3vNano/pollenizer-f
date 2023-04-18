import * as s from "./style";

import Map from "./map";
import Professionals from "./professionals";
import Date from "./date";
import Summary from "./summary";
import Finish from "./finishing";

export default function SideContent() {
    return (
        <s.Container>
            <Map />
            {true ? <Professionals /> : <></>}
            <spacer />
            <Date />
            <spacer />
            <Summary />
            <spacer />
            <Finish />
        </s.Container>
    );
}
