import CardPelicula from '../CardPelicula/CardPelicula'
import Slider from '../Slider/Slider'
import { apiconfig } from '../../config/apiConfig'
import usePaginacion from '../../hooks/usePagePeli'
import usePelicula from '../../hooks/usePelicula'
import useSerie from '../../hooks/useSerie'
import usePagePeli from '../../hooks/usePagePeli'
import usePageSerie from '../../hooks/usePageSerie'

function MainInicio() {
	const { datapPolular, datapValorada, fetchDataPeli } = usePelicula()
	const { datasPopular, datasValorada, fetchDataSerie } = useSerie()
	const { pageSVList, pageSPList, setPagSPList, setPagSVList } = usePageSerie()
	const { pagePPList, pagePVList, setPagPPlist, setPagPVList } = usePagePeli()

	const setPage = (e) => {
		if (e.enPantalla === true) {
			if (e.tipo === apiconfig.pPolular) {
				setPagPPlist()
			}
			if (e.tipo === apiconfig.pValorada) {
				setPagPVList()
			}
			if (e.tipo === apiconfig.sPopular) {
				setPagSPList()
			}
			if (e.tipo === apiconfig.sValorada) {
				setPagSVList()
			}
		}
	}

	const obtenerSeriesYpeliculas = (tipo) => {
		if (tipo === apiconfig.pPolular) {
			fetchDataPeli(pagePPList, apiconfig.pPolular)
		}
		if (tipo === apiconfig.pValorada) {
			fetchDataPeli(pagePVList, apiconfig.pValorada)
		}
		if (tipo === apiconfig.sPopular) {
			fetchDataSerie(pageSPList, apiconfig.sPopular)
		}
		if (tipo === apiconfig.sValorada) {
			fetchDataSerie(pageSVList, apiconfig.sValorada)
		}
	}

	return (
		<>
			<Slider
				titulo={'Peliculas Populares'}
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
			<Slider
				titulo={'Peliculas Mejor Valoradas'}
				tipo={apiconfig.pValorada}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{datapValorada.map((popular, i) => (
					<CardPelicula
						tipo={'apiconfig.pValorada'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>
			<Slider
				titulo={'Series Populares'}
				tipo={apiconfig.sPopular}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{datasPopular.map((popular, i) => (
					<CardPelicula
						tipo={'apiconfig.sPopular'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>
			<Slider
				titulo={'Series Mejor Valoradas'}
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

export default MainInicio
