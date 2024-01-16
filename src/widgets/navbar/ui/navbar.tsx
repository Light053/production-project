import { FC, useCallback, useState } from "react";
import { classNames } from "shared/lib/class-names/class-names";
import styles from './navbar.module.scss'
import { Modal } from "shared/ui/modal";
import { Button, ButtonTheme } from "shared/ui/button";
import { useTranslation } from "react-i18next";


interface NavbarProps {
	className?: string,

}

export const Navbar: FC = ({ className }: NavbarProps) => {
	const [open, setOpen] = useState(false);
	const { t } = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState(false)

	const onToggleModal = useCallback(() => {
		setIsAuthModal(prev => !prev)
	}, [])

	return (
		<div className={classNames(styles.navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR}
				className={classNames(styles.loginBtn, {}, [])}
				onClick={onToggleModal}
			>
				{t('Войти')}
			</Button>

			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Harum tenetur nam nostrum repudiandae voluptatibus sunt,
				sequi et repellat aperiam consequuntur quo officia perspiciatis
				fugiat voluptatem laborum laboriosam molestias vero quis.
			</Modal>

		</div>
	)
}