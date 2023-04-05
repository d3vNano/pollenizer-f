import * as s from "./style";
import { ClosedFooter, OpenFooter } from "../../../components/home/footer";

export default function FooterScreen() {
    return (
        <s.Screen>
            <>{false ? <OpenFooter /> : <ClosedFooter />}</>
        </s.Screen>
    );
}
