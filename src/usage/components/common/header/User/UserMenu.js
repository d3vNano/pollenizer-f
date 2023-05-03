import { useContext, useState } from "react";
import { AuthContext } from "../../../../context/auth";
import {
    Container,
    UserMenuIcon,
    UserMenuSign,
    Txt,
    UserType,
    UserName,
    Sign,
    Spacer,
} from "./user-menu-styles";

export function UserMenu() {
    const { userId, userName, photo, token, setLogin, setRegister } =
        useContext(AuthContext);

    return (
        <Container>
            {token ? (
                <UserMenuSign>
                    <Txt>
                        <UserType>user:</UserType>
                        <UserName>@{userName}</UserName>
                    </Txt>
                    <Spacer />
                    {photo !== "null" ? <>wee</> : <UserMenuIcon />}
                </UserMenuSign>
            ) : (
                <UserMenuSign>
                    <Txt>
                        <Sign onClick={() => setLogin(true)}>Login</Sign>
                        <Sign onClick={() => setRegister(true)}>Register</Sign>
                    </Txt>
                    <Spacer />
                    <UserMenuIcon />
                </UserMenuSign>
            )}
        </Container>
    );
}
