import Button from '@/app/components/button/button'
import TextField from '@/app/components/textfield/textfield'
import { useLoginStore } from '@/app/lib/stores/login-store'
import { LOOKING_PERSONNEL, useRegisterStore } from '@/app/lib/stores/register-store'
import MainIcon from '@/public/icons/ic_main_logo_alt.svg'
import Image from 'next/image'
import Modal from 'react-responsive-modal'
import styles from './login-step-one.module.css'

export const LoginStepOne = () => {
	const { isOpenStepOne, setStepOneState, setRecoverPasswordState } = useLoginStore(state => state)
	const { setMainState, setRegisterMode } = useRegisterStore(state => state)

	return (
		<Modal
			onClose={() => setStepOneState(false)}
			open={isOpenStepOne}
			center
			classNames={{
				modal: styles.modal_content
			}}
		>
			<div className={styles.content}>
				<Image priority src={MainIcon} alt="wakyruna" />
				<h2>Inicia sesión como candidato</h2>
				<div className={styles.content_inputs}>
					<TextField label="Correo electronico" />
					<TextField label="Contraseña" />
					<span
						onClick={() => {
							setStepOneState(false)
							setRecoverPasswordState(true)
						}}
						className={styles.recover_password}
					>
						¿Olvidaste tu contraseña?
					</span>
					<Button> Iniciar Sesion</Button>
				</div>
				<div
					onClick={() => {
						setStepOneState(false)
						setMainState(true)
					}}
					className={styles.footer_register_redirect}
				>
					<span>¿Aún no tienes una cuenta?</span>
					<a>Regístrate aqui</a>
				</div>
				<div
					onClick={() => {
						setStepOneState(false)
						setRegisterMode(LOOKING_PERSONNEL)
					}}
					className={styles.footer_register_redirect}
				>
					<span> Inicia sesión como empresa</span>
					<a> aqui </a>
				</div>
			</div>
		</Modal>
	)
}
