import * as s from "./style";
import * as ai from "react-icons/ai";
import MainContent from "./main";
import SideContent from "./side";
import { Link } from "react-router-dom";

export default function BodyScreen() {
    const a = "Barbearia";
    const b = "Savana Barbershop";

    return (
        <s.Screen>
            <s.Navigation>
                <Link to="/home">
                    <ai.AiFillHome font-size={18} />
                </Link>
                / {a} / {b}
            </s.Navigation>
            <s.Content>
                <MainContent />
                <SideContent />
            </s.Content>
        </s.Screen>
    );
}
