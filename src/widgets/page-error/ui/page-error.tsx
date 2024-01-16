import { useTranslation } from 'react-i18next'
import styles from './page-error.module.scss'
import { classNames } from 'shared/lib/class-names/class-names'
import { Button, ButtonTheme } from 'shared/ui/button/ui/button'

interface PageErrorProps {
	className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
	const { t } = useTranslation()


	const reloadPage = () => {
		location.reload();
	}

	return (
		<div className={styles.PageError}>
			<h1 className={classNames(styles.error_message, {}, [className])}>
				{t('Упс! что-то пошло не так!')}
			</h1>
			<Button
				onClick={reloadPage}
				theme={ButtonTheme.OUTLINE}
				className={'error-button'}>
				{t('Обновить страницу')}
			</Button>
		</div>
	)
}