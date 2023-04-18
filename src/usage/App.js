import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import { MainPage, BusinessPage } from "./pages";
import { AuthProvider } from "./context/auth";

export default function App() {
    return (
        <AuthProvider>
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
