import { Container } from "./body-content-styles";
import { Sample } from "../Sample/Sample";

export function BodyContent({ filteredBusiness, setLogin }) {
    return (
        <Container>
            {filteredBusiness.map((data) => (
                <Sample key={data.id} data={data} setLogin={setLogin} />
            ))}
        </Container>
    );
}
