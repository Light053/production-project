import { FC, InputHTMLAttributes, memo, useState } from "react"
import { classNames } from "shared/lib/class-names/class-names"
import styles from './input.module.scss'
import { useTranslation } from "react-i18next"

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HtmlInputProps {
	className?: string,
	value?: string,
	onChange?: (value: string) => void,
	type?: string,
	placeholder?: string
}

export const Input: FC<InputProps> = memo((props) => {

	const { className, value, onChange, type = 'text', placeholder, ...otherProps } = props

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
	}

	return (
		<div className={classNames(styles.InputWrapper, {}, [])}>
			<input
				placeholder={placeholder}
				className={classNames(styles.input, {}, [className])}
				type={type}
				value={value}
				onChange={onChangeHandler}
				{...otherProps}
			/>
		</div>
	)
})