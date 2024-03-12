import Button from '@/app/components/button/button'
import IcEmail from '@/public/icons/ic_email.svg'
import IcFacebook from '@/public/icons/ic_facebook_circle.svg'
import IcGoogle from '@/public/icons/ic_google.svg'
import Image from 'next/image'
import styles from './step-one.module.css'

export const RegisterStepOne = ({ nextStep }) => {
	return (
		<>
			<h2>Crea una cuenta como candidato</h2>
			<div className={styles.content_btns}>
				<Button onClick={nextStep} variant="ghost">
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
			<div>
				<span>¿Ya tienes una cuenta? </span>
				<a> Iniciar sesión</a>
			</div>
		</>
	)
}
