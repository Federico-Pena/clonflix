import CardPelicula from '../CardPelicula/CardPelicula'
import Slider from '../Slider/Slider'
import { apiconfig } from '../../config/apiConfig'
import usePelicula from '../../hooks/usePelicula'
import useSerie from '../../hooks/useSerie'
import usePagePeli from '../../hooks/usePagePeli'
import usePageSerie from '../../hooks/usePageSerie'

function MainInicio() {
	const { datapPolular, datapValorada, fetchDataPeli } = usePelicula()
	const { datasPopular, datasValorada, fetchDataSerie } = useSerie()
	const { pageSVList, pageSPList, setPagSPList, setPagSVList } = usePageSerie()
	const { pagePPList, pagePVList, setPagPPlist, setPagPVList } = usePagePeli()
	const pelicula = apiconfig.pelicula
	const serie = apiconfig.serie

	const setPage = (e) => {
		if (e.enPantalla === true) {
			if (e.tipo === pelicula.polular) {
				setPagPPlist()
			}
			if (e.tipo === pelicula.valorada) {
				setPagPVList()
			}
			if (e.tipo === serie.popular) {
				setPagSPList()
			}
			if (e.tipo === serie.valorada) {
				setPagSVList()
			}
		}
	}

	const obtenerSeriesYpeliculas = (tipo) => {
		if (tipo === pelicula.polular) {
			fetchDataPeli(pagePPList, pelicula.polular)
		}
		if (tipo === pelicula.valorada) {
			fetchDataPeli(pagePVList, pelicula.valorada)
		}
		if (tipo === serie.popular) {
			fetchDataSerie(pageSPList, serie.popular)
		}
		if (tipo === serie.valorada) {
			fetchDataSerie(pageSVList, serie.valorada)
		}
	}

	return (
		<>
			<Slider
				titulo={'Peliculas Populares'}
				tipo={pelicula.polular}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}
				setPage={setPage}>
				{datapPolular.map((popular, i) => (
					<CardPelicula
						tipo={'pelicula.polular'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>
			<Slider
				titulo={'Peliculas Mejor Valoradas'}
				tipo={pelicula.valorada}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{datapValorada.map((popular, i) => (
					<CardPelicula
						tipo={'pelicula.valorada'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>
			<Slider
				titulo={'Series Populares'}
				tipo={serie.popular}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{datasPopular.map((popular, i) => (
					<CardPelicula pelicula={popular} key={`${popular.id} ${i}`} />
				))}
			</Slider>
			<Slider
				titulo={'Series Mejor Valoradas'}
				tipo={serie.valorada}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{datasValorada.map((popular, i) => (
					<CardPelicula pelicula={popular} key={`${popular.id} ${i}`} />
				))}
			</Slider>
		</>
	)
}

export default MainInicio
