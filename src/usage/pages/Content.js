import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../context/auth";
import * as gi from "react-icons/gi";
import * as ai from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

export function Content({
    categories,
    onSelect,
    filteredBusiness,
    setLogin,
    setRegister,
}) {
    const { userId, userName, photo, token } = useContext(AuthContext);
    const navigate = useNavigate();

    function testFunc(id) {
        if (!token) {
            setLogin(true);
        } else {
            navigate(`/business/${id}`);
        }
    }

    return (
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
                    {token ? (
                        <div className="user">
                            <div>
                                <p>user:</p>
                                <h1>@{userName}</h1>
                            </div>
                            <UserMenu />
                        </div>
                    ) : (
                        <div className="log">
                            <div className="logReg">
                                <h1 onClick={() => setLogin(true)}>Entrar</h1>
                                <h1 onClick={() => setRegister(true)}>
                                    Cadastrar
                                </h1>
                            </div>
                            <div className="spacer"></div>
                            <UserMenu />
                        </div>
                    )}
                </div>
            </div>
            <nav>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => onSelect(category)}
                    >
                        {category.label}
                    </button>
                ))}
            </nav>
            <body>
                {filteredBusiness.map((data) => (
                    <div onClick={() => testFunc(data.id)}>
                        <Sample key={data.id} data={data}>
                            <Business>
                                <img src={data.logo} />
                                {/*
                                <evalIcon>
                                    <ai.AiOutlineStar />
                                    <p>{data.assessments}</p>
                                </evalIcon>
                                <likeIcon>
                                    <p>{data.favorites}</p>
                                    <ai.AiOutlineHeart />
                                </likeIcon>
                                */}
                            </Business>
                            <Carrossel>
                                <img className="a" src={data.photos.a} />
                                <spacer />
                                <img className="b" src={data.photos.b} />
                                <spacer />
                                <img className="b" src={data.photos.c} />
                                <spacer />
                                <img className="c" src={data.photos.d} />
                            </Carrossel>
                            <Infos>
                                <h1>{data.title}</h1>
                                <h2>{data.category.label}</h2>
                                <p>
                                    {data.address.street}, {data.address.number}{" "}
                                    - {data.address.district} -{" "}
                                    {data.address.complement} -{" "}
                                    {data.address.zip_code}
                                    <br />
                                    {data.address.city}/{data.address.state}
                                </p>
                            </Infos>
                        </Sample>
                    </div>
                ))}
            </body>
        </Main>
    );
}

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

        border: 1px solid #ddd;
        border-radius: 500px;

        .user {
            display: flex;
            align-items: center;
            justify-content: center;

            div {
                p {
                    text-align: end;
                    font-size: 11px;
                    font-weight: 600;
                    font-style: italic;
                }
            }

            h1 {
                text-align: end;
                font-weight: 500;
            }

            :hover {
                cursor: pointer;
            }

            :active {
                color: red;
                font-weight: bold;
            }
        }

        .log {
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

const UserMenu = styled(FaUserCircle)`
    font-size: 25px;
    margin-left: 10px;
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
