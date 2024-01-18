import MainIcon from '@/public/icons/ic_main_logo.svg'
import Image from 'next/image'
import styles from './header.module.css'

/**
 * @param {string[]} links - header links
 */

export default function Header({ links = [] }) {
	return (
		<div className={styles.header_container}>
			<Image priority src={MainIcon} alt="wakyruna" />
		</div>
	)
}
