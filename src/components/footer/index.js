import * as s from "./style";

import * as fa from "react-icons/fa";
import * as gi from "react-icons/gi";

import ThemeIcon from "./ThemeIcon";

export function ClosedFooter() {
    return (
        <s.Close>
            <nav>
                <p>© 2023 Autoral, Inc.</p>
                <spacer>•</spacer>
                <p>Privacidade</p>
                <spacer>•</spacer>
                <p>Termos</p>
                <spacer>•</spacer>
                <p>Mapa do site</p>
                <spacer>•</spacer>
                <p>Informações da empresa</p>
                <spacer>•</spacer>
                <p>Serviços</p>
            </nav>
            <lang>
                <flag>
                    <gi.GiBrazilFlag color="yellow" />
                </flag>
                <p>
                    Português (BR) R$ BRL{" "}
                    <icon>
                        <fa.FaAngleDown />
                    </icon>
                </p>
            </lang>
            <ThemeIcon />
            <next>
                <p>Recursos e mais</p>
                <fa.FaAngleUp />
            </next>
        </s.Close>
    );
}

export function OpenFooter() {
    return (
        <s.Open>
            <>wee2</>
        </s.Open>
    );
}
