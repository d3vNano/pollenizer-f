import * as s from "./style";
import * as fa from "react-icons/fa";

export default function Summary() {
    const a = {
        dia: "10",
        mes: "março",
        ano: "2023",
        sem: "sexta-feira",
        hora: "9",
        min: "00",
        periodo: "manhã",
    };

    const { dia, mes, ano, sem, hora, min, periodo } = a;

    return (
        <s.Container>
            <s.Photo>{false ? <img /> : <fa.FaUserTie />}</s.Photo>
            <s.Infos>
                <s.Name>Nome do profissional</s.Name>
                <s.DateResum>
                    {dia.toUpperCase()} DE {mes.toUpperCase()} DE{" "}
                    {ano.toUpperCase()}, {sem.toUpperCase()} ÁS{" "}
                    {hora.toUpperCase()}:{min.toUpperCase()} DA{" "}
                    {periodo.toUpperCase()}
                </s.DateResum>
            </s.Infos>
        </s.Container>
    );
}
