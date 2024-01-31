import Button from '../button/button'
import styles from './table.module.css'

export default function Table() {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th>Nombre</th>
					<th>Sector</th>
					<th>Región</th>
					<th>Salario</th>
					<th>Años exp.</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Contador</td>
					<td>Minero</td>
					<td>San miguel</td>
					<td>S/ 1,300</td>
					<td>7</td>
					<td>
						<Button mini variant="secondary">
							postular
						</Button>
					</td>
				</tr>
				<tr>
					<td>Contador</td>
					<td>Minero</td>
					<td>San miguel</td>
					<td>S/ 1,300</td>
					<td>7</td>
					<td>
						<Button mini variant="secondary">
							postular
						</Button>
					</td>
				</tr>
				<tr>
					<td>Contador</td>
					<td>Minero</td>
					<td>San miguel</td>
					<td>S/ 1,300</td>
					<td>7</td>
					<td>
						<Button mini variant="secondary">
							postular
						</Button>
					</td>
				</tr>
			</tbody>
		</table>
	)
}
