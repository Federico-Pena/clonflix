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
function Inicio() {
	const [paginacion, setPaginacion] = useState(1)
	const [proximamenteP, setProximamenteP] = useState()
	const [Ppopulares, setPPopulares] = useState([])
	const [Spopulares, setSPopulares] = useState([])
	const [Pvaloradas, setPValoradas] = useState([])
	const [SValoradas, setSValoradas] = useState([])

	useEffect(() => {
		const obtenerUltimaPelicula = async () => {
			const response = await proximamentePelicula()
			setProximamenteP(response)
		}
		obtenerUltimaPelicula()
	}, [])

	useEffect(() => {
		const obtenerSeriesValoradas = async () => {
			const valoradas = await seriesValoradas(paginacion)
			setSPopulares(valoradas)
		}
		const obtenerPeliculasValoradas = async () => {
			const valoradas = await peliculasValoradas(paginacion)
			setPValoradas(valoradas)
		}
		const ObtenerSeriesPopulares = async () => {
			const valoradas = await seriesPopulares(paginacion)
			setSValoradas(valoradas)
		}
		const ObtenerPeliculasPopulares = async () => {
			const populares = await peliculasPopulares(paginacion)
			setPPopulares(populares)
		}
		ObtenerPeliculasPopulares()
		ObtenerSeriesPopulares()
		obtenerPeliculasValoradas()
		obtenerSeriesValoradas()
	}, [paginacion])

	const obtenerPelicula = (e) => {
		setPaginacion((prev) => prev + 1)
		fetch(
			`${apiconfig.baseUrl}/search/movie?query=${e}&api_key=f1f3d16c542b37ff4b06fea62f7d8334&language=es-MX`
		)
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data)
			})
	}
	return (
		<main className='mainIndex'>
			<div
				onClick={() => obtenerPelicula(proximamenteP?.title)}
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
				{Ppopulares.results?.map((popular) => {
					return <CardPelicula pelicula={popular} key={popular.id} />
				})}
			</Slider>
			<h2 className='h2Slider'>Peliculas Mejor Valoradas</h2>
			<Slider>
				{Pvaloradas.results?.map((popular) => {
					return <CardPelicula pelicula={popular} key={popular.id} />
				})}
			</Slider>
			<h2 className='h2Slider'>Series Mejor Valoradas</h2>
			<Slider>
				{SValoradas.results?.map((popular) => {
					return <CardPelicula pelicula={popular} key={popular.id} />
				})}
			</Slider>
			<h2 className='h2Slider'>Series Populares</h2>
			<Slider>
				{Spopulares.results?.map((popular) => {
					return <CardPelicula pelicula={popular} key={popular.id} />
				})}
			</Slider>
		</main>
	)
}

export default Inicio
