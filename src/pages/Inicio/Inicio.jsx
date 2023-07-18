import './Inicio.scss'
import { useEffect, useState } from 'react'
import { fetchData } from '../../services/fetchData'
import { apiconfig } from '../../config/apiConfig'
import Slider from '../../components/Slider/Slider'
import CardPelicula from '../../components/CardPelicula/CardPelicula'
import FullInfo from '../../components/FullInfo/FullInfo'
const apiKey = import.meta.env.VITE_TMDB_API_KEY

function Inicio() {
	const [fullInfo, setFullInfo] = useState()
	const [loading, setLoading] = useState(false)
	const [paginacion, setPaginacion] = useState(1)
	const [paginacion2, setPaginacion2] = useState(1)
	const [paginacion3, setPaginacion3] = useState(1)
	const [paginacion4, setPaginacion4] = useState(1)
	const [proximamenteP, setProximamenteP] = useState(null)
	const [peliculasPopularesList, setPeliculasPopularesList] = useState([])
	const [peliculasValoradasList, setPeliculasValoradasList] = useState([])
	const [seriesPopularesList, setSeriesPopularesList] = useState([])
	const [seriesValoradasList, setSeriesValoradasList] = useState([])

	useEffect(() => {
		const obtenerUltimaPelicula = async () => {
			setLoading(true)
			const response = await fetchData({
				pagina: 1,
				tipo: 'pProximamente',
			})
			setProximamenteP(
				response.results[Math.floor(Math.random() * response.results.length)]
			)
			setLoading(false)
		}
		obtenerUltimaPelicula()
	}, [])

	const obtenerSeriesYpeliculas = async (tipo) => {
		if (tipo === 'pPopular') {
			const peliculasPopularesResponse = await fetchData({
				pagina: paginacion,
				tipo: 'pPopular',
			})
			peliculasPopularesList.length
				? setPeliculasPopularesList((prev) =>
						prev.concat(peliculasPopularesResponse.results)
				  )
				: setPeliculasPopularesList(peliculasPopularesResponse.results)
		}
		if (tipo === 'pValorada') {
			const peliculasValoradasResponse = await fetchData({
				pagina: paginacion2,
				tipo: 'pValorada',
			})
			peliculasValoradasList.length
				? setPeliculasValoradasList((prev) =>
						prev.concat(peliculasValoradasResponse.results)
				  )
				: setPeliculasValoradasList(peliculasValoradasResponse.results)
		}
		if (tipo === 'sPopular') {
			const seriesPopularesResponse = await fetchData({
				pagina: paginacion3,
				tipo: 'sPopular',
			})
			seriesPopularesList.length
				? setSeriesPopularesList((prev) =>
						prev.concat(seriesPopularesResponse.results)
				  )
				: setSeriesPopularesList(seriesPopularesResponse.results)
		}
		if (tipo === 'sValorada') {
			const seriesValoradasResponse = await fetchData({
				pagina: paginacion4,
				tipo: 'sValorada',
			})
			seriesValoradasList.length
				? setSeriesValoradasList((prev) =>
						prev.concat(seriesValoradasResponse.results)
				  )
				: setSeriesValoradasList(seriesValoradasResponse.results)
		}
	}

	const obtenerPelicula = (e) => {
		fetch(
			`${apiconfig.baseUrl}/movie/${e}?append_to_response=cast%2Cvideos%2Ctype%2Ccreated_by&api_key=${apiKey}&language=es-MX`
		)
			.then((resp) => resp.json())
			.then((data) => {
				setFullInfo(data)
				window.scrollTo(0, 0)
			})
	}
	const obtenerSerie = (e) => {
		fetch(
			`${apiconfig.baseUrl}/tv/${e}?append_to_response=cast%2Cvideos%2Ctype%2Ccreated_by&api_key=${apiKey}&language=es-MX`
		)
			.then((resp) => resp.json())
			.then((data) => {
				setFullInfo(data)
				window.scrollTo(0, 0)
			})
	}
	const cerrarFullInfo = (e) => {
		e.classList.add('fullInfoAnimation')
		setTimeout(() => {
			setFullInfo()
		}, 300)
	}

	const setPage = (e) => {
		if (e.enPantalla === true) {
			if (e.tipo === 'pPopular') {
				setPaginacion((prev) => prev + 1)
			}
			if (e.tipo === 'pValorada') {
				setPaginacion2((prev) => prev + 1)
			}
			if (e.tipo === 'sPopular') {
				setPaginacion3((prev) => prev + 1)
			}
			if (e.tipo === 'sValorada') {
				setPaginacion4((prev) => prev + 1)
			}
		} else return
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
					{proximamenteP && (
						<div
							onClick={() => obtenerPelicula(proximamenteP?.id)}
							className='divHero'
							style={{
								backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%),url(${apiconfig.baseUrlImageOriginal}${proximamenteP?.backdrop_path})`,
							}}>
							<h2 className='titleHero'>{proximamenteP?.title}</h2>
							<button>Reproducir</button>
							<p className='fechaHero'>
								<span>Estreno</span>
								<span>
									{new Date(proximamenteP?.release_date).toLocaleDateString()}
								</span>
							</p>
							<p className='valoracionesHero'>
								<span>Puntaje {proximamenteP?.vote_average}</span>
								<span>Votos {proximamenteP?.vote_count}</span>
							</p>
						</div>
					)}

					<h2 className='h2Slider'>Peliculas Populares</h2>
					<Slider
						tipo={'pPopular'}
						obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}
						setPage={setPage}>
						{peliculasPopularesList.map((popular) => (
							<CardPelicula
								pelicula={popular}
								key={popular.id}
								obtenerPelicula={obtenerPelicula}
							/>
						))}
					</Slider>

					<h2 className='h2Slider'>Peliculas Mejor Valoradas</h2>
					<Slider
						tipo={'pValorada'}
						setPage={setPage}
						obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
						{peliculasValoradasList.map((popular) => (
							<CardPelicula
								pelicula={popular}
								key={popular.id}
								obtenerPelicula={obtenerPelicula}
							/>
						))}
					</Slider>

					<h2 className='h2Slider'>Series Populares</h2>
					<Slider
						tipo={'sPopular'}
						setPage={setPage}
						obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
						{seriesPopularesList.map((popular) => (
							<CardPelicula
								pelicula={popular}
								key={popular.id}
								obtenerPelicula={obtenerSerie}
							/>
						))}
					</Slider>

					<h2 className='h2Slider'>Series Mejor Valoradas</h2>
					<Slider
						tipo={'sValorada'}
						setPage={setPage}
						obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
						{seriesValoradasList.map((popular) => (
							<CardPelicula
								pelicula={popular}
								key={popular.id}
								obtenerPelicula={obtenerSerie}
							/>
						))}
					</Slider>
				</>
			)}
		</main>
	)
}

export default Inicio
