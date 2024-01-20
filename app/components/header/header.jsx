import MainIcon from '@/public/icons/ic_main_logo.svg'
import Image from 'next/image'
import Button from '../button/button'
import styles from './header.module.css'

/**
 * @param {string[]} links - header links
 * @param {string} hasBackground - header links
 */

export default function Header({ links = ['Vacantes', 'Blog', '¿Quienes somos?', 'Inicia Sesión'], hasBackground = true }) {
	return (
		<div className={`${hasBackground && styles.header_background} ${styles.header_container}`}>
			<Image priority src={MainIcon} alt="wakyruna" />
			<div className={styles.header_links}>
				{links.map((link, index) => (
					<a className={styles.link} key={index}>
						{link}
					</a>
				))}
				<Button w={'100px'}>Acceder</Button>
			</div>
		</div>
	)
}
