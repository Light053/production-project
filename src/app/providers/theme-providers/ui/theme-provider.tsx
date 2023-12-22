import { LOCAL_STORAGE_THEME_KEY, Themes, ThemeContext } from "../lib/theme-context"
import { FC, useMemo, useState, PropsWithChildren } from "react";

export type ReactFC<Props extends Record<PropertyKey, unknown> = {}> = FC<PropsWithChildren<Props>>;

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.LIGHT

const ThemeProvider: ReactFC = ({ children }) => {
	const [theme, setTheme] = useState<Themes>(defaultTheme);

	const defaultProps = useMemo(() => ({
		theme: theme,
		setTheme: setTheme
	}), [theme])

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider