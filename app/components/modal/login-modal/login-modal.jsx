import { Modal } from 'react-responsive-modal'

export const LoginModal = ({ state, onClose }) => {
	console.log(state)
	return (
		<Modal open={true} center onClose={onclose}>
			<h2>hola</h2>
		</Modal>
	)
}
