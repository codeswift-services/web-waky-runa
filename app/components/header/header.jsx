'use client'
import MainIcon from '@/public/icons/ic_main_logo.svg'
import icMenu from '@/public/icons/ic_menu.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Button from '../button/button'
import styles from './header.module.css'

/**
 * @param {string[]} links - header links
 * @param {string} hasBackground - header links
 */

export default function Header({ links = [], hasBackground = true, isActiveBtn = true, onAction }) {
	const pathname = usePathname()
	const [show, setShow] = useState(true)

	return (
		<div className={`${hasBackground && styles.header_background} ${styles.header_container}`}>
			<Link href="/">
				<Image priority src={MainIcon} alt="wakyruna" />
			</Link>
			<div className={styles.header_menu_btn} onClick={() => setShow(!show)} onBlur={() => setShow(false)}>
				<Image src={icMenu} alt="menu" />
			</div>
			<div className={`${styles.header_links} ${show && styles.isActive}`}>
				{links.map((link, index) => (
					<Link href={link.path} className={`${styles.link} ${pathname === link.path && styles.link_active}`} key={index}>
						{link.name}
					</Link>
				))}
				{isActiveBtn && (
					<Button w={'100px'} onClick={() => onAction()}>
						Acceder
					</Button>
				)}
			</div>
		</div>
	)
}
