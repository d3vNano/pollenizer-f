import * as s from "./style";
import * as bs from "react-icons/bs";

export default function ThemeIcon() {
    return (
        <s.Container>
            <elipse>
                <icon>
                    <bs.BsMoonStarsFill />
                </icon>
            </elipse>
            <h1>DARK MODE</h1>
        </s.Container>
    );
}
