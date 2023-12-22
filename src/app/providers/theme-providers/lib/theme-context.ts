import { createContext } from "react";

export enum Themes {
	LIGHT = 'light',
	DARK = 'dark'
}

export interface ThemeProps {
	theme?: Themes,
	setTheme?: (newtheme: Themes) => void
}

export const ThemeContext = createContext<ThemeProps>({});
export const LOCAL_STORAGE_THEME_KEY = 'theme';