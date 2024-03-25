import { FC, useCallback, useState } from "react";
import { classNames } from "shared/lib/class-names/class-names";
import styles from './navbar.module.scss'
import { Modal } from "shared/ui/modal";
import { Button, ButtonTheme } from "shared/ui/button";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/auth-by-user-name";


interface NavbarProps {
	className?: string,

}

export const Navbar: FC = ({ className }: NavbarProps) => {
	const [open, setOpen] = useState(false);
	const { t } = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState(false)

	const onClose = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	const onShowModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	return (
		<div className={classNames(styles.navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR}
				className={classNames(styles.loginBtn, {}, [])}
				onClick={onShowModal}
			>
				{t('Войти')}
			</Button>

			<LoginModal isOpen={isAuthModal} onClose={onClose} />

		</div>
	)
}