import { Screen } from "./body-screen-styles";
import { BodyContent } from "../../../components/main";

export function BodyScreen({ filteredBusiness, setLogin, setRegister }) {
    return (
        <Screen>
            <BodyContent
                filteredBusiness={filteredBusiness}
                setLogin={setLogin}
                setRegister={setRegister}
            />
        </Screen>
    );
}
