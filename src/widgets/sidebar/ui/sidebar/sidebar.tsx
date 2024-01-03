import { classNames } from "shared/lib/class-names/class-names"
import styles from './sidebar.module.scss'
import { FC, PropsWithChildren, useState } from "react"
import { ThemeSwitcher } from "widgets/theme-switcher";
import { LangSwitcher } from "widgets/lang-switcher";

interface SidebarProps extends PropsWithChildren {
	className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
	const [collapsed, setCollapsed] = useState(false)

	const { className, ...otherProps } = props

	const onToggle = () => {
		setCollapsed(prev => !prev)
	}

	return (
		<div
			data-testid='sidebar'
			className={classNames(
				styles.sidebar,
				{ [styles.collapsed]: collapsed },
				[className])}>


			<button
				data-testid='sidebar-toggle'
				onClick={onToggle}
			>toggle
			</button>


			<div className={classNames(styles.switchers, {}, [])}>
				<ThemeSwitcher className="" />
				<LangSwitcher className={styles.lang} />
			</div>
		</div>
	)
}