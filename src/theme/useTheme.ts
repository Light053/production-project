import { LOCAL_STORAGE_THEME_KEY, Themes } from "./theme-context"
import { useContext } from "react"
import { ThemeContext } from "./theme-context"

interface useThemesResult {
	toggleTheme: () => void,
	theme: Themes
}
export const useTheme = (): useThemesResult => {
	const { LIGHT, DARK } = Themes;

	const { setTheme, theme } = useContext(ThemeContext)

	const toggleTheme = () => {
		const newTheme = theme === LIGHT ? DARK : LIGHT;
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
		setTheme(newTheme)
	}

	return {
		theme: theme,
		toggleTheme: toggleTheme
	}

}