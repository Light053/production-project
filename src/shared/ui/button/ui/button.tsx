import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import { classNames } from "shared/lib/class-names/class-names";
import styles from './button.module.scss'

export enum ButtonTheme {
	CLEAR = 'clear',
	OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme,
		...otherProps
	} = props;

	return (
		<button
			type="button"
			className={classNames(styles.Button, {}, [styles[theme], className])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
