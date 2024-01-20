import Image from 'next/image'
import ButtonSecond from '../buttonSecond/buttonSecond'
import styles from './cardBlog.module.css'

const TextCard = ({ date, title, url }) => {
	return (
		<div className={styles.card}>
			<div className={styles.content}>
				<Image alt="wakyruna" />
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
