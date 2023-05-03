import styled from "styled-components";
import * as gi from "react-icons/gi";
import * as ai from "react-icons/ai";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
    const business = [];
    const categories = [];

    const [filter, setFilter] = useState({ id: 0, label: "Todos" });
    const filteredBusiness =
        filter.id === 0
            ? business
            : business.filter((data) => data.category.id === filter.id);

    const cat = [{ id: 0, label: "Todos" }, ...categories];

    function onSelect() {
        return (category) => setFilter(category);
    }

    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    return (
        <>
            {login ? (
                <>
                    <Login>
                        <div>
                            <h1>LOGIN</h1>
                            <button onClick={() => setLogin(false)}>
                                VOLTAR
                            </button>
                        </div>
                    </Login>
                    <Main>
                        <div className="header">
                            <div className="logo">
                                <gi.GiHoneycomb fontSize={30} color="orange" />
                                <div>
                                    <h1>POLLENIZER</h1>
                                    <h2>Polinize-se</h2>
                                </div>
                            </div>
                            <div className="sign">
                                <div>
                                    <h1 onClick={() => setLogin(true)}>
                                        Entrar
                                    </h1>
                                    <h1 onClick={() => setRegister(true)}>
                                        Cadastrar
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <nav>
                            {cat.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() =>
                                        onSelect((category) =>
                                            setFilter(category)
                                        )
                                    }
                                >
                                    {category.label}
                                </button>
                            ))}
                        </nav>
                        <body>
                            {filteredBusiness.map((data) => (
                                <Link to={`/business/${data.id}`}>
                                    <Sample key={data.id} data={data}>
                                        <Business>
                                            <img src={data.logo} alt="logo" />
                                            <evalIcon>
                                                <ai.AiOutlineStar />
                                                <p>
                                                    {data.avaliation.quantity}
                                                </p>
                                            </evalIcon>
                                            <likeIcon>
                                                <p>{data.favorite.quantity}</p>
                                                <ai.AiOutlineHeart />
                                            </likeIcon>
                                        </Business>
                                        <Carrossel>
                                            <img
                                                className="a"
                                                src={data.photos.a}
                                                alt="a"
                                            />
                                            <spacer />
                                            <img
                                                className="b"
                                                src={data.photos.b}
                                                alt="b"
                                            />
                                            <spacer />
                                            <img
                                                className="c"
                                                src={data.photos.c}
                                                alt="c"
                                            />
                                            <spacer />
                                            <img
                                                className="d"
                                                src={data.photos.d}
                                                alt="d"
                                            />
                                        </Carrossel>
                                        <Infos>
                                            <h1>{data.title}</h1>
                                            <h2>{data.category.label}</h2>
                                            <p>
                                                {data.address.rua},{" "}
                                                {data.address.numero} -{" "}
                                                {data.address.bairro} -{" "}
                                                {data.address.complemento} -{" "}
                                                {data.address.CEP}
                                                <br />
                                                {data.address.cidade}/
                                                {data.address.estado}
                                            </p>
                                        </Infos>
                                    </Sample>
                                </Link>
                            ))}
                        </body>
                    </Main>
                </>
            ) : register ? (
                <>
                    <Register>
                        <div>
                            <h1>REGISTER</h1>
                            <button onClick={() => setRegister(false)}>
                                VOLTAR
                            </button>
                        </div>
                    </Register>
                    <Main>
                        <div className="header">
                            <div className="logo">
                                <gi.GiHoneycomb fontSize={30} color="orange" />
                                <div>
                                    <h1>POLLENIZER</h1>
                                    <h2>Polinize-se</h2>
                                </div>
                            </div>
                            <div className="sign">
                                <div>
                                    <h1 onClick={() => setLogin(true)}>
                                        Entrar
                                    </h1>
                                    <h1 onClick={() => setRegister(true)}>
                                        Cadastrar
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <nav>
                            {cat.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() =>
                                        onSelect((category) =>
                                            setFilter(category)
                                        )
                                    }
                                >
                                    {category.label}
                                </button>
                            ))}
                        </nav>
                        <body>
                            {filteredBusiness.map((data) => (
                                <Link to={`/business/${data.id}`}>
                                    <Sample key={data.id} data={data}>
                                        <Business>
                                            <img src={data.logo} alt="logo" />
                                            <evalIcon>
                                                <ai.AiOutlineStar />
                                                <p>
                                                    {data.avaliation.quantity}
                                                </p>
                                            </evalIcon>
                                            <likeIcon>
                                                <p>{data.favorite.quantity}</p>
                                                <ai.AiOutlineHeart />
                                            </likeIcon>
                                        </Business>
                                        <Carrossel>
                                            <img
                                                className="a"
                                                src={data.photos.a}
                                                alt="a"
                                            />
                                            <spacer />
                                            <img
                                                className="b"
                                                src={data.photos.b}
                                                alt="b"
                                            />
                                            <spacer />
                                            <img
                                                className="b"
                                                src={data.photos.c}
                                                alt="c"
                                            />
                                            <spacer />
                                            <img
                                                className="c"
                                                src={data.photos.d}
                                                alt="d"
                                            />
                                        </Carrossel>
                                        <Infos>
                                            <h1>{data.title}</h1>
                                            <h2>{data.category.label}</h2>
                                            <p>
                                                {data.address.rua},{" "}
                                                {data.address.numero} -{" "}
                                                {data.address.bairro} -{" "}
                                                {data.address.complemento} -{" "}
                                                {data.address.CEP}
                                                <br />
                                                {data.address.cidade}/
                                                {data.address.estado}
                                            </p>
                                        </Infos>
                                    </Sample>
                                </Link>
                            ))}
                        </body>
                    </Main>
                </>
            ) : (
                <Main>
                    <div className="header">
                        <div className="logo">
                            <gi.GiHoneycomb fontSize={30} color="orange" />
                            <div>
                                <h1>POLLENIZER</h1>
                                <h2>Polinize-se</h2>
                            </div>
                        </div>
                        <div className="sign">
                            <h1 onClick={() => setLogin(true)}>Entrar</h1>
                            <h1 onClick={() => setRegister(true)}>Cadastrar</h1>
                        </div>
                    </div>
                    <nav>
                        {cat.map((category) => (
                            <button
                                key={category.id}
                                onClick={() =>
                                    onSelect((category) => setFilter(category))
                                }
                            >
                                {category.label}
                            </button>
                        ))}
                    </nav>
                    <body>
                        {filteredBusiness.map((data) => (
                            <Link to={`/business/${data.id}`}>
                                <Sample key={data.id} data={data}>
                                    <Business>
                                        <img src={data.logo} alt="logo" />
                                        <evalIcon>
                                            <ai.AiOutlineStar />
                                            <p>{data.avaliation.quantity}</p>
                                        </evalIcon>
                                        <likeIcon>
                                            <p>{data.favorite.quantity}</p>
                                            <ai.AiOutlineHeart />
                                        </likeIcon>
                                    </Business>
                                    <Carrossel>
                                        <img
                                            className="a"
                                            src={data.photos.a}
                                            alt="a"
                                        />
                                        <spacer />
                                        <img
                                            className="b"
                                            src={data.photos.b}
                                            alt="b"
                                        />
                                        <spacer />
                                        <img
                                            className="c"
                                            src={data.photos.c}
                                            alt="c"
                                        />
                                        <spacer />
                                        <img
                                            className="d"
                                            src={data.photos.d}
                                            alt="d"
                                        />
                                    </Carrossel>
                                    <Infos>
                                        <h1>{data.title}</h1>
                                        <h2>{data.category.label}</h2>
                                        <p>
                                            {data.address.rua},{" "}
                                            {data.address.numero} -{" "}
                                            {data.address.bairro} -{" "}
                                            {data.address.complemento} -{" "}
                                            {data.address.CEP}
                                            <br />
                                            {data.address.cidade}/
                                            {data.address.estado}
                                        </p>
                                    </Infos>
                                </Sample>
                            </Link>
                        ))}
                    </body>
                </Main>
            )}
        </>
    );
}

const Login = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    z-index: 10;

    background-color: rgba(255, 255, 255, 0.5);
`;

const Register = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    z-index: 10;

    background-color: rgba(255, 255, 255, 0.5);
`;

const Main = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 80px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;

    .header {
        width: 100%;
        padding: 10px 0;

        display: flex;
        align-items: center;
        justify-content: space-between;

        border-bottom: 1px solid #ddd;
    }

    .logo {
        width: 175px;

        display: flex;
        justify-content: flex-start;

        div {
            margin-left: 15px;
        }
    }

    .sign {
        width: 175px;
        height: 100%;

        display: flex;
        justify-content: flex-end;

        h1 {
            text-align: end;
            margin-bottom: 5px;
            font-weight: 500;

            :hover {
                cursor: pointer;
            }

            :active {
                color: red;
                font-weight: bold;
            }
        }
    }

    nav {
        width: 100%;
        padding: 10px 0;

        display: flex;
        justify-content: space-between;

        border-bottom: 1px solid #ddd;

        button {
            width: 100px;

            font-size: 15px;
            font-weight: 600;

            border: none;
            outline: none;
            background: none;

            :hover {
                cursor: pointer;
            }

            :active {
                color: red;
                font-weight: bold;
            }
        }
    }

    body {
        width: 100%;
        padding: 15px 0;

        display: flex;
        flex-wrap: wrap;

        a {
            text-decoration: none;
        }
    }
`;

const Sample = styled.div`
    width: 400px;
    height: 500px;

    margin-left: 11px;
    margin-right: 11px;

    margin-bottom: 30px;
`;

const Business = styled.div`
    width: 100%;
    height: 295px;

    border-radius: 1px;
    position: relative;

    border-radius: 20px 20px 0 0;

    img {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.75);
        border-radius: 20px 20px 0 0;
    }

    likeIcon {
        font-size: 25px;
        font-weight: 600;
        color: #fff;

        position: absolute;
        right: 20px;
        top: 20px;

        display: flex;

        p {
            margin-right: 5px;
        }
    }

    evalIcon {
        font-size: 25px;
        font-weight: 600;
        color: #fff;

        position: absolute;
        left: 20px;
        top: 20px;

        display: flex;

        p {
            margin-left: 5px;
        }
    }
`;

const Carrossel = styled.div`
    width: 100%;
    height: 100px;
    margin-top: 4px;

    display: flex;
    justify-content: space-between;

    border-radius: 0 0 20px 20px;

    .a {
        width: 24%;
        height: 100%;
        border-radius: 0 0 0 20px;
        background-color: rgba(0, 0, 0, 0.75);
        object-fit: cover;
    }

    .b {
        width: 24%;
        height: 100%;

        background-color: rgba(0, 0, 0, 0.75);
    }

    .c {
        width: 24%;
        height: 100%;
        border-radius: 0 0 20px 0;
        background-color: rgba(0, 0, 0, 0.75);
    }

    spacer {
        width: 5px;
        height: 100%;

        background-color: #fff;
    }
`;

const Infos = styled.div`
    width: 100%;
    height: 100px;
    margin-top: 15px;

    h1 {
        font-size: 21px;
        font-weight: 600;
        margin-bottom: 5px;
    }

    h2 {
        font-size: 18px;
        margin-bottom: 5px;
    }
    p {
        font-size: 15px;
        line-height: 20px;
        font-weight: 300;
        font-style: italic;
        color: #7d7d7d;
    }
`;
