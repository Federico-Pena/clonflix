import CardPelicula from '../CardPelicula/CardPelicula'
import Slider from '../Slider/Slider'
import { apiconfig } from '../../config/apiConfig'
import usePaginacion from '../../hooks/usePaginacion'
import useFetch from '../../hooks/useFetch'
import useFetchQuerys from '../../hooks/useFetchQuerys'

function MainPeliculas() {
	const { datapPolular, datapValorada, trendingP, fetchDataUse } = useFetch()
	const { loading, peliculasAccion, fetchDataUseQuery } = useFetchQuerys()
	const {
		pagePPList,
		pagePVList,
		pageTendenciaP,
		pagePAccion,
		setPagPPlist,
		setPagPVList,
		setPagTendenciaP,
		setPagPAccion,
	} = usePaginacion()

	const setPage = (e) => {
		if (e.enPantalla === true) {
			if (e.tipo === apiconfig.pPolular) {
				setPagPPlist()
			}
			if (e.tipo === apiconfig.pValorada) {
				setPagPVList()
			}
			if (e.tipo === apiconfig.tendenciasPelicula) {
				setPagTendenciaP()
			}
			if (e.tipo === apiconfig.pAccion) {
				setPagPAccion()
			}
		}
	}

	const obtenerSeriesYpeliculas = (tipo) => {
		if (tipo === apiconfig.pPolular) {
			fetchDataUse(pagePPList, apiconfig.pPolular)
		}
		if (tipo === apiconfig.pValorada) {
			fetchDataUse(pagePVList, apiconfig.pValorada)
		}
		if (tipo === apiconfig.tendenciasPelicula) {
			fetchDataUse(pageTendenciaP, apiconfig.tendenciasPelicula)
		}
		if (tipo === apiconfig.pAccion) {
			fetchDataUseQuery(pagePAccion, apiconfig.pAccion, 'Aventura')
		}
	}

	return (
		<>
			<h2 className='h2Slider'>Aventura</h2>
			<Slider
				tipo={apiconfig.pAccion}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{peliculasAccion.map((popular, i) => (
					<CardPelicula
						tipo={'apiconfig.pAccion'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>

			<h2 className='h2Slider'>Tendencias</h2>
			<Slider
				tipo={apiconfig.tendenciasPelicula}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{trendingP.map((popular, i) => (
					<CardPelicula
						tipo={'apiconfig.tendenciasPelicula'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>

			<h2 className='h2Slider'>Peliculas Populares</h2>
			<Slider
				tipo={apiconfig.pPolular}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}
				setPage={setPage}>
				{datapPolular.map((popular, i) => (
					<CardPelicula
						tipo={'apiconfig.pPolular'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>
			<h2 className='h2Slider'>Peliculas Mejor Valoradas</h2>
			<Slider
				tipo={apiconfig.pValorada}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}
				setPage={setPage}>
				{datapValorada.map((popular, i) => (
					<CardPelicula
						tipo={'apiconfig.pValorada'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>
		</>
	)
}

export default MainPeliculas
