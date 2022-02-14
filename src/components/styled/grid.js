import styled from "@emotion/styled";
import { Grid, Paper } from "@mui/material";

export const Root = styled(Grid)(({ theme }) => ({
	margin: theme.spacing(2),
	padding: theme.spacing(2),
}));

export const PaperBox = styled(Paper)(({ theme }) => ({
	...theme.typography.body1,
	width: 360,
	minHeight: "16em",
	maxHeight: "70vh",
	overflowY: "scroll",
	textAlign: "center",
	padding: theme.spacing(3),
	margin: `${theme.spacing(2)} ${theme.spacing(4)}`,
	color: theme.palette.text.secondary,
	borderRadius: 11,
}));
