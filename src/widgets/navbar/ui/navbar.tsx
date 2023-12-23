import { FC } from "react";
import { Link } from 'react-router-dom';
import { classNames } from "shared/class-names/class-names";

import styles from './navbar.module.scss'

interface NavbarProps {
	classname?: string,

}

export const Navbar: FC = (className: NavbarProps) => {
	return (
		<div className={classNames(styles.navbar)}>
			<Link to={'/'}>Main</Link>
			<Link to={'/about'}>About</Link>
		</div>
	)
}