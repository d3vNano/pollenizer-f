import * as s from "./style";
import Orders0 from "./orders0";
import Orders1 from "./orders1";
import ChosenPro from "./chosenprofessional";

export default function Summary() {
    return (
        <s.Container>
            <s.Title>RESUMO DA COMPRA</s.Title>
            {/*AO FAZER O MAP, DECIDIR EM IMPAR/PAR PARA CHAMAR*/}
            <Orders0 />
            <Orders1 />
            <Orders0 />
            <Orders1 />
            <ChosenPro />
        </s.Container>
    );
}
