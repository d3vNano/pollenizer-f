import axios from "axios";

export function renderBusinessCategories({ setCategories }) {
    const CATEGORIES_URL = `${process.env.REACT_APP_API_URL}/business/categories`;

    const promise = axios
        .get(CATEGORIES_URL)
        .then((res) => {
            setCategories(res.data);
        })
        .catch((error) => {
            console.error(error);
        });

    return promise;
}
