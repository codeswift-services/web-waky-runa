'use client'
import icGraphPerson from '@/public/icons/ic_graph_person.svg'
import Image from 'next/image'
import Header from '../components/header/header'
import Table from '../components/table/table'
import styles from './vacantes.module.css'
const MOCK_LINKS = [
	{ name: 'Blog', path: '/blog' },
	{ name: '¿Quienes somos?', path: '/about' },
	{ name: 'Vacantes', path: '/vacantes' }
]

export default function Vacantes() {
	return (
		<div>
			<Header hasBackground={true} links={MOCK_LINKS} />
			<div className={styles.background_main_section}>
				<div className={`${styles.limit_area} ${styles.main_section}`}>
					<p>¿Estás listo para asumir una posición Especializada en tu carrera?</p>
					<Image priority src={icGraphPerson} alt="" />
				</div>
			</div>
			<Table />
		</div>
	)
}
