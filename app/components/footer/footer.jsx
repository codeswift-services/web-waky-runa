import MainIcon from '@/public/icons/ic_main_logo.svg'
import Image from 'next/image'
import styles from './footer.module.css'

export default function Footer() {
	return (
		<footer className={styles.footer_container}>
			<div>
				<Image priority src={MainIcon} alt="wakyruna" />
				<p>&copy; 2023 Waki Runa. Todos los derechos reservados | Si tienes dudas escríbenos a contacto@wakiruna.pe</p>
			</div>
		</footer>
	)
}
