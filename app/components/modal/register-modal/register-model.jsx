import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import styles from './register-model.module.css'

export const RegisterModalContent = ({ state, onClose }) => {
	return (
		<Modal
			open={state}
			center
			onClose={onClose}
			classNames={{
				modal: styles.modal_content
			}}
		>
			<h2>¡Comienza ahora!</h2>
			<p>
				<strong>Solicita los servicios que Waki Runa </strong>tiene para ti y escala en el mundo laboral
			</p>
			<div>
				<di>
					<span>Quiero trabajar</span>
				</di>
				<di>
					<span>Busco personal</span>
				</di>
			</div>
		</Modal>
	)
}
