import './Peliculas.scss'
import '../Inicio/Inicio.scss'
import { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero'
import { apiconfig } from '../../config/apiConfig'
import useFetch from '../../hooks/useFetch'
import ContainerWrap from '../../components/ContainerWrap/ContainerWrap'
import usePaginacion from '../../hooks/usePaginacion'
import CardPelicula from '../../components/CardPelicula/CardPelicula'
import Loading from '../../components/Loading/Loading'
const apiKey = import.meta.env.VITE_TMDB_API_KEY
function Peliculas() {
	const [fullInfo, setFullInfo] = useState()
	const { loading, datapPolular, trendingP, fetchDataUse } = useFetch()
	const { pageTendenciaP, setPagTendenciaP } = usePaginacion()

	useEffect(() => {
		fetchDataUse(1, apiconfig.pPolular)
	}, [])

	const obtenerPelicula = (e) => {
		let url = `${apiconfig.baseUrl}/movie/${e}?append_to_response=cast%2Cvideos%2Ctype%2Ccreated_by&api_key=${apiKey}&language=es-MX`
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				setFullInfo(data)
			})
	}
	const setearPag = (e) => {
		if (e.enPantalla === true) {
			if (e.tipo === apiconfig.tendenciaPelicula) {
				setPagTendenciaP()
			}
		}
	}
	const obtenerPeliculas = (tipo) => {
		if (tipo === apiconfig.tendenciaPelicula) {
			fetchDataUse(pageTendenciaP, apiconfig.tendenciaPelicula)
		}
	}

	return (
		<main className='mainIndex'>
			{datapPolular && (
				<Hero
					obtenerPelicula={obtenerPelicula}
					heroElement={
						datapPolular[Math.floor(Math.random() * datapPolular.length)]
					}
				/>
			)}
			<ContainerWrap
				obtenerPeliculas={obtenerPeliculas}
				tipo={apiconfig.tendenciaPelicula}
				setPages={setearPag}>
				{trendingP.map((pelicula) => {
					return <CardPelicula pelicula={pelicula} key={pelicula.id} />
				})}
			</ContainerWrap>
		</main>
	)
}

export default Peliculas
