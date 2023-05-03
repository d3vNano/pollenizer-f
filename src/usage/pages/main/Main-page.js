import axios from "axios";

import { useEffect, useState } from "react";

import { Content, Login, Register } from "../index";

import { MainScreen } from "../../layouts";

import { Page } from "./main-page-styles";

export function MainPage() {
    return (
        <Page>
            <MainScreen />
        </Page>
    );
}
/*
export function MainPage() {
    const [categories, setCategories] = useState([]);
    const [business, setBusiness] = useState([]);

    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    const [filter, setFilter] = useState({ id: 0, label: "Todos" });
    const filteredBusiness =
        filter.id === 0
            ? business
            : business.filter((data) => data.category.id === filter.id);

    function renderBusinessCategories() {
        const CATEGORIES_URL = `${process.env.REACT_APP_API_URL}/business/categories`;

        axios
            .get(CATEGORIES_URL)
            .then((res) => {
                setCategories(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function renderBusinessData() {
        const BUSINESS_URL = `${process.env.REACT_APP_API_URL}/business/data`;
        axios
            .get(BUSINESS_URL)
            .then((res) => {
                setBusiness(res.data);
            })
            .catch();
    }

    useEffect(() => {
        renderBusinessCategories();
        renderBusinessData();
    }, []);

    return (
        <>
            {login ? (
                <Login setLogin={setLogin} setRegister={setRegister} />
            ) : register ? (
                <Register setLogin={setLogin} setRegister={setRegister} />
            ) : (
                <></>
            )}

            <Content
                categories={[{ id: 0, label: "Todos" }, ...categories]}
                onSelect={(category) => setFilter(category)}
                filteredBusiness={filteredBusiness}
                setLogin={setLogin}
                setRegister={setRegister}
            />
        </>
    );
}
*/
