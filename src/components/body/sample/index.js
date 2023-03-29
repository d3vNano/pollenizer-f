import * as s from "./style";

import * as ai from "react-icons/ai";

export default function Sample() {
    return (
        <s.Container>
            <s.Business>
                <img />
                <evalIcon>
                    <ai.AiOutlineStar />
                    <p>4,95</p>
                </evalIcon>
                <likeIcon>
                    <p>204</p>
                    <ai.AiOutlineHeart />
                </likeIcon>
            </s.Business>
            <s.Carrossel>
                <img1 />
                <spacer />
                <img2 />
                <spacer />
                <img2 />
                <spacer />
                <img3 />
            </s.Carrossel>
            <s.Infos>
                <h1>Nome da Empresa - Blablabla</h1>
                <h2>Categoria</h2>
                <p>Endeço da empresa/serviço e blablabla</p>
            </s.Infos>
        </s.Container>
    );
}
