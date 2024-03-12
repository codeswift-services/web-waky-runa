import IcArrowLeft from '@/public/icons/ic_arrow_left.svg'
import PcLookStaff from '@/public/pictures/pc_look_staff.svg'
import PcNeedJob from '@/public/pictures/pc_need_job.svg'
import Image from 'next/image'
import { useState } from 'react'
import { Modal } from 'react-responsive-modal'
import styles from './register-model.module.css'
import { RegisterStepOne } from './step-one/step-one'
import { RegisterStepTwo } from './step-two/step-two'

export const RegisterModal = ({ state, onClose }) => {
	const [step, setStep] = useState(null)

	const renderStep = () => {
		switch (step) {
			case 1:
				return <RegisterStepOne nextStep={() => setStep(2)} />
			case 2:
				return <RegisterStepTwo />
		}
	}

	const backStep = () => {
		setStep(prev => {
			let value = prev - 1
			if (value === 0) {
				return null
			}
			return value
		})
	}

	return (
		<Modal
			open={state}
			center
			onClose={onClose}
			classNames={{
				modal: styles.modal_content
			}}
			closeOnOverlayClick={false}
		>
			{step && (
				<div onClick={backStep} className={styles.back_btn}>
					<Image src={IcArrowLeft} alt="back" />
					<span>Volver</span>
				</div>
			)}
			<div className={styles.content}>
				{step ? (
					renderStep()
				) : (
					<>
						<h2>¡Comienza ahora!</h2>
						<p>
							<strong>Solicita los servicios que Waki Runa </strong>tiene para ti y escala en el mundo laboral
						</p>
						<div className={styles.register_card_option_layout}>
							<div onClick={() => setStep(1)} className={styles.register_card_option}>
								<Image src={PcNeedJob} alt="need_job" />
								<span>Quiero trabajar</span>
							</div>
							<div onClick={() => setStep(1)} className={styles.register_card_option}>
								<Image src={PcLookStaff} alt="look_staff" />
								<span>Busco personal</span>
							</div>
						</div>
					</>
				)}
			</div>
		</Modal>
	)
}
