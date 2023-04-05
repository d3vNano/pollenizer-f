import * as s from "./style";
import * as fa from "react-icons/fa";
import Infos from "./infos";

export default function Map() {
    return (
        <s.Container>
            <fa.FaMapPin font-size={55} />

            <Infos />
        </s.Container>
    );
}
