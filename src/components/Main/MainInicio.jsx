import CardPelicula from '../CardPelicula/CardPelicula'
import Slider from '../Slider/Slider'
import { apiconfig } from '../../config/apiConfig'
import usePaginacion from '../../hooks/usePaginacion'
import useFetch from '../../hooks/useFetch'
const apiKey = import.meta.env.VITE_TMDB_API_KEY

function MainInicio({ setFullInfo, obtenerPelicula }) {
	const {
		datapPolular,
		datapValorada,
		datasPopular,
		datasValorada,
		fetchDataUse,
	} = useFetch()
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
			if (e.tipo === apiconfig.pPolular) {
				setPagPPlist()
			}
			if (e.tipo === apiconfig.pValorada) {
				setpagPVList()
			}
			if (e.tipo === apiconfig.sPopular) {
				sePagSPList()
			}
			if (e.tipo === apiconfig.sValorada) {
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
	const obtenerSeriesYpeliculas = (tipo) => {
		if (tipo === apiconfig.pPolular) {
			fetchDataUse(pagePPList, apiconfig.pPolular)
		}
		if (tipo === apiconfig.pValorada) {
			fetchDataUse(pagePVList, apiconfig.pValorada)
		}
		if (tipo === apiconfig.sPopular) {
			fetchDataUse(pageSPList, apiconfig.sPopular)
		}
		if (tipo === apiconfig.sValorada) {
			fetchDataUse(pageSVList, apiconfig.sValorada)
		}
	}

	return (
		<>
			<h2 className='h2Slider'>Peliculas Populares</h2>
			<Slider
				tipo={apiconfig.pPolular}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}
				setPage={setPage}>
				{datapPolular.map((popular) => (
					<CardPelicula
						pelicula={popular}
						key={popular.id}
						obtenerPelicula={obtenerPelicula}
					/>
				))}
			</Slider>

			<h2 className='h2Slider'>Peliculas Mejor Valoradas</h2>
			<Slider
				tipo={apiconfig.pValorada}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{datapValorada.map((popular) => (
					<CardPelicula
						pelicula={popular}
						key={popular.id}
						obtenerPelicula={obtenerPelicula}
					/>
				))}
			</Slider>

			<h2 className='h2Slider'>Series Populares</h2>
			<Slider
				tipo={apiconfig.sPopular}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{datasPopular.map((popular) => (
					<CardPelicula
						pelicula={popular}
						key={popular.id}
						obtenerPelicula={obtenerSerie}
					/>
				))}
			</Slider>

			<h2 className='h2Slider'>Series Mejor Valoradas</h2>
			<Slider
				tipo={apiconfig.sValorada}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{datasValorada.map((popular) => (
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
