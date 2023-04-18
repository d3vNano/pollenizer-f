import * as s from "./style";
import * as fi from "react-icons/fi";

export default function Infos() {
    return (
        <s.Container>
            <s.Logo>
                <img src="https://designwebsite.com.br/wp-content/uploads/2022/10/Criacao-de-logomarca-para-barbearia-barber-shop.jpg" />
            </s.Logo>
            <s.Infos>
                <h1>Savana Barbershop</h1>
                <p>
                    Rua Tal e coisa, 999 - Bairro Wee - 00000-000 -
                    Cidade/Estado
                </p>
            </s.Infos>
            <s.Locale>
                <fi.FiNavigation font-size={30} color="#7d7d7d" />
            </s.Locale>
        </s.Container>
    );
}
