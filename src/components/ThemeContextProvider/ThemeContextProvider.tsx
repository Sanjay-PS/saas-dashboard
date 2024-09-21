import { useState, ReactNode } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import { ThemeContext, ThemeType } from '../../context/ThemeContext';
import { customLightTheme, customDarkTheme } from '../../styles/theme';
import { CssBaseline } from '@mui/joy';

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
	const [mode, setMode] = useState<ThemeType>('light');

	const toggleTheme = () => {
		setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
	};

	return (
		<ThemeContext.Provider value={{ mode, toggleTheme }}>
			<CssVarsProvider defaultMode={"system"} theme={mode === "light" ? customLightTheme : customDarkTheme}>
				<CssBaseline />
				{children}
			</CssVarsProvider>
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
