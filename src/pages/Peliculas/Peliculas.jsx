import './Peliculas.scss'
import '../Inicio/Inicio.scss'

import { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero'
import { fetchData } from '../../services/fetchData'
import { apiconfig } from '../../config/apiConfig'
const apiKey = import.meta.env.VITE_TMDB_API_KEY

function Peliculas() {
	const [proximamenteP, setProximamenteP] = useState(null)
	const [fullInfo, setFullInfo] = useState()
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		const obtenerUltimaPelicula = async () => {
			setLoading(true)
			const response = await fetchData({
				pagina: 1,
				tipo: 'pPopular',
			})
			setProximamenteP(
				response.results[Math.floor(Math.random() * response.results.length)]
			)
			setLoading(false)
		}
		obtenerUltimaPelicula()
	}, [])

	const obtenerPelicula = (e) => {
		let url = `${apiconfig.baseUrl}/movie/${e}?append_to_response=cast%2Cvideos%2Ctype%2Ccreated_by&api_key=${apiKey}&language=es-MX`
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				setFullInfo(data)
			})
	}
	return (
		<main className='mainIndex'>
			<>
				{proximamenteP && (
					<Hero
						obtenerPelicula={obtenerPelicula}
						proximamenteP={proximamenteP}
					/>
				)}
			</>
		</main>
	)
}

export default Peliculas
