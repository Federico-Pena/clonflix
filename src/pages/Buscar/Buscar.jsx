import { useEffect } from 'react'
import './Buscar.scss'
import { IoSearch } from 'react-icons/io5'
import { GoPlay } from 'react-icons/go'
import { apiconfig } from '../../config/apiConfig'
import { Link } from 'react-router-dom'
import usePelicula from '../../hooks/usePelicula'

function Buscar() {
	const { loading, trendingTodas, fetchDataPeli } = usePelicula()
	useEffect(() => {
		fetchDataPeli(1, apiconfig.tendenciasTodas)
	}, [])

	return (
		<div className='divPageBuscar'>
			<form className='formBuscar'>
				<IoSearch className='iconBuscar' />
				<input
					type='text'
					className='buscador'
					autoFocus
					placeholder='Buscar títulos, géneros o personas'
				/>
			</form>
			{trendingTodas && (
				<div className='divSugerencias'>
					<h1>Lo Mas Buscado</h1>
					{trendingTodas.slice(0, 20).map((tendencia, i) => {
						return (
							<Link
								to={`&${tendencia.id}?${tendencia.title ? true : false}`}
								key={`${tendencia.id} ${i}`}
								className='cardSugerencia'>
								<div className='divImg'>
									<img
										src={`${apiconfig.baseUrlImageW300}${tendencia?.backdrop_path}`}
										alt={`Imagen de ${tendencia.title || tendencia.name}`}
									/>
								</div>
								<div className='divP'>
									<p>{tendencia.title || tendencia.name}</p>
								</div>
								<div className='divIcon'>
									<GoPlay className='IconVer' />
								</div>
							</Link>
						)
					})}
				</div>
			)}
		</div>
	)
}

export default Buscar
