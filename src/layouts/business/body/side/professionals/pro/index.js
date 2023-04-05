import * as s from "./style";

import * as tb from "react-icons/tb";
import * as fa from "react-icons/fa";

export default function Pro() {
    return (
        <s.Container>
            <s.Option>
                <tb.TbForbid2 fontSize={55} />
                <p>Sem preferência</p>
            </s.Option>
            <s.Option>
                <s.Icon>
                    <fa.FaUserTie fontSize={45} />
                </s.Icon>
                <p>Nome do profissional</p>
            </s.Option>
            <s.Option>
                <s.Icon>
                    <fa.FaUserTie fontSize={45} />
                </s.Icon>
                <p>Nome do profissional</p>
            </s.Option>
        </s.Container>
    );
}
