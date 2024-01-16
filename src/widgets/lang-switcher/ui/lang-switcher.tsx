import { FC, PropsWithChildren } from "react"
import { classNames } from "shared/lib/class-names/class-names"
import styles from './lang-swticher.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from "shared/ui/button";

interface LangSwitcherProps extends PropsWithChildren {
	className?: string,
	short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {

	const { t, i18n } = useTranslation();
	const { className, short } = props

	const toggleL = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<Button
			className={classNames(styles.langSwitcher, {}, [className])}
			theme={ButtonTheme.CLEAR}
			onClick={toggleL}>
			{short ? t('Короткий язык') : t('Русский')}
		</Button>
	)
}