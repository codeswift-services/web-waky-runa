import Image from 'next/image'
import MediatePerson from '../../public/icons/ic_meditate_person.svg'
import TextCard from '../components/cardBlog/cardBlog'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import style from './blog.module.css'
export default function blog() {
	return (
		<>
			<Header />
			<div className={style.container_top}>
				<div className={`${style.text_container} ${style.appearUp}`}>
					<h1 className={style.color_text}>Trabajemos juntos en tu crecimiento</h1>
					<p>Ofrecemos temas relacionados que podran ayudarte a estar en constate actualización que te permitan estar a la vanguardia del mercado</p>
				</div>
				<div className={style.meditate_person}>
					<Image priority className={style.firstImage} src={MediatePerson} alt="wakyruna" />
				</div>
			</div>
			<div>
				<TextCard />
			</div>
			<Footer />
		</>
	)
}
