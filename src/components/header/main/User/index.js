import * as s from "./style";
import * as fa from "react-icons/fa";

export default function User() {
    return (
        <s.Container>
            <div>
                <h1>Entre</h1>
                <h1>Cadastre-se</h1>
            </div>
            <spacer />
            <icon>
                <fa.FaUserCircle />
            </icon>
        </s.Container>
    );
}
