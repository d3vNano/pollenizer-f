import { createRoot } from "react-dom/client";

import "./main/assets/styles/reset.css";
import "./main/assets/styles/style.css";

//import App from "./main/App";
import App from "./usage/App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
