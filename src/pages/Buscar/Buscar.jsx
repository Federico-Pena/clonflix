import { useEffect, useState } from 'react'
import './Buscar.scss'
import { IoCloseOutline, IoSearch } from 'react-icons/io5'
import { GoPlay } from 'react-icons/go'
import { apiconfig } from '../../config/apiConfig'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'
import MiniCard from '../../components/CardPelicula/MiniCard'
import { irA } from '../../helpers/irA'
import { fetchPelicula } from '../../helpers/fetchPelicula'
const apiKey = import.meta.env.VITE_TMDB_API_KEY

function Buscar() {
	const [inputValue, setInputValue] = useState('')
	const [resultados, setResultados] = useState([])
	const [loading, setLoading] = useState(false)
	const finUrl = `&api_key=${apiKey}&language=es-MX&sort_by=vote_count.desc&page=${1}`
	const [heroData, setHeroData] = useState([])
	useEffect(() => {
		const getHero = async () => {
			setLoading(true)
			try {
				const data = await fetchPelicula(apiconfig.pelicula.proximamente, 1)
				setHeroData(data.results)
				setLoading(false)
			} catch (error) {
				console.error('Ocurrio Un error AL obtener Datos Del hero', error)
				setLoading(false)
			}
		}
		getHero()
	}, [])

	const changeValue = (e) => {
		setInputValue(e.target.value)
	}

	const submitForm = async (e) => {
		e.preventDefault()
		setLoading(true)
		const response = await fetch(
			`${apiconfig.baseUrl}${apiconfig.buscarTodo}${inputValue}&${finUrl}`
		)
		const data = await response.json()
		setResultados(data.results)
		setLoading(false)
	}
	const cerarResultados = () => {
		setResultados([])
		setInputValue('')
	}
	return (
		<div className='divPageBuscar'>
			{loading ? (
				<Loading />
			) : (
				<>
					<form className='formBuscar' onSubmit={submitForm}>
						<IoSearch className='iconBuscar' />
						<input
							type='text'
							className='buscador'
							autoFocus
							placeholder='Buscar títulos, géneros o personas'
							onChange={changeValue}
							value={inputValue}
						/>
					</form>
					{resultados.length ? (
						<div className='divSugerencias'>
							<h1>
								Resultados
								<IoCloseOutline
									onClick={cerarResultados}
									className='iconCerrar'
								/>
							</h1>
							{resultados.map((tendencia, i) => {
								return (
									tendencia?.backdrop_path && (
										<Link
											to={irA(
												tendencia.id,
												tendencia.title ? 'pelicula' : 'serie'
											)}
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
								)
							})}
						</div>
					) : null}

					{heroData && (
						<div className='divSugerencias'>
							<h1>Lo Mas Buscado</h1>
							{heroData.map((tendencia, i) => {
								return (
									<MiniCard
										tendencia={tendencia}
										key={`${tendencia.id} ${i}`}
									/>
								)
							})}
						</div>
					)}
				</>
			)}
		</div>
	)
}

export default Buscar
