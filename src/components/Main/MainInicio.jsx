import { useState } from 'react'
import CardPelicula from '../CardPelicula/CardPelicula'
import Slider from '../Slider/Slider'
import { apiconfig } from '../../config/apiConfig'
import { fetchData } from '../../services/fetchData'
import usePaginacion from '../../hooks/usePaginacion'
const apiKey = import.meta.env.VITE_TMDB_API_KEY

function MainInicio({ setFullInfo, obtenerPelicula }) {
	const [PPList, setPPList] = useState([])
	const [PVList, setPVList] = useState([])
	const [SPList, setSPList] = useState([])
	const [SVList, setSVList] = useState([])
	const {
		pagePPList,
		pagePVList,
		pageSVList,
		pageSPList,
		setPagPPlist,
		setpagPVList,
		sePagSPList,
		setPagSVList,
	} = usePaginacion()

	const setPage = (e) => {
		if (e.enPantalla === true) {
			if (e.tipo === 'pPopular') {
				setPagPPlist()
			}
			if (e.tipo === 'pValorada') {
				setpagPVList()
			}
			if (e.tipo === 'sPopular') {
				sePagSPList()
			}
			if (e.tipo === 'sValorada') {
				setPagSVList()
			}
		}
	}
	const obtenerSerie = (e) => {
		let url = `${apiconfig.baseUrl}/tv/${e}?append_to_response=cast%2Cvideos%2Ctype%2Ccreated_by&api_key=${apiKey}&language=es-MX`
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				setFullInfo(data)
			})
	}
	const obtenerSeriesYpeliculas = async (tipo) => {
		if (tipo === 'pPopular') {
			const peliculasPopularesResponse = await fetchData({
				pagina: pagePPList,
				tipo: 'pPopular',
			})
			setPPList((prev) => prev.concat(peliculasPopularesResponse.results))
		}
		if (tipo === 'pValorada') {
			const peliculasValoradasResponse = await fetchData({
				pagina: pagePVList,
				tipo: 'pValorada',
			})
			setPVList((prev) => prev.concat(peliculasValoradasResponse.results))
		}
		if (tipo === 'sPopular') {
			const seriesPopularesResponse = await fetchData({
				pagina: pageSPList,
				tipo: 'sPopular',
			})
			setSPList((prev) => prev.concat(seriesPopularesResponse.results))
		}
		if (tipo === 'sValorada') {
			const seriesValoradasResponse = await fetchData({
				pagina: pageSVList,
				tipo: 'sValorada',
			})
			setSVList((prev) => prev.concat(seriesValoradasResponse.results))
		}
	}

	return (
		<>
			<h2 className='h2Slider'>Peliculas Populares</h2>
			<Slider
				tipo={'pPopular'}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}
				setPage={setPage}>
				{PPList.map((popular) => (
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
				{PVList.map((popular) => (
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
				{SPList.map((popular) => (
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
				{SVList.map((popular) => (
					<CardPelicula
						pelicula={popular}
						key={popular.id}
						obtenerPelicula={obtenerSerie}
					/>
				))}
			</Slider>
		</>
	)
}

export default MainInicio
