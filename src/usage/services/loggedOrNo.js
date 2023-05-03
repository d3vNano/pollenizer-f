export function loggedOrNo({ token, setLogin, navigate }, id) {
    if (!token) {
        setLogin(true);
    } else {
        navigate(`/business/${id}`);
    }
}
