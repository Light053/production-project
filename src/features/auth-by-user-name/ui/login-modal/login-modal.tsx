import { FC } from "react"
import { classNames } from "shared/lib/class-names/class-names"
import styles from './login-modal.module.scss'
import { Loginform } from "../login-form/login-form"
import { Modal } from "shared/ui/modal"

interface LoginModalProps {
	className?: string,
	isOpen: boolean,
	onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = (props) => {

	const { isOpen, onClose, className } = props

	return (
		<Modal
			className={classNames(styles.LoginModal, {}, [])}
			isOpen={isOpen}
			onClose={onClose}
		>
			<Loginform />
		</Modal>
	)
}
