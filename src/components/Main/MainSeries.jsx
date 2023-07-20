import CardPelicula from '../CardPelicula/CardPelicula'
import Slider from '../Slider/Slider'
import { apiconfig } from '../../config/apiConfig'
import useSerie from '../../hooks/useSerie'
import usePageSerie from '../../hooks/usePageSerie'
import useGenereosPeli from '../../hooks/useGenereosPeli'

function MainSeries() {
	const { trendingS, fetchDataSerie } = useSerie()
	const {
		accionSerie,
		animatSerie,
		comediaSerie,
		familiaSerie,
		misterioSerie,
		fetchGeneros,
	} = useGenereosPeli()
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

	const setPage = (e) => {
		if (e.enPantalla === true) {
			if (e.tipo === apiconfig.tendenciasSeries) {
				setPagTendenciaS()
			}
			if (e.tipo === apiconfig.generosS.accion) {
				setPagActionS()
			}
			if (e.tipo === apiconfig.generosS.animacion) {
				setPagAnimatS()
			}
			if (e.tipo === apiconfig.generosS.familia) {
				setPagFamiliaS()
			}
			if (e.tipo === apiconfig.generosS.comedia) {
				setPagComediaS()
			}
			if (e.tipo === apiconfig.generosS.misterio) {
				setPagMisterioS()
			}
		}
	}

	const obtenerSeriesYpeliculas = (tipo) => {
		if (tipo === apiconfig.tendenciasSeries) {
			fetchDataSerie(pageTendenciaS, apiconfig.tendenciasSeries)
		}
		if (tipo === apiconfig.generosS.accion) {
			fetchGeneros(pageActionS, apiconfig.generosS.accion)
		}
		if (tipo === apiconfig.generosS.animacion) {
			fetchGeneros(pageAnimatS, apiconfig.generosS.animacion)
		}
		if (tipo === apiconfig.generosS.familia) {
			fetchGeneros(pageFamiliaS, apiconfig.generosS.familia)
		}
		if (tipo === apiconfig.generosS.comedia) {
			fetchGeneros(pageComediaS, apiconfig.generosS.comedia)
		}
		if (tipo === apiconfig.generosS.misterio) {
			fetchGeneros(pageMisterioS, apiconfig.generosS.misterio)
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
					<CardPelicula
						tipo={'apiconfig.tendenciasSeries'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>
			<h2 className='h2Slider'>Comedia</h2>
			<Slider
				tipo={apiconfig.generosS.comedia}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}
				setPage={setPage}>
				{comediaSerie?.map((popular, i) => (
					<CardPelicula
						tipo={'apiconfig.generosS.comedia'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>
			<h2 className='h2Slider'>Accion</h2>
			<Slider
				tipo={apiconfig.generosS.accion}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}
				setPage={setPage}>
				{accionSerie?.map((popular, i) => (
					<CardPelicula
						tipo={'apiconfig.generosS.accion'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>
			<h2 className='h2Slider'>Misterio</h2>
			<Slider
				tipo={apiconfig.generosS.misterio}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}
				setPage={setPage}>
				{misterioSerie?.map((popular, i) => (
					<CardPelicula
						tipo={'apiconfig.generosS.misterio'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>
			<h2 className='h2Slider'>Familiar</h2>
			<Slider
				tipo={apiconfig.generosS.familia}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}
				setPage={setPage}>
				{familiaSerie?.map((popular, i) => (
					<CardPelicula
						tipo={'apiconfig.generosS.familia'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>
			<h2 className='h2Slider'>Animacion</h2>
			<Slider
				tipo={apiconfig.generosS.animacion}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}
				setPage={setPage}>
				{animatSerie?.map((popular, i) => (
					<CardPelicula
						tipo={'apiconfig.generosS.animacion'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>
		</>
	)
}

export default MainSeries
