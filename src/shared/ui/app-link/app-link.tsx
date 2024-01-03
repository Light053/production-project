import { FC, PropsWithChildren } from "react";
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from "shared/lib/class-names/class-names";

import styles from './app-link.module.scss'

interface AppLinkProps extends LinkProps, PropsWithChildren {
	className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
	const { children, to, className } = props

	return (
		<Link to={to}
			className={classNames(styles.appLink, {}, [className])}>
			{children}
		</Link>
	);
};
