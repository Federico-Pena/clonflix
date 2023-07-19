import CardPelicula from '../CardPelicula/CardPelicula'
import Slider from '../Slider/Slider'
import { apiconfig } from '../../config/apiConfig'
import usePaginacion from '../../hooks/usePaginacion'
import useFetch from '../../hooks/useFetch'

function MainInicio() {
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
		setPagPVList,
		setPagSPList,
		setPagSVList,
	} = usePaginacion()

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
			{datapPolular ? (
				<>
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
				</>
			) : null}

			<h2 className='h2Slider'>Peliculas Mejor Valoradas</h2>
			<Slider
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

			<h2 className='h2Slider'>Series Populares</h2>
			<Slider
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

export default MainInicio
