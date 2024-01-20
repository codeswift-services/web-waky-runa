import styles from './button.module.css'

export default function Button({ children, w, outline }) {
	const btnWith = {
		maxWidth: w || '100%'
	}
	return (
		<div className={`${outline ? styles.outline : styles.btn}`} style={btnWith}>
			{children}
		</div>
	)
}
