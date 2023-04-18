import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

export function Register({ setLogin, setRegister }) {
    const [userRegistration, setUserRegistration] = useState({
        user_name: "",
        cpf: "",
        email: "",
        phone: "",
        password: "",
    });

    const [nextForm, setNextForm] = useState(false);

    const [userAddress, setUserAddress] = useState({
        zip_code: "",
        street: "",
        number: "",
        complement: "",
        district: "",
        city: "",
        state: "",
    });

    const [disable, setDisable] = useState(false);

    const navigate = useNavigate();

    function handleRegister(e) {
        setUserRegistration({
            ...userRegistration,
            [e.target.name]: e.target.value,
        });
    }

    function handleAddress(e) {
        setUserAddress({
            ...userAddress,
            [e.target.name]: e.target.value,
        });
    }

    function signUpApp(e) {
        e.preventDefault();
    }

    async function toggleMode() {
        await setRegister(false);
        await setLogin(true);
    }

    const data = {
        cpf: userRegistration.cpf,
        user_name: userRegistration.user_name,
        email: userRegistration.email,
        phone: userRegistration.phone,
        password: userRegistration.password,
        zip_code: userAddress.zip_code,
        street: userAddress.street,
        number: userAddress.number,
        complement: userAddress.complement,
        district: userAddress.district,
        city: userAddress.city,
        state: userAddress.state,
    };

    function registration() {
        setDisable(true);
        const REGISTER_URL = `${process.env.REACT_APP_API_URL}/users/register`;

        axios
            .post(REGISTER_URL, data)
            .then((res) => {
                setDisable(false);
                alert("Congratulations, account created successfully!");
                toggleMode();
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
                <div className="exit">
                    <button onClick={() => setRegister(false)}>X</button>
                </div>
                <div className="toggleForms">
                    {nextForm ? (
                        <div className="address">
                            <div className="return">
                                <button onClick={() => toggleMode()}>
                                    {"<"}
                                </button>
                            </div>
                            <form className="address" onSubmit={signUpApp}>
                                <input
                                    name="zip_code"
                                    placeholder="ZIP CODE"
                                    type="text"
                                    value={userAddress.zip_code}
                                    onChange={handleAddress}
                                />
                                <input
                                    name="street"
                                    placeholder="STREET"
                                    type="text"
                                    value={userAddress.street}
                                    onChange={handleAddress}
                                />
                                <input
                                    name="number"
                                    placeholder="NUMBER"
                                    type="text"
                                    value={userAddress.number}
                                    onChange={handleAddress}
                                />
                                <input
                                    name="complement"
                                    placeholder="COMPLEMENT"
                                    type="text"
                                    value={userAddress.complement}
                                    onChange={handleAddress}
                                />
                                <input
                                    name="district"
                                    placeholder="DISTRICT"
                                    type="text"
                                    value={userAddress.district}
                                    onChange={handleAddress}
                                />
                                <input
                                    name="city"
                                    placeholder="CITY"
                                    type="text"
                                    value={userAddress.city}
                                    onChange={handleAddress}
                                />
                                <input
                                    name="state"
                                    placeholder="STATE"
                                    type="text"
                                    value={userAddress.state}
                                    onChange={handleAddress}
                                />
                                {disable ? (
                                    <button>Loading...</button>
                                ) : (
                                    <button
                                        onClick={registration}
                                        type="submit"
                                        disabled={disable}
                                    >
                                        Register
                                    </button>
                                )}
                            </form>
                        </div>
                    ) : (
                        <>
                            <h1>
                                Welcome to <br />
                                Pollenizer
                            </h1>
                            <form onSubmit={signUpApp}>
                                <input
                                    name="user_name"
                                    placeholder="USER NAME"
                                    type="username"
                                    value={userRegistration.user_name}
                                    onChange={handleRegister}
                                />
                                <input
                                    name="cpf"
                                    placeholder="CPF"
                                    type="text"
                                    value={userRegistration.cpf}
                                    onChange={handleRegister}
                                />
                                <input
                                    name="email"
                                    placeholder="E-MAIL"
                                    type="email"
                                    value={userRegistration.email}
                                    onChange={handleRegister}
                                />
                                <input
                                    name="phone"
                                    placeholder="PHONE"
                                    type="tel"
                                    value={userRegistration.phone}
                                    onChange={handleRegister}
                                />
                                <input
                                    name="password"
                                    placeholder="PASSWORD"
                                    type="password"
                                    value={userRegistration.password}
                                    onChange={handleRegister}
                                />
                                <button onClick={() => setNextForm(true)}>
                                    Next
                                </button>
                            </form>
                        </>
                    )}
                    <p onClick={toggleMode}>
                        Already have a login? <p>SignIn.</p>
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
    z-index: 9;

    background-color: rgba(255, 255, 255, 0.5);
`;

const Container = styled.div`
    width: 500px;
    height: 600px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }

    border-radius: 25px;
    box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.5);
    background-color: #fff;

    .exit {
        width: 100%;

        display: flex;
        justify-content: flex-end;

        > button {
            width: 40px;
            height: 40px;
            margin-top: 150px;
            padding: 0 20px;

            display: flex;
            justify-content: flex-end;

            position: fixed;
            top: 15px;

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
    }

    .toggleForms {
        width: 100%;
        margin-top: 120px;

        > h1 {
            font-size: 25px;
            font-weight: 500;
            text-align: center;
            line-height: 30px;
        }

        .address {
            margin-top: 50px;

            .return {
                width: 100%;

                display: flex;
                justify-content: flex-start;

                > button {
                    width: 40px;
                    height: 40px;
                    margin-top: 150px;
                    padding: 0 20px;

                    display: flex;
                    justify-content: flex-start;

                    position: fixed;
                    top: 15px;

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
            }
        }

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
