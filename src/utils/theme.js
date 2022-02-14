import { createTheme } from "@mui/material/styles";
import { lightBlue, deepOrange } from "@mui/material/colors";

export const mainTheme = createTheme({
	typography: {
		fontFamily: "Roboto, Helvetica, Arial, sans-serif",
		fontSize: 14,
		h5: {
			fontFamily: "Roboto",
			fontWeight: "bold",
			fontSize: 21,
			paddingTop: 4,
			paddingBottom: 12,
		},
		h6: {
			fontFamily: "Roboto",
			fontSize: 16,
			paddingTop: 4,
			paddingBottom: 12,
		},
	},
	palette: {
		primary: {
			light: lightBlue[200],
			main: lightBlue[400],
			dark: lightBlue[600],
		},
		secondary: {
			light: deepOrange[200],
			main: deepOrange[400],
			dark: deepOrange[600],
		},
		white: "#fff",
	},
});
