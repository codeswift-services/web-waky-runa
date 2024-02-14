'use client'
import MainIcon from '@/public/icons/ic_main_logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '../button/button'
import styles from './header.module.css'

/**
 * @param {string[]} links - header links
 * @param {string} hasBackground - header links
 */

export default function Header({ links = [], hasBackground = true }) {
	const pathname = usePathname()

	return (
		<div className={`${hasBackground && styles.header_background} ${styles.header_container}`}>
			<Link href="/">
				<Image priority src={MainIcon} alt="wakyruna" />
			</Link>
			<div className={styles.header_menu_btn}>button</div>
			<div className={styles.header_links}>
				{links.map((link, index) => (
					<Link href={link.path} className={`${styles.link} ${pathname === link.path && styles.link_active}`} key={index}>
						{link.name}
					</Link>
				))}
				<Button w={'100px'}>Acceder</Button>
			</div>
		</div>
	)
}
