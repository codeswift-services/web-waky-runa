import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import Button from '../../button/button'
import styles from './login-model.module.css'

export const LoginModal = ({ state, onClose }) => {
	return (
		<Modal
			open={state}
			center
			onClose={onClose}
			classNames={{
				modal: styles.modal_content
			}}
		>
			<div className={styles.content}>
				<h2>Inicia sesión</h2>
				<div className={styles.content_btns}>
					<Button variant="outline">Continuar con Google</Button>
					<Button variant="outline">Continuar con Facebook</Button>
					<Button variant="outline">Continuar con email</Button>
				</div>

				<div>
					<span>¿Aún no tienes una cuenta?</span>
					<a>Regístrate aquí</a>
				</div>
			</div>
		</Modal>
	)
}
