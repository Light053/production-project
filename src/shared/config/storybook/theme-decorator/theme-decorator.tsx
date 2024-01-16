import { Decorator } from "@storybook/react";
import { ThemeProvider } from "app/providers/theme-providers";
import { Themes } from "app/providers/theme-providers/lib/theme-context";

export const ThemeDecorator = (theme: Themes) => (StoryComponent: Decorator) => {
	return (
		<ThemeProvider>
			<div className={`app ${theme}`}>
				{/* @ts-ignore*/}
				<StoryComponent />
			</div>
		</ThemeProvider>

	)
}