import './Inicio.scss'
import { useEffect, useState } from 'react'
import { apiconfig } from '../../config/apiConfig'
import FullInfo from '../../components/FullInfo/FullInfo'
import Hero from '../../components/Hero/Hero'
import MainInicio from '../../components/Main/MainInicio'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading/Loading'

const apiKey = import.meta.env.VITE_TMDB_API_KEY

function Inicio() {
	const [fullInfo, setFullInfo] = useState()
	const { datapProximamente, fetchDataUse, loading } = useFetch()

	useEffect(() => {
		fetchDataUse(1, apiconfig.pProximamente)
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
	return loading ? (
		<Loading />
	) : (
		<main className='mainIndex'>
			{fullInfo ? (
				<FullInfo pelicula={fullInfo} cerrarFullInfo={cerrarFullInfo} />
			) : null}
			{datapProximamente && (
				<Hero
					obtenerPelicula={obtenerPelicula}
					heroElement={
						datapProximamente[
							Math.floor(Math.random() * datapProximamente.length)
						]
					}
				/>
			)}
			<MainInicio
				obtenerPelicula={obtenerPelicula}
				setFullInfo={setFullInfoState}
			/>
		</main>
	)
}

export default Inicio
