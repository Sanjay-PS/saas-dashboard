import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Header from '../../components/Header/Header';
import RightBar from '../../components/RightBar/RightBar';
import { useThemeContext } from '../../context/ThemeContext';
import SideBar from '../../components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import { Slide } from '../../components/Transitions/Transitions';

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
			<Grid size={showSideBar ? 1.8 : 0} paddingX={showSideBar ? 2.5 : 0} paddingY={showSideBar ? 2.5 : 0} sx={{ transition: "width 300ms, padding 300ms" }}>
				<Slide show={showSideBar} direction='left' duration={300} triggerOnce>
					{(showSideBar) ? (<SideBar />) : (<></>)}
				</Slide>
			</Grid>
			{/* {showSideBar && (
			)} */}
			<Grid size="grow" borderLeft={borderStyle} borderRight={borderStyle}>
				<Grid container direction={"column"}>
					<Grid size={12} paddingX={3.5} paddingY={2.5} borderBottom={borderStyle}>
						<Slide direction='down' duration={300} show triggerOnce>
							<Header toggleSideBar={handleSideBarToggleClick} toggleRightBar={handleRightBarToggleClick}/>
						</Slide>
					</Grid>
					<Grid size="grow" paddingX={3.5} paddingY={3.5}>
						<Outlet />
					</Grid>
				</Grid>
			</Grid>
			<Grid size={showRightBar ? 2.5 : 0} paddingX={showRightBar ? 2.5 : 0} paddingY={showRightBar ? 2.5 : 0} sx={{ transition: "width 300ms, padding 300ms" }}>
				<Slide show={showRightBar} direction='right' duration={300} triggerOnce>
					{(showRightBar) ? (<RightBar />) : (<></>)}
				</Slide>
			</Grid>
			{/* {showRightBar && (
			)} */}
		</Grid>
	);
}

export default Base;