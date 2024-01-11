import { classNames } from "shared/lib/class-names/class-names"
import styles from './sidebar.module.scss'
import { FC, PropsWithChildren, useState } from "react"
import { ThemeSwitcher } from "widgets/theme-switcher";
import { LangSwitcher } from "widgets/lang-switcher";
import { Button } from "shared/button";
import { AppLink } from "shared/ui";
import { useTranslation } from "react-i18next";
import { RouterPath } from "shared/config/route-config/route-config";
import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/main-page.svg'

interface SidebarProps extends PropsWithChildren {
	className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
	const { t } = useTranslation();
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

			<Button
				data-testid='sidebar-toggle'
				onClick={onToggle}
				className={styles.collapseBtn}
			>
				{collapsed ? '<' : '>'}
			</Button>

			<div className={styles.items}>
				<AppLink
					to={RouterPath.main}
					className={styles.item}
				>
					<MainIcon className={styles.icon} />
					<span
						className={styles.link}
					>
						{t('Главная')}
					</span>
				</AppLink>
				<AppLink
					to={RouterPath.about}
					className={styles.item}
				>
					<AboutIcon className={styles.icon} />
					<span
						className={styles.link}
					>
						{t('О нас')}
					</span>

				</AppLink>
			</div>

			<div className={classNames(styles.switchers, {}, [])}>
				<ThemeSwitcher className="" />
				<LangSwitcher className={styles.lang} short={collapsed} />
			</div>
		</div>
	)
}