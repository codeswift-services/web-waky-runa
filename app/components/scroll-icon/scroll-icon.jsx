import icScroll from '@/public/icons/ic_arrow_down.svg'
import Image from 'next/image'
import styles from './scroll-icon.module.css'

export default function Scroll({ label = 'Conoce más' }) {
	return (
		<div className={styles.scroll}>
			<span>{label}</span>
			<div>
				<Image className="arrow" alt="arrow" src={icScroll} />
				<Image className="arrow" alt="arrow" src={icScroll} />
			</div>
		</div>
	)
}
