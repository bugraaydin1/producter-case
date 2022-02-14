import { forwardRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	MenuItem,
	Container,
	Button,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Logo from "../assets/img/logo.png";

const pages = [
	{ path: "/todo", name: "Todo" },
	{ path: "/done", name: "Done" },
];

export default function AppNavbar() {
	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const MuiLink = forwardRef((props, ref) => (
		<RouterLink ref={ref} to="/" {...props} />
	));

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Button component={MuiLink} to="/">
						<img
							src={Logo}
							height={24}
							alt="todo-app-logo"
							style={{ marginRight: "1em" }}
						/>
					</Button>

					<Typography
						noWrap
						variant="h6"
						component="div"
						sx={{
							mt: 1,
							flexGrow: 1,
							color: "white",
							alignSelf: "center",
							display: { xs: "flex", md: "none" },
						}}
					>
						CASE TODO APP
					</Typography>

					<Box sx={{ display: { xs: "flex", md: "none" } }}>
						<IconButton size="large" onClick={handleOpenNavMenu}>
							<MenuIcon />
						</IconButton>

						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							keepMounted
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{ display: { xs: "block", md: "none" } }}
						>
							{pages.map((page) => (
								<MenuItem key={page.name} onClick={handleCloseNavMenu}>
									<Button to={page.path} component={MuiLink}>
										{page.name}
									</Button>
								</MenuItem>
							))}
						</Menu>
					</Box>

					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map((page) => (
							<Button
								key={page.name}
								to={page.path}
								component={MuiLink}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "white", display: "block" }}
							>
								{page.name}
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
