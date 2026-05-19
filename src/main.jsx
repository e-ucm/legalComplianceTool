import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>,
);

// console.log("MAIN START");

// const rootEl = document.getElementById("root");

// console.log("ROOT ELEMENT:", rootEl);

// rootEl.innerHTML = "<h1>DIRECT DOM WORKS</h1>";
