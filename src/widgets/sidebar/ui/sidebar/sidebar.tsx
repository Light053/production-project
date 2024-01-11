import { classNames } from "shared/lib/class-names/class-names"
import styles from './sidebar.module.scss'
import { FC, PropsWithChildren, useState } from "react"
import { ThemeSwitcher } from "widgets/theme-switcher";
import { LangSwitcher } from "widgets/lang-switcher";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/button";

interface SidebarProps extends PropsWithChildren {
	className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
	const [collapsed, setCollapsed] = useState(false)
	const { t } = useTranslation();

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


			<Button
				data-testid='sidebar-toggle'
				onClick={onToggle}
			>
				{t('Переключить')}
			</Button>


			<div className={classNames(styles.switchers, {}, [])}>
				<ThemeSwitcher className="" />
				<LangSwitcher className={styles.lang} />
			</div>
		</div>
	)
}