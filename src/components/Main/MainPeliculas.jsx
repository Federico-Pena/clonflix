import CardPelicula from '../CardPelicula/CardPelicula'
import Slider from '../Slider/Slider'
import { apiconfig } from '../../config/apiConfig'
import usePelicula from '../../hooks/usePelicula'
import usePagePeli from '../../hooks/usePagePeli'
import useGenereosPeli from '../../hooks/useGenereosPeli'

function MainPeliculas() {
	const { trendingPeli, fetchDataPeli } = usePelicula()
	const pelicula = apiconfig.pelicula
	const genero = pelicula.generos
	const {
		loading,
		animatPeli,
		actionPeli,
		aventPeli,
		comediaPeli,
		familiaPeli,
		misterioPeli,
		fetchGenerosPeli,
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
			if (e.tipo === pelicula.tendencias) {
				setPagTendenciaP()
			} else if (e.tipo === genero.accion) {
				setPageActionP()
			} else if (e.tipo === genero.animacion) {
				setPageAnimatP()
			} else if (e.tipo === genero.aventura) {
				setPageAventuraP()
			} else if (e.tipo === genero.comedia) {
				setPageComediaP()
			} else if (e.tipo === genero.familia) {
				setPageFamiliaP()
			} else if (e.tipo === genero.misterio) {
				setPageMisterioP()
			}
		}
	}

	const obtenerSeriesYpeliculas = (tipo) => {
		if (tipo === pelicula.tendencias) {
			fetchDataPeli(pageTendenciaP, pelicula.tendencias)
		} else if (tipo === genero.accion) {
			fetchGenerosPeli(pageActionP, genero.accion)
		} else if (tipo === genero.animacion) {
			fetchGenerosPeli(pageAnimatP, genero.animacion)
		} else if (tipo === genero.aventura) {
			fetchGenerosPeli(pageAventuraP, genero.aventura)
		} else if (tipo === genero.comedia) {
			fetchGenerosPeli(pageComediaP, genero.comedia)
		} else if (tipo === genero.familia) {
			fetchGenerosPeli(pageFamiliaP, genero.familia)
		} else if (tipo === genero.misterio) {
			fetchGenerosPeli(pageMisterioP, genero.misterio)
		}
	}

	return (
		<>
			<h2 className='h2Slider'>Tendencias</h2>
			<Slider
				tipo={pelicula.tendencias}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{trendingPeli.map((popular, i) => (
					<CardPelicula
						tipo={'pelicula.tendencias'}
						pelicula={popular}
						key={`${popular.id}${i}`}
					/>
				))}
			</Slider>
			<h2 className='h2Slider'>Accion</h2>
			<Slider
				tipo={genero.accion}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{actionPeli.map((popular, i) => (
					<CardPelicula
						tipo={'pelicula.accion'}
						pelicula={popular}
						key={`${popular.id}${i}`}
					/>
				))}
			</Slider>
			<h2 className='h2Slider'>Misterio</h2>
			<Slider
				tipo={genero.misterio}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{misterioPeli.map((popular, i) => (
					<CardPelicula
						tipo={'pelicula.misterio'}
						pelicula={popular}
						key={`${popular.id}${i}`}
					/>
				))}
			</Slider>
			<h2 className='h2Slider'>Familia</h2>
			<Slider
				tipo={genero.familia}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{familiaPeli.map((popular, i) => (
					<CardPelicula
						tipo={'pelicula.familia'}
						pelicula={popular}
						key={`${popular.id}${i}`}
					/>
				))}
			</Slider>
			<h2 className='h2Slider'>Comedia</h2>
			<Slider
				tipo={genero.comedia}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{comediaPeli.map((popular, i) => (
					<CardPelicula
						tipo={'pelicula.comedia'}
						pelicula={popular}
						key={`${popular.id}${i}`}
					/>
				))}
			</Slider>
			<h2 className='h2Slider'>Aventura</h2>
			<Slider
				tipo={genero.aventura}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{aventPeli.map((popular, i) => (
					<CardPelicula
						tipo={'pelicula.aventura'}
						pelicula={popular}
						key={`${popular.id}${i}`}
					/>
				))}
			</Slider>

			<h2 className='h2Slider'>Animacion</h2>
			<Slider
				tipo={genero.animacion}
				setPage={setPage}
				obtenerSeriesYpeliculas={obtenerSeriesYpeliculas}>
				{animatPeli.map((popular, i) => (
					<CardPelicula
						tipo={'pelicula.animacion'}
						pelicula={popular}
						key={`${popular.id}${i}`}
					/>
				))}
			</Slider>
		</>
	)
}

export default MainPeliculas
