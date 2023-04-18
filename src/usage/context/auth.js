import { useState, createContext } from "react";

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const [userRegistration, setUserRegistration] = useState({
        user_name: "",
        cpf: "",
        email: "",
        phone: "",
        password: "",
    });

    const [userId, setUserId] = useState(localStorage.getItem("user_id"));
    const [userName, setUserName] = useState(localStorage.getItem("user_name"));
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [photo, setPhoto] = useState(localStorage.getItem("photo"));
    const [userLogin, setUserLogin] = useState({ email: "", password: "" });

    return (
        <AuthContext.Provider
            value={{
                userId,
                setUserId,
                userName,
                setUserName,
                photo,
                setPhoto,
                userLogin,
                setUserLogin,
                userRegistration,
                setUserRegistration,
                token,
                setToken,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
