import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Header from '../../components/Header/Header';
import RightBar from '../../components/RightBar/RightBar';
import { useThemeContext } from '../../context/ThemeContext';
import SideBar from '../../components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';

const borderStyleLight = '1px solid rgba(28,28,28,0.1)';
const borderStyleDark = '1px solid rgba(255,255,255,0.1)';


function Base() {
	const { mode } = useThemeContext();
	const borderStyle = (mode === "light") ? borderStyleLight : borderStyleDark;

	const [showSideBar, setShowSideBar] = useState<boolean>(true);
	const [showRightBar, setShowRightBar] = useState<boolean>(true);

	const handleSideBarToggleClick = () => {
		setShowSideBar(prev => !prev);
	}

	const handleRightBarToggleClick = () => {
		setShowRightBar(prev => !prev);
	}
	
	
	return (
		<Grid container flexGrow={1} height={"100vh"}>
			{showSideBar && (
				<Grid size={1.8} paddingX={2.5} paddingY={2.5}>
					<SideBar />
				</Grid>
			)}
			<Grid size="grow" borderLeft={borderStyle} borderRight={borderStyle}>
				<Grid container direction={"column"}>
					<Grid size={12} paddingX={3.5} paddingY={2.5} borderBottom={borderStyle}>
						<Header toggleSideBar={handleSideBarToggleClick} toggleRightBar={handleRightBarToggleClick}/>
					</Grid>
					<Grid size="grow" paddingX={3.5} paddingY={3.5}>
						<Outlet />
					</Grid>
				</Grid>
			</Grid>
			{showRightBar && (
				<Grid size={2.5} paddingX={2.5} paddingY={2.5}>
					<RightBar />
				</Grid>
			)}
		</Grid>
	);
}

export default Base;