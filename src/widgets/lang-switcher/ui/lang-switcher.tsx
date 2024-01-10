import { FC, PropsWithChildren } from "react"
import { classNames } from "shared/lib/class-names/class-names"
import styles from './lang-swticher.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from "shared/button";

interface LangSwitcherProps extends PropsWithChildren {
	className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {

	const { t, i18n } = useTranslation();
	const toggleL = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}
	const { className } = props
	return (
		<Button
			className={classNames(styles.langSwitcher, {}, [className])}
			theme={ButtonTheme.CLEAR}
			onClick={toggleL}>
			{t('Русский')}
		</Button>
	)
}