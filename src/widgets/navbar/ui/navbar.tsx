import { FC } from "react";
import { classNames } from "shared/lib/class-names/class-names";

import styles from './navbar.module.scss'
import { AppLink } from "shared/ui";
import { useTranslation } from "react-i18next";


interface NavbarProps {
	className?: string,

}

export const Navbar: FC = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(styles.navbar, {}, [className])}>

			<div className={styles.links}>
				<AppLink to={'/'} className={styles.mainLink}>{t('Главня')}</AppLink>
				<AppLink to={'/about'} className={styles.mainLink}>{t('О нас')}</AppLink>
			</div>

		</div>
	)
}