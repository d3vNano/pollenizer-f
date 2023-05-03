import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../context/auth";
import { HeaderScreen, BodyScreen, FooterScreen } from "../../layouts/index";
import { Screen } from "./main-screen-styles";

import { renderBusinessCategories } from "../../repositories/categories";
import { renderBusinessData } from "../../repositories/business";

import { Login, Register } from "../../pages";

export function MainScreen() {
    const [categories, setCategories] = useState([]);
    const [business, setBusiness] = useState([]);

    const { login, setLogin, register, setRegister } = useContext(AuthContext);

    const [filter, setFilter] = useState({ id: 0, label: "Todos" });
    const filteredBusiness =
        filter.id === 0
            ? business
            : business.filter((data) => data.category.id === filter.id);

    useEffect(() => {
        renderBusinessCategories({ setCategories });
        renderBusinessData({ setBusiness });
    }, []);

    return (
        <Screen>
            {login ? (
                <Login setLogin={setLogin} setRegister={setRegister} />
            ) : register ? (
                <Register setLogin={setLogin} setRegister={setRegister} />
            ) : (
                <></>
            )}
            <HeaderScreen
                categories={[{ id: 0, label: "Todos" }, ...categories]}
                onSelect={(category) => setFilter(category)}
            />
            <BodyScreen
                filteredBusiness={filteredBusiness}
                setLogin={setLogin}
                setRegister={setRegister}
            />
            <FooterScreen />
        </Screen>
    );
}
