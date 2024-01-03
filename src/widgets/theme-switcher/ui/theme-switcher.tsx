import { useTheme } from "app/providers/theme-providers"
import { classNames } from "shared/lib/class-names/class-names";
import styles from './theme-switcher.module.scss';
import { ButtonTheme } from "shared/button";
import DayTheme from 'shared/assets/icons/day.svg';
import NightTheme from 'shared/assets/icons/night.svg';
import { Themes } from "app/providers/theme-providers/lib/theme-context";
import { Button } from "shared/button";

interface ThemeSwitcherProps {
	className?: string
}


export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div>
			<Button
				theme={ButtonTheme.CLEAR}
				className={classNames(styles.themeSwitcher, {}, [className])}
				onClick={toggleTheme}>
				{theme === Themes.DARK
					?
					<DayTheme height={'50px'} width={'70px'} />
					:
					<NightTheme height={'50px'} width={'70px'} />}
			</Button>
		</div>
	)
}