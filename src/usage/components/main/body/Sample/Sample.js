import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/auth";
import { loggedOrNo } from "../../../../services/loggedOrNo";

import {
    Container,
    Card,
    Images,
    Assessments,
    Favorites,
    Ammount,
    Events,
    Logo,
    LeftPhoto,
    CenterPhoto,
    RightPhoto,
    EvalIcon,
    LikeIcon,
    Carrossel,
    Name,
    Infos,
    Title,
    SubTitle,
    Category,
    Address,
} from "./sample-styles";

export function Sample({ data, setLogin }) {
    const {
        id,
        logo,
        title,
        sub_title,
        category,
        photos,
        address,
        assessments,
        favorites,
    } = data;

    const logoType = "dark";

    const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <Container>
            <Events logoType={title}>
                <Assessments>
                    <EvalIcon />
                    <Ammount>0.0</Ammount>
                </Assessments>
                <Favorites>
                    <Ammount>0000</Ammount>
                    <LikeIcon />
                </Favorites>
            </Events>
            <Card
                onClick={() =>
                    loggedOrNo({ token, setLogin, navigate }, data.id)
                }
            >
                <Images>
                    <Logo src={logo} alt="logo" />
                    <Carrossel>
                        <LeftPhoto src={photos.a} alt="photo" />
                        <CenterPhoto src={photos.b} alt="photo" />
                        <CenterPhoto src={photos.c} alt="photo" />
                        <RightPhoto src={photos.d} alt="photo" />
                    </Carrossel>
                </Images>
                <Infos>
                    <Name>
                        <Title>{title}</Title>
                        <SubTitle>- {sub_title}</SubTitle>
                    </Name>
                    <Category>{category.label}</Category>
                    <Address>
                        {address.street}, {address.number}{" "}
                        {address.complement ? ` - ${address.complement} ` : ""}-{" "}
                        {address.district} - {address.zip_code} - {address.city}
                        /{address.state}
                    </Address>
                </Infos>
            </Card>
        </Container>
    );
}
