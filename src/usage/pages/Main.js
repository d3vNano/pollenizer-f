import axios from "axios";
import styled from "styled-components";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Content, Login, Register } from "./index";

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

    function renderBusiness() {
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
        renderBusiness();
    }, []);

    return (
        <>
            {login ? (
                <>
                    <Login setLogin={setLogin} setRegister={setRegister} />
                    <Content
                        categories={[{ id: 0, label: "Todos" }, ...categories]}
                        onSelect={(category) => setFilter(category)}
                        filteredBusiness={filteredBusiness}
                        setLogin={setLogin}
                        setRegister={setRegister}
                    />
                </>
            ) : register ? (
                <>
                    <Register setLogin={setLogin} setRegister={setRegister} />
                    <Content
                        categories={[{ id: 0, label: "Todos" }, ...categories]}
                        onSelect={(category) => setFilter(category)}
                        filteredBusiness={filteredBusiness}
                        setLogin={setLogin}
                        setRegister={setRegister}
                    />
                </>
            ) : (
                <Content
                    categories={[{ id: 0, label: "Todos" }, ...categories]}
                    onSelect={(category) => setFilter(category)}
                    filteredBusiness={filteredBusiness}
                    setLogin={setLogin}
                    setRegister={setRegister}
                />
            )}
        </>
    );
}
