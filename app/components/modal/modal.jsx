import IcClose from '@/public/icons/ic_close.svg'
import Image from 'next/image'
import styles from './modal.module.css'

export const Modal = ({ isOpen = true }) => {
	return (
		<div className={styles.modal}>
			<section className={styles.modal_content}>
				<div className={styles.modal_header}>
					<div className={styles.modal_header_close}>
						<Image className={styles.modal_content_close} src={IcClose} alt="close" />
					</div>
				</div>
				<main className={styles.modal_content}></main>
			</section>
		</div>
	)
}
