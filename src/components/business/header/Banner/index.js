import * as s from "./style";
import * as ai from "react-icons/ai";

export default function CoverBanner() {
    return (
        <s.Container>
            <s.Button>
                <ai.AiFillCamera font-size={30} />
                Veja nosso trabalho
            </s.Button>
            <s.Img
                src="https://designwebsite.com.br/wp-content/uploads/2022/10/Criacao-de-logomarca-para-barbearia-barber-shop.jpg"
                alt="cover-banner"
            />
        </s.Container>
    );
}
