import { Montserrat } from 'next/font/google'
import './global.css'

const interMontserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat'
})

export const metadata = {
	title: 'WakyRuna',
	description: 'WakyRuna'
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={interMontserrat.variable}>{children}</body>
		</html>
	)
}
