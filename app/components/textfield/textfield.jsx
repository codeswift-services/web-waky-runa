import styles from './textfield.module.css'

/**
 * @param {string} label -
 * @param {string} variant - {outlined|ghost}
 * @param {boolean} textarea -
 */
export default function TextField({ textarea, label, value, onChange, variant, bg }) {
	const custonBg = {
		backgroundColor: bg
	}

	return (
		<label className={`${styles.textfield_label} ${styles[variant]}`}>
			{textarea ? (
				<textarea maxLength="540" className={`${styles.textfield_input}`} placeholder=" " value={value} onChange={onChange} />
			) : (
				<input className={`${styles.textfield_input}`} placeholder=" " value={value} onChange={onChange} />
			)}
			<span className={styles.textfield_placeholder} style={custonBg}>
				{label}
			</span>
		</label>
	)
}
