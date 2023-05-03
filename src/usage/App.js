import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import { MainPage, BusinessPage } from "./pages";
import { AuthProvider } from "./context/auth";
import { CommonHeader } from "./components/common";

export default function App() {
    return (
        <AuthProvider>
            <CommonHeader />
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route
                        path="/business/:businessId"
                        element={<BusinessPage />}
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
}
