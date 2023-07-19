import '../Inicio/Inicio.scss'
import { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero'
import { apiconfig } from '../../config/apiConfig'
import useFetch from '../../hooks/useFetch'
import ContainerWrap from '../../components/ContainerWrap/ContainerWrap'
import CardPelicula from '../../components/CardPelicula/CardPelicula'
import usePaginacion from '../../hooks/usePaginacion'
import Loading from '../../components/Loading/Loading'
const apiKey = import.meta.env.VITE_TMDB_API_KEY

function Series() {
	const [fullInfo, setFullInfo] = useState()
	const { loading, datasPopular, trendingS, fetchDataUse } = useFetch()
	const { setPagTendenciaS, pageTendenciaS } = usePaginacion()
	useEffect(() => {
		fetchDataUse(1, apiconfig.sPopular)
	}, [])

	const obtenerSerie = (e) => {
		let url = `${apiconfig.baseUrl}/tv/${e}?append_to_response=cast%2Cvideos%2Ctype%2Ccreated_by&api_key=${apiKey}&language=es-MX`
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				setFullInfo(data)
			})
	}
	const setearPag = (e) => {
		if (e.enPantalla === true) {
			if (e.tipo === apiconfig.tendenciasSeries) {
				setPagTendenciaS()
			}
		}
	}
	const obtenerPeliculas = (tipo) => {
		if (tipo === apiconfig.tendenciasSeries) {
			fetchDataUse(pageTendenciaS, apiconfig.tendenciasSeries)
		}
	}
	return (
		<main className='mainIndex'>
			{datasPopular && (
				<Hero
					obtenerPelicula={obtenerSerie}
					heroElement={
						datasPopular[Math.floor(Math.random() * datasPopular.length)]
					}
				/>
			)}
			<ContainerWrap
				obtenerPeliculas={obtenerPeliculas}
				tipo={apiconfig.tendenciasSeries}
				setPages={setearPag}>
				{trendingS.map((pelicula) => {
					return <CardPelicula pelicula={pelicula} key={pelicula.id} />
				})}
			</ContainerWrap>
		</main>
	)
}

export default Series
