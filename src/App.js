import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import HomePage from "./pages/home";
import BusinessPage from "./pages/business";

export default function App() {
    return (
        <>
            <ToastContainer />
            <Router>
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/business/:id" element={<BusinessPage />} />
                </Routes>
            </Router>
        </>
    );
}
