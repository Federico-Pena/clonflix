import CardPelicula from '../CardPelicula/CardPelicula'
import Slider from '../Slider/Slider'
import { apiconfig } from '../../config/apiConfig'
import useSerie from '../../hooks/useSerie'
import usePageSerie from '../../hooks/usePageSerie'
import useGenerosSerie from '../../hooks/useGenerosSerie'
import Loading from '../Loading/Loading'

function MainSeries() {
	const { trendingS, fetchDataSerie } = useSerie()
	const {
		accionSerie,
		animatSerie,
		comediaSerie,
		familiaSerie,
		misterioSerie,
		fetchGenerosSerie,
	} = useGenerosSerie()
	const {
		pageTendenciaS,
		pageActionS,
		pageAnimatS,
		pageComediaS,
		pageFamiliaS,
		pageMisterioS,
		setPagTendenciaS,
		setPagActionS,
		setPagAnimatS,
		setPagFamiliaS,
		setPagComediaS,
		setPagMisterioS,
	} = usePageSerie()
	const genero = apiconfig.serie.generos
	const setPage = (e) => {
		if (e.enPantalla === true) {
			if (e.tipo === apiconfig.tendenciasSeries) {
				setPagTendenciaS()
			}
			if (e.tipo === genero.accion) {
				setPagActionS()
			}
			if (e.tipo === genero.animacion) {
				setPagAnimatS()
			}
			if (e.tipo === genero.familia) {
				setPagFamiliaS()
			}
			if (e.tipo === genero.comedia) {
				setPagComediaS()
			}
			if (e.tipo === genero.misterio) {
				setPagMisterioS()
			}
		}
	}

	const obtenerSeriesYpeliculas = (tipo) => {
		if (tipo === apiconfig.tendenciasSeries) {
			fetchDataSerie(pageTendenciaS, apiconfig.serie.tendencias)
		}
		if (tipo === genero.accion) {
			fetchGenerosSerie(pageActionS, genero.accion)
		}
		if (tipo === genero.animacion) {
			fetchGenerosSerie(pageAnimatS, genero.animacion)
		}
		if (tipo === genero.familia) {
			fetchGenerosSerie(pageFamiliaS, genero.familia)
		}
		if (tipo === genero.comedia) {
			fetchGenerosSerie(pageComediaS, genero.comedia)
		}
		if (tipo === genero.misterio) {
			fetchGenerosSerie(pageMisterioS, genero.misterio)
		}
	}
	return (
		<>
			<h2 className='h2Slider'>Tendencias</h2>
			<Slider
				tipo={apiconfig.tendenciasSeries}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}
				setPage={setPage}>
				{trendingS.map((popular, i) => (
					<CardPelicula pelicula={popular} key={`${popular.id} ${i}`} />
				))}
			</Slider>
			<h2 className='h2Slider'>Comedia</h2>
			<Slider
				tipo={genero.comedia}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}
				setPage={setPage}>
				{comediaSerie?.map((popular, i) => (
					<CardPelicula pelicula={popular} key={`${popular.id} ${i}`} />
				))}
			</Slider>
			<h2 className='h2Slider'>Accion</h2>
			<Slider
				tipo={genero.accion}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}
				setPage={setPage}>
				{accionSerie.map((popular, i) => (
					<CardPelicula pelicula={popular} key={`${popular.id} ${i}`} />
				))}
			</Slider>
			<h2 className='h2Slider'>Misterio</h2>
			<Slider
				tipo={genero.misterio}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}
				setPage={setPage}>
				{misterioSerie?.map((popular, i) => (
					<CardPelicula pelicula={popular} key={`${popular.id} ${i}`} />
				))}
			</Slider>
			<h2 className='h2Slider'>Familiar</h2>
			<Slider
				tipo={genero.familia}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}
				setPage={setPage}>
				{familiaSerie?.map((popular, i) => (
					<CardPelicula pelicula={popular} key={`${popular.id} ${i}`} />
				))}
			</Slider>
			<h2 className='h2Slider'>Animacion</h2>
			<Slider
				tipo={genero.animacion}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}
				setPage={setPage}>
				{animatSerie?.map((popular, i) => (
					<CardPelicula pelicula={popular} key={`${popular.id} ${i}`} />
				))}
			</Slider>
		</>
	)
}

export default MainSeries
