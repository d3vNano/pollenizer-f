import * as s from "./style";

import * as ai from "react-icons/ai";

export default function Sample({ data }) {
    const { id, title, address, category, logo, photos, favorite, avaliation } =
        data;

    return (
        <s.Container>
            <s.Business>
                <img src={logo} />
                <evalIcon>
                    <ai.AiOutlineStar />
                    <p>{avaliation.quantity}</p>
                </evalIcon>
                <likeIcon>
                    <p>{favorite.quantity}</p>
                    <ai.AiOutlineHeart />
                </likeIcon>
            </s.Business>
            <s.Carrossel>
                <img className="a" src={photos.a} />
                <spacer />
                <img className="b" src={photos.b} />
                <spacer />
                <img className="b" src={photos.c} />
                <spacer />
                <img className="c" src={photos.d} />
            </s.Carrossel>
            <s.Infos>
                <h1>{title}</h1>
                <h2>{category.label}</h2>
                <p>
                    {address.rua}, {address.numero} - {address.bairro} -{" "}
                    {address.complemento} - {address.CEP}
                    <br />
                    {address.cidade}/{address.estado}
                </p>
            </s.Infos>
        </s.Container>
    );
}
