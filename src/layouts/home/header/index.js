import styled from "styled-components";

function Header() {
    return (
        <Screen>
            <Primary>
                <>PRINCIPAL</>
            </Primary>
            <Filter>
                <>FILTROS</>
            </Filter>
            <SecFilter>
                <>FILTROS APLICADOS</>
            </SecFilter>
        </Screen>
    );
}

export default Header;

const Screen = styled.div`
    width: 100%;

    position: fixed;
    top: 0;
    left: 0;
`;

const Primary = styled.div`
    width: 100%;
    height: 80px;

    display: flex;
    align-items: center;

    background-color: #fff;
    border-bottom: 1.5px solid #ddd;
`;

const Filter = styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;

    background-color: #fff;
    border-bottom: 1.5px solid #ddd;
`;

const SecFilter = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;

    background-color: #fff;
    border-bottom: 1.5px solid #ddd;
`;
