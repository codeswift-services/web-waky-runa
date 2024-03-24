import Button from '@/app/components/button/button'
import { useLoginStore } from '@/app/lib/stores/login-store'
import { WANT_TO_WORK, useRegisterStore } from '@/app/lib/stores/register-store'
import IcEmail from '@/public/icons/ic_email.svg'
import IcFacebook from '@/public/icons/ic_facebook_circle.svg'
import IcGoogle from '@/public/icons/ic_google.svg'
import MainIcon from '@/public/icons/ic_main_logo_alt.svg'
import Image from 'next/image'
import { useMemo } from 'react'
import Modal from 'react-responsive-modal'
import styles from './want-to-work-step-one.module.css'

export const WantToWorkStepOne = () => {
	const { setStateModal, registerMode, setStep, setRegisterMode } = useRegisterStore(state => state)
	const { setLoginState } = useLoginStore(state => state)

	const isOpen = useMemo(() => {
		return registerMode === WANT_TO_WORK
	}, [registerMode])

	return (
		<Modal
			open={isOpen}
			center
			onClose={() => setRegisterMode(null)}
			classNames={{
				modal: styles.modal_content
			}}
			closeOnOverlayClick={false}
		>
			<div className={styles.content}>
				<Image priority src={MainIcon} alt="wakyruna" />
				<h2>Regístrate como candidato</h2>
				<div className={styles.content_btns}>
					<Button
						variant="ghost"
						onClick={() => {
							setRegisterMode(null)
							setStep(1)
						}}
					>
						<div className={styles.login_btn}>
							<Image src={IcEmail} alt="email" />
							<span>Ingresa con correo</span>
						</div>
					</Button>
					<div className={styles.stepone_separator}>
						<hr />
						<span>o si gustas</span>
						<hr />
					</div>
					<Button variant="ghost">
						<div className={styles.login_btn}>
							<Image src={IcGoogle} alt="google" className={styles.google_image} />
							<span>Ingresa con Google</span>
						</div>
					</Button>
					<Button variant="ghost">
						<div className={styles.login_btn}>
							<Image src={IcFacebook} alt="facebook" />
							<span>Ingresa con Facebook</span>
						</div>
					</Button>
				</div>
				<div
					onClick={() => {
						setRegisterMode(null)
						setLoginState(true)
					}}
					className={styles.footer_login_redirect}
				>
					<span>¿Ya tienes una cuenta? </span>
					<a> Iniciar sesión</a>
				</div>
			</div>
		</Modal>
	)
}
