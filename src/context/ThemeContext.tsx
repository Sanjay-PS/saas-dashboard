import { createContext, useContext } from 'react';

export type ThemeType = 'light' | 'dark';

export type ThemeContextType = {
	mode: ThemeType;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useThemeContext must be used within a ThemeProvider');
	}
	return context;
};
