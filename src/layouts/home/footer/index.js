import * as s from "./style";
import { ClosedFooter, OpenFooter } from "../../../components/footer";

export default function Footer() {
    return (
        <s.Screen>
            <>{false ? <OpenFooter /> : <ClosedFooter />}</>
        </s.Screen>
    );
}
