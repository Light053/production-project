import { FC } from "react";
import { classNames } from "shared/class-names/class-names";

import styles from './navbar.module.scss'
import { AppLink } from "shared/ui";


interface NavbarProps {
	className?: string,

}

export const Navbar: FC = ({ className }: NavbarProps) => {

	return (
		<div className={classNames(styles.navbar, {}, [className])}>

			<div className={styles.links}>
				<AppLink to={'/'} className={styles.mainLink}>Main</AppLink>
				<AppLink to={'/about'} className={styles.mainLink}>About</AppLink>
			</div>

		</div>
	)
}