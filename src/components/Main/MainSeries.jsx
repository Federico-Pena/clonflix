import CardPelicula from '../CardPelicula/CardPelicula'
import Slider from '../Slider/Slider'
import { apiconfig } from '../../config/apiConfig'
import usePaginacion from '../../hooks/usePaginacion'
import useFetch from '../../hooks/useFetch'
import useFetchQuerys from '../../hooks/useFetchQuerys'

function MainSeries() {
	const { datasPopular, datasValorada, trendingS, fetchDataUse } = useFetch()
	const { seriesAccion, fetchDataUseQuery } = useFetchQuerys()
	const {
		pageSPList,
		pageSVList,
		pageTendenciaS,
		pageSAccion,
		setPagSPList,
		setPagSVList,
		setPagTendenciaS,
		setPagSAccion,
	} = usePaginacion()

	const setPage = (e) => {
		if (e.enPantalla === true) {
			if (e.tipo === apiconfig.sPopular) {
				setPagSPList()
			}
			if (e.tipo === apiconfig.sValorada) {
				setPagSVList()
			}
			if (e.tipo === apiconfig.tendenciasSeries) {
				setPagTendenciaS()
			}
			if (e.tipo === apiconfig.sAccion) {
				setPagSAccion()
			}
		}
	}

	const obtenerSeriesYpeliculas = (tipo) => {
		if (tipo === apiconfig.sPopular) {
			fetchDataUse(pageSPList, apiconfig.sPopular)
		}
		if (tipo === apiconfig.sValorada) {
			fetchDataUse(pageSVList, apiconfig.sValorada)
		}
		if (tipo === apiconfig.tendenciasSeries) {
			fetchDataUse(pageTendenciaS, apiconfig.tendenciasSeries)
		}
		if (tipo === apiconfig.sAccion) {
			fetchDataUseQuery(pageSAccion, apiconfig.sAccion, 'action')
		}
	}

	return (
		<>
			<h2 className='h2Slider'>Accion</h2>
			<Slider
				tipo={apiconfig.sAccion}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}
				setPage={setPage}>
				{seriesAccion?.map((popular, i) => (
					<CardPelicula
						tipo={'apiconfig.sAccion'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>
			<h2 className='h2Slider'>Tendencias</h2>
			<Slider
				tipo={apiconfig.tendenciasSeries}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}
				setPage={setPage}>
				{trendingS.map((popular, i) => (
					<CardPelicula
						tipo={'apiconfig.tendenciasSeries'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>
			<h2 className='h2Slider'>Series Populares</h2>
			<Slider
				tipo={apiconfig.sPopular}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}
				setPage={setPage}>
				{datasPopular.map((popular, i) => (
					<CardPelicula
						tipo={'apiconfig.sPopular'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>

			<h2 className='h2Slider'>Series Mejor Valoradas</h2>
			<Slider
				tipo={apiconfig.sValorada}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{datasValorada.map((popular, i) => (
					<CardPelicula
						tipo={'apiconfig.sValorada'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>
		</>
	)
}

export default MainSeries
