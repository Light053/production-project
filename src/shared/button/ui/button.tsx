import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import { classNames } from "shared/class-names/class-names";
import styles from './button.module.scss'

export enum ButtonTheme {
	CLEAR = 'clear'
}


interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme: ButtonTheme
}


export const Button: FC<ButtonProps> = (props) => {

	const { children, className, theme, ...otherProps } = props

	return (
		<button
			className={classNames(styles.clear, {}, [theme, className])}
			{...otherProps}
		>
			{children}
		</button>
	)
}