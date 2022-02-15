import { PaperBox, Root } from "../styled/grid";
import {
	Grid,
	List as MuiList,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Checkbox,
	Typography,
} from "@mui/material";

export default function List({
	list,
	title = "",
	actionArea,
	readOnly = false,
	onToggle = () => {},
}) {
	return (
		<Grid container justifyContent="center">
			<Root item>
				<Typography variant="h5" align="center" sx={{ my: { xs: -1 } }}>
					{title}
				</Typography>

				<PaperBox elevation={3}>
					{list.length > 0 ? (
						<MuiList
							dense
							disablePadding
							sx={{
								width: "100%",
								maxWidth: 360,
								bgcolor: "background.paper",
							}}
						>
							{list.map((item) => (
								<ListItem
									divider
									disablePadding
									key={`${item.id}-${Math.random()}`}
								>
									<ListItemButton
										dense
										role={undefined}
										disableRipple={readOnly}
										disableTouchRipple={readOnly}
										onClick={onToggle(item.id)}
										sx={{ cursor: readOnly ? "default" : "pointer" }}
									>
										{!readOnly && (
											<ListItemIcon>
												<Checkbox
													edge="start"
													disableRipple
													tabIndex={-1}
													checked={item.done}
												/>
											</ListItemIcon>
										)}
										<ListItemText
											id={`${item.id}-${item.text}`}
											primary={item.text}
											primaryTypographyProps={{
												sx: {
													textDecoration: item.done ? " line-through" : null,
												},
											}}
										/>
									</ListItemButton>
								</ListItem>
							))}
						</MuiList>
					) : (
						<Typography>No items on {title}</Typography>
					)}

					{actionArea}
				</PaperBox>
			</Root>
		</Grid>
	);
}
