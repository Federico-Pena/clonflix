import './Inicio.scss'
import { useEffect, useState } from 'react'
import { fetchData } from '../../services/fetchData'
import { apiconfig } from '../../config/apiConfig'
import FullInfo from '../../components/FullInfo/FullInfo'
import Hero from '../../components/Hero/Hero'
import MainInicio from '../../components/Main/MainInicio'
const apiKey = import.meta.env.VITE_TMDB_API_KEY

function Inicio() {
	const [fullInfo, setFullInfo] = useState()
	const [loading, setLoading] = useState(false)

	const [proximamenteP, setProximamenteP] = useState(null)

	useEffect(() => {
		const obtenerUltimaPelicula = async () => {
			setLoading(true)
			const response = await fetchData({
				pagina: 1,
				tipo: 'pProximamente',
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

	const cerrarFullInfo = (e) => {
		e.classList.add('fullInfoAnimation')
		setTimeout(() => {
			setFullInfo()
		}, 300)
	}
	const setFullInfoState = (e) => {
		setFullInfo(e)
	}
	return (
		<main className='mainIndex'>
			{loading ? (
				'Cargando'
			) : (
				<>
					{fullInfo ? (
						<FullInfo pelicula={fullInfo} cerrarFullInfo={cerrarFullInfo} />
					) : null}
					{proximamenteP && (
						<Hero
							obtenerPelicula={obtenerPelicula}
							proximamenteP={proximamenteP}
						/>
					)}
					<MainInicio
						obtenerPelicula={obtenerPelicula}
						setFullInfo={setFullInfoState}
					/>
				</>
			)}
		</main>
	)
}

export default Inicio
