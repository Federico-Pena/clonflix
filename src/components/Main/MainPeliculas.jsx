import CardPelicula from '../CardPelicula/CardPelicula'
import Slider from '../Slider/Slider'
import { apiconfig } from '../../config/apiConfig'
import usePelicula from '../../hooks/usePelicula'
import usePagePeli from '../../hooks/usePagePeli'
import useGenereosPeli from '../../hooks/useGenereosPeli'

function MainPeliculas() {
	const { trendingPeli, fetchDataPeli } = usePelicula()
	const {
		loading,
		animatPeli,
		actionPeli,
		aventPeli,
		comediaPeli,
		familiaPeli,
		misterioPeli,
		fetchGeneros,
	} = useGenereosPeli()
	const {
		pageTendenciaP,
		pageActionP,
		pageAnimatP,
		pageAventuraP,
		pageComediaP,
		pageFamiliaP,
		pageMisterioP,
		setPageComediaP,
		setPageFamiliaP,
		setPageMisterioP,
		setPageAventuraP,
		setPageAnimatP,
		setPageActionP,
		setPagTendenciaP,
	} = usePagePeli()

	const setPage = (e) => {
		if (e.enPantalla === true) {
			if (e.tipo === apiconfig.tendenciasPelicula) {
				setPagTendenciaP()
			} else if (e.tipo === apiconfig.generosP.accion) {
				setPageActionP()
			} else if (e.tipo === apiconfig.generosP.animacion) {
				setPageAnimatP()
			} else if (e.tipo === apiconfig.generosP.aventura) {
				setPageAventuraP()
			} else if (e.tipo === apiconfig.generosP.comedia) {
				setPageComediaP()
			} else if (e.tipo === apiconfig.generosP.familia) {
				setPageFamiliaP()
			} else if (e.tipo === apiconfig.generosP.misterio) {
				setPageMisterioP()
			}
		}
	}

	const obtenerSeriesYpeliculas = (tipo) => {
		if (tipo === apiconfig.tendenciasPelicula) {
			fetchDataPeli(pageTendenciaP, apiconfig.tendenciasPelicula)
		} else if (tipo === apiconfig.generosP.accion) {
			fetchGeneros(pageActionP, apiconfig.generosP.accion)
		} else if (tipo === apiconfig.generosP.animacion) {
			fetchGeneros(pageAnimatP, apiconfig.generosP.animacion)
		} else if (tipo === apiconfig.generosP.aventura) {
			fetchGeneros(pageAventuraP, apiconfig.generosP.aventura)
		} else if (tipo === apiconfig.generosP.comedia) {
			fetchGeneros(pageComediaP, apiconfig.generosP.comedia)
		} else if (tipo === apiconfig.generosP.familia) {
			fetchGeneros(pageFamiliaP, apiconfig.generosP.familia)
		} else if (tipo === apiconfig.generosP.misterio) {
			fetchGeneros(pageMisterioP, apiconfig.generosP.misterio)
		}
	}

	return (
		<>
			<h2 className='h2Slider'>Tendencias</h2>
			<Slider
				tipo={apiconfig.tendenciasPelicula}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{trendingPeli.map((popular, i) => (
					<CardPelicula
						tipo={'apiconfig.tendenciasPelicula'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>
			<h2 className='h2Slider'>Accion</h2>
			<Slider
				tipo={apiconfig.generosP.accion}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{actionPeli.map((popular, i) => (
					<CardPelicula
						tipo={'apiconfig.generosP.accion'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>
			<h2 className='h2Slider'>Misterio</h2>
			<Slider
				tipo={apiconfig.generosP.misterio}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{misterioPeli.map((popular, i) => (
					<CardPelicula
						tipo={'apiconfig.generosP.misterio'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>
			<h2 className='h2Slider'>Familia</h2>
			<Slider
				tipo={apiconfig.generosP.familia}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{familiaPeli.map((popular, i) => (
					<CardPelicula
						tipo={'apiconfig.generosP.familia'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>
			<h2 className='h2Slider'>Comedia</h2>
			<Slider
				tipo={apiconfig.generosP.comedia}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{comediaPeli.map((popular, i) => (
					<CardPelicula
						tipo={'apiconfig.generosP.comedia'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>
			<h2 className='h2Slider'>Aventura</h2>
			<Slider
				tipo={apiconfig.generosP.aventura}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{aventPeli.map((popular, i) => (
					<CardPelicula
						tipo={'apiconfig.generosP.aventura'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>

			<h2 className='h2Slider'>Animacion</h2>
			<Slider
				tipo={apiconfig.generosP.animacion}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{animatPeli.map((popular, i) => (
					<CardPelicula
						tipo={'apiconfig.generosP.animacion'}
						pelicula={popular}
						key={`${popular.id} ${i}`}
					/>
				))}
			</Slider>
		</>
	)
}

export default MainPeliculas
