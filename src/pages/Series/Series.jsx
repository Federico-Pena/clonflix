import '../Inicio/Inicio.scss'

import { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero'
import { fetchData } from '../../services/fetchData'
import { apiconfig } from '../../config/apiConfig'
const apiKey = import.meta.env.VITE_TMDB_API_KEY

function Series() {
	const [proximamenteS, setProximamenteS] = useState(null)
	const [fullInfo, setFullInfo] = useState()
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		const obtenerUltimaPelicula = async () => {
			setLoading(true)
			const response = await fetchData({
				pagina: 1,
				tipo: 'sPopular',
			})
			console.log(response)
			setProximamenteS(
				response.results[Math.floor(Math.random() * response.results.length)]
			)
			setLoading(false)
		}
		obtenerUltimaPelicula()
	}, [])

	const obtenerSerie = (e) => {
		let url = `${apiconfig.baseUrl}/tv/${e}?append_to_response=cast%2Cvideos%2Ctype%2Ccreated_by&api_key=${apiKey}&language=es-MX`
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				setFullInfo(data)
			})
	}
	return (
		<main className='mainIndex'>
			<>
				{proximamenteS && (
					<Hero obtenerPelicula={obtenerSerie} proximamenteP={proximamenteS} />
				)}
			</>
		</main>
	)
}

export default Series
