import icFolder from '@/public/icons/ic_folder.svg'
import icMira from '@/public/icons/ic_mira.svg'
import icPen from '@/public/icons/ic_pen.svg'
import icPlate from '@/public/icons/ic_plate.svg'
import MainIcon from '@/public/icons/ic_two_person.svg'
import Image from 'next/image'
import Button from './components/button/button'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import styles from './page.module.css'

export default function page() {
	return (
		<div className={styles.home_container}>
			<Header hasBackground={false} />
			<div className={`${styles.main_section} ${styles.limit_area}`}>
				<div className={styles.main_section_info}>
					<h1>Recluta con nosotros o encuentra empleo</h1>
					<p>
						Waki Runa es el servicio de <strong>Gestion Humana</strong> que necesitas <br /> para avanzar en el mundo laboral ¡Comienza ahora!
					</p>
					<div className={styles.main_section_btns}>
						<Button w="200px">Busco Personal</Button>
						<Button w="200px">Quiero trabajar</Button>
					</div>
				</div>
				<div className={styles.image_container}>
					<Image className={styles.main_image} priority src={MainIcon} alt="" />
				</div>
			</div>
			<div className={styles.background_benefits_section}>
				<div className={`${styles.benefits_section} ${styles.limit_area}`}>
					<h4 className={styles.title}>Beneficios de trabajar con nosotros</h4>
					<div className={styles.benefits_section_cards}>
						<div className={styles.benefits_section_card}>
							<Image priority src={icFolder} alt="" />
							<span>Reclutamiento</span>
							<p>Encontramos el personal reconocido en su expertis garantizando por la calidad de su trabajo.</p>
						</div>
						<div className={styles.benefits_section_card}>
							<Image priority src={icMira} alt="" />
							<span>Selección</span>
							<p>Te ayudamos con el personal calificado que requieres, obteniendo mejores resultados en menos tiempo.</p>
						</div>
						<div className={styles.benefits_section_card}>
							<Image priority src={icPen} alt="" />
							<span>Capacitación</span>
							<p>Generando una relación de confianza con los postulantes, lo cual se traduce en compromiso y mayor rendimiento laboral.</p>
						</div>
						<div className={styles.benefits_section_card}>
							<Image priority src={icPlate} alt="" />
							<span>Seguimiento</span>
							<p>Generando una relación de confianza con los postulantes, lo cual se traduce en compromiso y mayor rendimiento laboral.</p>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.background_howwork_section}>
				<div className={`${styles.howwork_section} ${styles.limit_area}`}>
					<h4 className={styles.title}>¿Cómo funciona Waki Runa?</h4>
					<span className={styles.subtitle}>Conoce en este video las herramientas y beneficios que Waki Runa tiene para ti</span>
				</div>
			</div>
			<div className={styles.background_howwork_section}>
				<div className={`${styles.howwork_section} ${styles.limit_area}`}>
					<h4 className={styles.title}>Conversa con nosotros</h4>
					<span className={styles.subtitle}>Déjanos saber como podemos ayudarte</span>
				</div>
			</div>
			<Footer />
		</div>
	)
}