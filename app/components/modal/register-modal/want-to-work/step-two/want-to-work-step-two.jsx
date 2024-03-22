import Button from '@/app/components/button/button'
import TextField from '@/app/components/textfield/textfield'
import { useLoginStore } from '@/app/lib/stores/login-store'
import { useRegisterStore } from '@/app/lib/stores/register-store'
import MainIcon from '@/public/icons/ic_main_logo_alt.svg'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import Modal from 'react-responsive-modal'
import styles from './want-to-work-step-two.module.css'

const WANT_TO_WORK_DEFAULT_FORM_DATE = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: ''
}

export const WantToWorkStepTwo = () => {
	const state = useRegisterStore(state => state)
	const [formData, setFormData] = useState(WANT_TO_WORK_DEFAULT_FORM_DATE)
	const { setLoginState } = useLoginStore(state => state)

	const handleChange = (fieldName, value) => {
		setFormData(prevFormData => ({
			...prevFormData,
			[fieldName]: value
		}))
	}

	const onClose = () => {
		state.setStep(0)
	}

	const isOpen = useMemo(() => {
		return state.step === 1
	}, [state.step])

	return (
		<Modal
			onClose={onClose}
			open={isOpen}
			center
			classNames={{
				modal: styles.modal_content
			}}
		>
			<div className={styles.content}>
				<Image priority src={MainIcon} className={styles.image} alt="wakyruna" />
				<h2>Regístrate como candidato</h2>
				<p>Ingresa tus datos y comienza a optimizar tu tiempo</p>
				<div className={styles.content_inputs}>
					<TextField label="Nombre" />
					<TextField label="Apellido" />
					<TextField label="Correo electrónico" />
					<TextField label="Contraseña" />
					<div className={styles.legend_password}>
						<span>Recuerda que tu contraseña debe contener:</span>
						<div>
							<div>
								<div className={styles.validate_sign}></div>
								<span>6 - 12 caracteres</span>
							</div>
							<div>
								<div className={styles.validate_sign}></div>
								<span>Letras</span>
							</div>
							<div>
								<div className={styles.validate_sign}></div>
								<span>Números</span>
							</div>
						</div>
					</div>
					<TextField label="Confirma contraseña" />
					<div className={styles.legend_password_box}>
						<div className={styles.validate_sign}></div>
						<span>Vuelve a escribir la contraseña como está en el campo anterior</span>
					</div>
					<Button>Crear Cuenta</Button>
				</div>
				<div
					onClick={() => {
						onClose()
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
