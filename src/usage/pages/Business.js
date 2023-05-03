import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { renderBusiness } from "../repositories/business";

export function BusinessPage() {
    const { businessId } = useParams();
    const [business, setBusiness] = useState({
        id: 0,
        title: "",
        sub_title: "",
        logo: "",
        photos: {},
        category: {},
        address: {},
        services: [],
        assessments: [],
        favorites: [],
    });

    useEffect(() => {
        renderBusiness(businessId, setBusiness);
    }, []);

    const {
        id,
        title,
        sub_title,
        logo,
        photos,
        category,
        address,
        services,
        assessments,
        favorites,
    } = business;

    return (
        <>
            <>{category.label}</>
        </>
    );
}
