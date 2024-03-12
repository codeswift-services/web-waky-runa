import Button from '@/app/components/button/button'
import TextField from '@/app/components/textfield/textfield'
import styles from './step-two.module.css'

export const RegisterStepTwo = () => {
	return (
		<>
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
			<div>
				<span>¿Ya tienes una cuenta? </span>
				<a> Iniciar sesión</a>
			</div>
		</>
	)
}
