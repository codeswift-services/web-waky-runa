import Image from 'next/image'
import BackImage from '../../../public/icons/background.svg'
import ButtonSecond from '../button-second/button-second'
import styles from './card-blog.module.css'

const TextCard = ({ date, title, url }) => {
	return (
		<div className={styles.card}>
			<div className={styles.content}>
				<Image src={BackImage} alt="wakyruna" />
				<p className={styles.date}>{date}</p>
				<p className={styles.title}>{title}</p>
			</div>
			<div className={styles.buttonContainer}>
				<ButtonSecond url={url} />
			</div>
		</div>
	)
}

export default TextCard
