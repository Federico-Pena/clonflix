import { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import './Buscar.scss'
import { IoSearch } from 'react-icons/io5'
import { GoPlay } from 'react-icons/go'
import { apiconfig } from '../../config/apiConfig'
import { Link } from 'react-router-dom'
import FullInfo from '../../components/FullInfo/FullInfo'
const apiKey = import.meta.env.VITE_TMDB_API_KEY

function Buscar() {
	const { loading, trendingTodas, fetchDataUse } = useFetch()
	const [fullInfo, setFullInfo] = useState()
	useEffect(() => {
		fetchDataUse(1, apiconfig.tendenciasTodas)
	}, [])

	const obtenerfullInfo = async (id, title) => {
		let url
		window.scrollTo(0, 0)
		if (title) {
			url = `${apiconfig.baseUrl}/movie/${id}?append_to_response=cast%2Cvideos%2Ctype%2Ccreated_by&api_key=${apiKey}&language=es-MX`
		} else {
			url = `${apiconfig.baseUrl}/tv/${id}?append_to_response=cast%2Cvideos%2Ctype%2Ccreated_by&api_key=${apiKey}&language=es-MX`
		}
		try {
			const res = await fetch(url)
			const data = await res.json()
			setFullInfo(data)
			console.log(data)
			/* setTimeout(() => {
				 	setLoading(false) 
			}, 800) */
		} catch (error) {
			throw new Error(error)
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
			{trendingTodas && (
				<div className='divSugerencias'>
					<h1>Lo Mas Buscado</h1>
					{trendingTodas.slice(0, 20).map((tendencia, i) => {
						return (
							<Link
								key={`${tendencia.id} `}
								className='cardSugerencia'
								onClick={() => obtenerfullInfo(tendencia.id, tendencia.title)}>
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
