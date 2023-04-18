import { useParams } from "react-router-dom";

export function BusinessPage() {
    const { businessId } = useParams();

    return (
        <>
            <>BUSINESS {businessId}</>
        </>
    );
}
