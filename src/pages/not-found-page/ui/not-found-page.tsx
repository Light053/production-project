import styles from './not-found-page.module.scss';
import { useTranslation } from "react-i18next";

export const NotFoundPage = () => {
	const { t } = useTranslation()
	return (
		<div className={styles.PageNotFound}>
			{t('Страница не найдена!')}
		</div>
	)
}