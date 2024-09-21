import Grid from '@mui/material/Grid2';
import { useThemeContext } from '../../context/ThemeContext';
import IconButton from '../IconButton/IconButton';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import SearchInput from '../Input/SearchInput';
import { Box } from '@mui/joy';
import { Bell, ClockCounterClockwise, Moon, Sidebar, Star, Sun } from '@phosphor-icons/react';

type HeaderProps = {
	currentPage?: string[],
    toggleSideBar: () => void,
    toggleRightBar: () => void,
}

function Header({ toggleSideBar, toggleRightBar }: HeaderProps) {
    const { mode: theme, toggleTheme } = useThemeContext();

	return (
		<Grid container flexGrow={1}>
			<Grid size="grow" display={"flex"}>
                <Box gap={1} display={"flex"} alignItems={"center"}>
                    <IconButton onClick={toggleSideBar}><Sidebar size={20} weight="duotone"/></IconButton>
                    <IconButton><Star size={20} weight="duotone"/></IconButton>
                    <Breadcrumbs items={[{label: "Dashboard"}, {label: "Default"}]}/>
                </Box>
            </Grid>
			<Grid display={"flex"} justifyContent={"end"}>
                <Box gap={1} display={"flex"} alignItems={"center"}>
                    <SearchInput sx={{ "marginInlineEnd": "12px" }}/>
                    <IconButton onClick={toggleTheme}>
                        {(theme === "light") ? (<Moon size={20} weight="duotone" />) : (<Sun size={20} weight="duotone" />)}
                    </IconButton>
                    <IconButton><ClockCounterClockwise size={20} weight="duotone"/></IconButton>
                    <IconButton><Bell size={20} weight="duotone"/></IconButton>
                    <IconButton onClick={toggleRightBar}><Sidebar size={20} weight="duotone" style={{ transform: "rotate(180DEG)" }}/></IconButton>
                </Box>
            </Grid>
		</Grid>
	);
}

export default Header;