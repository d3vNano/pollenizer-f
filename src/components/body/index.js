import { Link } from "react-router-dom";

import * as s from "./style";
import Sample from "./sample";

export default function MainBody({ filteredBusiness }) {
    const bla = true;

    return (
        <s.Container bla={bla}>
            {filteredBusiness.map((data) => (
                <Link to={`/access/${data.id}`}>
                    <Sample key={data.id} data={data} />
                </Link>
            ))}
        </s.Container>
    );
}
