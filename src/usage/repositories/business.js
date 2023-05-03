import axios from "axios";

export function renderBusinessData({ setBusiness }) {
    const BUSINESS_URL = `${process.env.REACT_APP_API_URL}/business/data`;
    axios
        .get(BUSINESS_URL)
        .then((res) => {
            setBusiness(res.data);
        })
        .catch((error) => {
            console.error(error);
        });
}

export async function renderBusiness(businessId, setBusiness) {
    const BUSINESS_URL = `${process.env.REACT_APP_API_URL}/business/${businessId}`;

    const promisse = await axios
        .get(BUSINESS_URL)
        .then((res) => {
            setBusiness(res.data);
        })
        .catch((error) => {
            console.error(error);
        });
}
