import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import './Buscar.scss'
import { IoSearch } from 'react-icons/io5'
import { GoPlay } from 'react-icons/go'

import { apiconfig } from '../../config/apiConfig'
import ContainerWrap from '../../components/ContainerWrap/ContainerWrap'
import CardPelicula from '../../components/CardPelicula/CardPelicula'
function Buscar() {
	const { loading, trendingTodas, fetchDataUse } = useFetch()
	useEffect(() => {
		fetchDataUse(1, apiconfig.tendenciasTodas)
	}, [])

	const setearPag = (e) => {
		if (e.enPantalla === true) {
			if (e.tipo === apiconfig.tendenciasSeries) {
				console.log()
			}
		}
	}
	const obtenerPeliculas = (tipo) => {
		if (tipo === apiconfig.tendenciasSeries) {
			fetchDataUse(1, apiconfig.tendenciasTodas)
		}
	}
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
			{trendingTodas.length && (
				<div className='divSugerencias'>
					<h1>Lo Mas Buscado</h1>
					{trendingTodas.splice(0, 20).map((tendencia) => {
						return (
							<div key={tendencia.id} className='cardSugerencia'>
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
							</div>
						)
					})}
				</div>
			)}
		</div>
	)
}

export default Buscar
