import { FC } from "react";
import { classNames } from "shared/lib/class-names/class-names";

import styles from './navbar.module.scss'
import { AppLink } from "shared/ui";
import { useTranslation } from "react-i18next";


interface NavbarProps {
	className?: string,

}

export const Navbar: FC = ({ className }: NavbarProps) => {

	return (
		<div className={classNames(styles.navbar, {}, [className])}>

			<div className={styles.links}>

			</div>

		</div>
	)
}