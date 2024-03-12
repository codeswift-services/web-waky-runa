'use client'
import MainIcon from '@/public/icons/ic_main_logo.svg'
import icMenu from '@/public/icons/ic_menu.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { RegisterModal } from '..//modal/register-modal/register-model'
import Button from '../button/button'
import { LoginModal } from '../modal/login-modal/login-modal'
import styles from './header.module.css'

/**
 * @param {string[]} links - header links
 * @param {string} hasBackground - header links
 */

export default function Header({ links = [], hasBackground = true, isActiveBtn = true }) {
	const pathname = usePathname()
	const [show, setShow] = useState(true)

	/**
	 * actions login modal
	 */
	const [stateLoginModal, setStateLoginModal] = useState(false)
	const closeLoginModal = () => setStateLoginModal(false)
	const openLoginModal = () => setStateLoginModal(true)

	/**
	 * actions register modal
	 */
	const [stateRegisterModal, setStateRegisterModal] = useState(false)
	const closeRegisterModal = () => setStateRegisterModal(false)
	const openRegisterModal = () => setStateRegisterModal(true)

	return (
		<div className={`${hasBackground && styles.header_background} ${styles.header_container}`}>
			<LoginModal
				state={stateLoginModal}
				onClose={closeLoginModal}
				onRegisterClick={() => {
					closeLoginModal()
					openRegisterModal()
				}}
			/>
			<RegisterModal state={stateRegisterModal} onClose={closeRegisterModal} />
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
					<Button w={'100px'} onClick={() => openLoginModal()}>
						Acceder
					</Button>
				)}
			</div>
		</div>
	)
}
