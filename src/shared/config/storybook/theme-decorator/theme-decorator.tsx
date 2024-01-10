import { Decorator } from "@storybook/react";
import { Themes } from "app/providers/theme-providers/lib/theme-context";

export const ThemeDecorator = (theme: Themes) => (StoryComponent: Decorator) => {
	return (
		<div className={`app ${theme}`}>
			{/* @ts-ignore*/}
			<StoryComponent />
		</div>
	)
}