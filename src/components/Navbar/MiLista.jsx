import { useEffect, useState } from 'react'
import MiniCard from '../CardPelicula/MiniCard'
import { IoCloseOutline } from 'react-icons/io5'
import './MiLista.scss'
function MiLista({ cerrarMiLista }) {
	const [guardadas, setGuardadas] = useState([])
	useEffect(() => {
		const DB = JSON.parse(localStorage.getItem('clonflix'))
		if (DB && DB.length) {
			setGuardadas(DB)
		}
	}, [])
	const eliminar = (e) => {
		const DB = JSON.parse(localStorage.getItem('clonflix'))
		if (DB && DB.length) {
			const coincidencias = DB.filter((item) => item.id !== e)
			if (coincidencias) {
				setGuardadas(coincidencias)
				localStorage.setItem('clonflix', JSON.stringify(coincidencias))
			}
		}
	}
	return (
		<div className='userDiv'>
			<IoCloseOutline
				title='Cerrar Guardadas'
				onClick={cerrarMiLista}
				className='iconCerrar'
			/>
			<h3>Guardadas</h3>
			{guardadas.length ? (
				guardadas.map((guardada, i) => {
					return (
						<MiniCard
							key={`${guardada.id} ${i}`}
							tendencia={guardada}
							eliminar={eliminar}
						/>
					)
				})
			) : (
				<h3>No Hay Nada Guardado</h3>
			)}
		</div>
	)
}

export default MiLista
