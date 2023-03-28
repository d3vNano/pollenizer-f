import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import HomePage from "./pages/home";

function App() {
    return (
        <>
            <ToastContainer />
            <Router>
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
