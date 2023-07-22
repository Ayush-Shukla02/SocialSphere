import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import From from "./Form";

const LoginPage = () => {
	const theme = useTheme();
	const isNotMobileScreen = useMediaQuery("(min-width:1000px)");

	return (
		<Box>
			<Box
				width="100%"
				backgroundColor={theme.palette.background.atl}
				p="1rem 6%"
				textAlign="center"
			>
				<Typography fontWeight="bold" fontSize="32px" color="primary">
					SocialSphere
				</Typography>
			</Box>

			<Box
				width={isNotMobileScreen ? "50%" : "93%"}
				p="2rem"
				m="2rem auto"
				borderRadius="1.5rem"
				backgroundColor={theme.palette.background.alt}
			>
				<Typography fontWeight="500" variant="h5" sz={{ mb: "1.5rem" }}>
					Welcome to SocialSphere
				</Typography>
			</Box>
		</Box>
	);
};

export default LoginPage;
