import { FC } from "react"
import { classNames } from "shared/lib/class-names/class-names"
import styles from './login-form.module.scss'
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "shared/ui/button"
import { Input } from "widgets/input/index"

interface LoginformProps {
	className?: string
}

export const Loginform: FC<LoginformProps> = ({ className }) => {

	const { t } = useTranslation()

	return (
		<div className={classNames(styles.Loginform, {}, [])}>
			<Input placeholder={t('Введите имя')} className={styles.nameInput} type="text" />
			<Input placeholder={t('Введите пароль')} className={styles.passInput} type="text" />
			<Button className={styles.btnInput} theme={ButtonTheme.OUTLINE}>{t('Войти')}</Button>
		</div>
	)
}
