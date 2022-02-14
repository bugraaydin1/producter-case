import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { mainTheme } from "./utils/theme";
import App from "./App";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={mainTheme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
