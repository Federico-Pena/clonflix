import './Inicio.scss'
import { useEffect, useState } from 'react'
import {
	proximamentePelicula,
	peliculasValoradas,
	peliculasPopulares,
} from '../../services/obtenerPeliculas'
import { seriesPopulares, seriesValoradas } from '../../services/obtenerSeries'
import { apiconfig } from '../../config/apiConfig'
import Slider from '../../components/Slider/Slider'
import CardPelicula from '../../components/CardPelicula/CardPelicula'
import FullInfo from '../../components/FullInfo/FullInfo'
const apiKey = import.meta.env.VITE_TMDB_API_KEY

function Inicio() {
	const [fullInfo, setFullInfo] = useState()

	const [loading, setLoading] = useState(false)
	const [paginacion, setPaginacion] = useState(1)
	const [proximamenteP, setProximamenteP] = useState(null)
	const [peliculasPopularesList, setPeliculasPopularesList] = useState([])
	const [peliculasValoradasList, setPeliculasValoradasList] = useState([])
	const [seriesPopularesList, setSeriesPopularesList] = useState([])
	const [seriesValoradasList, setSeriesValoradasList] = useState([])
	useEffect(() => {
		const obtenerUltimaPelicula = async () => {
			setLoading(true)
			const response = await proximamentePelicula()
			setProximamenteP(response[Math.floor(Math.random() * 20)])
			setLoading(false)
		}
		obtenerUltimaPelicula()
	}, [])

	useEffect(() => {
		const obtenerSeriesYpeliculas = async () => {
			const peliculasPopularesResponse = await peliculasPopulares({
				pagina: paginacion,
			})
			setPeliculasPopularesList(peliculasPopularesResponse.results || [])

			const peliculasValoradasResponse = await peliculasValoradas({
				pagina: paginacion,
			})
			setPeliculasValoradasList(peliculasValoradasResponse.results || [])

			const seriesValoradasResponse = await seriesValoradas({
				pagina: paginacion,
			})
			setSeriesValoradasList(seriesValoradasResponse.results || [])

			const seriesPopularesResponse = await seriesPopulares({
				pagina: paginacion,
			})
			setSeriesPopularesList(seriesPopularesResponse.results || [])
		}

		obtenerSeriesYpeliculas()
	}, [paginacion])

	const obtenerPelicula = (e) => {
		fetch(
			`${apiconfig.baseUrl}/movie/${e}?append_to_response=cast%2Cvideos%2Ctype%2Ccreated_by&api_key=${apiKey}&language=es-MX`
		)
			.then((resp) => resp.json())
			.then((data) => {
				setFullInfo(data)
				window.scrollTo(0, 0)
				console.log(data)
			})
	}
	const cerrarFullInfo = (e) => {
		e.classList.add('fullInfoAnimation')
		setTimeout(() => {
			setFullInfo()
		}, 300)
	}
	return (
		<main className='mainIndex'>
			{loading ? (
				'Cargando'
			) : (
				<>
					{fullInfo ? (
						<FullInfo pelicula={fullInfo} cerrarFullInfo={cerrarFullInfo} />
					) : null}

					<div
						onClick={() => obtenerPelicula(proximamenteP?.id)}
						className='divHero'
						style={{
							backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%),url(${
								apiconfig.baseUrlImageOriginal
							}${proximamenteP && proximamenteP?.backdrop_path})`,
						}}>
						<h2 className='titleHero'>{proximamenteP?.title}</h2>
						<p className='fechaHero'>
							<span>Estreno</span>
							<span>{proximamenteP?.release_date}</span>
						</p>
						<p className='valoracionesHero'>
							<span>Puntaje {proximamenteP?.vote_average}</span>
							<span>Votos {proximamenteP?.vote_count}</span>
						</p>
					</div>

					<h2 className='h2Slider'>Peliculas Populares</h2>
					<Slider>
						{peliculasPopularesList.map((popular) => (
							<CardPelicula
								pelicula={popular}
								key={popular.id}
								obtenerPelicula={obtenerPelicula}
							/>
						))}
					</Slider>

					<h2 className='h2Slider'>Peliculas Mejor Valoradas</h2>
					<Slider>
						{peliculasValoradasList.map((popular) => (
							<CardPelicula
								pelicula={popular}
								key={popular.id}
								obtenerPelicula={obtenerPelicula}
							/>
						))}
					</Slider>

					<h2 className='h2Slider'>Series Mejor Valoradas</h2>
					<Slider>
						{seriesValoradasList.map((popular) => (
							<CardPelicula
								pelicula={popular}
								key={popular.id}
								obtenerPelicula={obtenerPelicula}
							/>
						))}
					</Slider>

					<h2 className='h2Slider'>Series Populares</h2>
					<Slider>
						{seriesPopularesList.map((popular) => (
							<CardPelicula
								pelicula={popular}
								key={popular.id}
								obtenerPelicula={obtenerPelicula}
							/>
						))}
					</Slider>
				</>
			)}
		</main>
	)
}

export default Inicio
