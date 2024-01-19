import Image from 'next/image'
import ButtonSecond from '../buttonSecond/buttonSecond'
import styles from './cardBlog.module.css'
const TextCard = ({ date, title }) => {
	return (
		<div className={styles.card}>
			<Image alt="wakyruna" />
			<h2 className={styles.date}>{date}</h2>
			<p className={styles.title}>{title}</p>
			<ButtonSecond url="https://mail.google.com/mail/u/0/#inbox" />
		</div>
	)
}

export default TextCard
