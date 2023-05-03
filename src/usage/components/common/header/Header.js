import { Pollenizer, UserMenu } from "../index";
import { Container } from "./header-styles";

export function CommonHeader() {
    return (
        <Container>
            <Pollenizer />
            <>SEARCH</>
            <UserMenu />
        </Container>
    );
}
