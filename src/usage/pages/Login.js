import axios from "axios";
import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/auth";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

export function Login({ setLogin, setRegister }) {
    const {
        setUserId,
        setUserName,
        setPhoto,
        userLogin,
        setUserLogin,
        setToken,
    } = useContext(AuthContext);

    const [disable, setDisable] = useState(false);
    const navigate = useNavigate();

    function handleLogin(e) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value,
        });
    }

    function loginApp(e) {
        e.preventDefault();
    }

    async function toggleMode() {
        await setLogin(false);
        await setRegister(true);
    }

    function login() {
        setDisable(true);
        const LOGIN_URL = `${process.env.REACT_APP_API_URL}/auth/login`;

        axios
            .post(LOGIN_URL, userLogin)
            .then((res) => {
                setDisable(false);
                setUserId(res.data.user.id);
                setUserName(res.data.user.user_name);
                setPhoto(res.data.user.photo);
                setToken(res.data.token);
                alert(res.data.message);
                setLogin(false);
                navigate("/");
                localStorage.setItem("user_id", res.data.user.id);
                localStorage.setItem("user_name", res.data.user.user_name);
                localStorage.setItem("photo", res.data.user.photo);
                localStorage.setItem("token", res.data.token);
            })
            .catch((err) => {
                setDisable(false);
                alert(err.response.data.message);
                console.error(err.response);
            });
    }

    return (
        <Screen>
            <Container>
                <button onClick={() => setLogin(false)}>X</button>

                <h1>
                    Welcome to <br />
                    Pollenizer
                </h1>

                <div>
                    <form onSubmit={loginApp}>
                        <input
                            name="email"
                            placeholder="E-MAIL"
                            type="email"
                            value={userLogin.email}
                            onChange={handleLogin}
                        />
                        <input
                            name="password"
                            placeholder="PASSWORD"
                            type="password"
                            value={userLogin.password}
                            onChange={handleLogin}
                        />
                        {disable ? (
                            <button>Loading...</button>
                        ) : (
                            <button
                                onClick={login}
                                type="submit"
                                disabled={disable}
                            >
                                Login
                            </button>
                        )}
                    </form>
                    <p onClick={toggleMode}>
                        Don't have a login? <p>SignUp.</p>
                    </p>
                </div>
                <div className="spacer">
                    <div></div>
                    OU
                    <div></div>
                </div>
                <div className="auths">
                    <button>
                        <Github />
                        Conecte com Github
                    </button>
                    <button>
                        <Google />
                        Conecte com Google
                    </button>
                </div>
            </Container>
        </Screen>
    );
}

const Screen = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    z-index: 10;

    background-color: rgba(255, 255, 255, 0.5);
`;

const Container = styled.div`
    width: 500px;
    height: 600px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 25px;
    box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.5);
    background-color: #fff;

    > button {
        width: 40px;
        height: 40px;

        position: fixed;
        top: 158px;
        right: 685px;

        font-size: 20px;
        font-weight: bold;

        border: #fff;
        background: none;

        :hover {
            font-size: 15px;
            cursor: pointer;
        }

        :active {
            font-size: 20px;
        }
    }

    > h1 {
        margin-top: 50px;
        font-size: 25px;
        font-weight: 500;
        text-align: center;
        line-height: 30px;
    }

    > div {
        width: 100%;

        form {
            width: 100%;
            padding: 10px 65px;

            display: flex;
            align-items: center;
            flex-direction: column;

            input {
                width: 100%;
                height: 45px;
                padding-left: 15px;
                margin-bottom: 8px;

                border: 2px solid #ddd;
                border-radius: 6px;
                outline: none;
            }

            > button {
                width: 100%;
                height: 45px;
                margin-top: 20px;

                font-size: 20px;
                font-weight: 500;
                color: #fff;

                border: none;
                border-radius: 6px;
                outline: none;
                background-color: #d6a100;
            }
        }

        > p {
            margin-top: 10px;
            font-size: 15px;
            text-align: center;

            display: flex;
            align-items: center;
            justify-content: center;

            :hover {
                cursor: pointer;
            }

            > p {
                margin-left: 7px;
                font-weight: bold;
                font-style: italic;
            }
        }
    }

    .spacer {
        width: 95%;
        margin: 25px 0;

        display: flex;
        align-items: center;
        justify-content: center;

        text-align: center;

        div {
            width: 100%;
            height: 1px;
            margin: 0 10px;
            background-color: #ddd;
        }
    }

    .auths {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > button {
            width: 90%;
            height: 45px;
            margin-bottom: 15px;

            display: flex;
            align-items: center;
            justify-content: center;

            position: relative;

            border: 1px solid #ddd;
            border-radius: 6px;
            outline: none;
            background: none;

            font-size: 15px;
            font-weight: 600;

            :hover {
                cursor: pointer;
            }
        }
    }
`;

const Google = styled(FcGoogle)`
    font-size: 20px;

    position: absolute;
    left: 40px;
`;

const Github = styled(BsGithub)`
    font-size: 20px;

    position: absolute;
    left: 40px;
`;
