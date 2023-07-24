import { useEffect, useRef, useState } from 'react'
import { apiconfig } from '../../config/apiConfig'
import { IoArrowBack } from 'react-icons/io5'
const apiKey = import.meta.env.VITE_TMDB_API_KEY

import './FullInfo.scss'
import { Link, useLocation } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'
import Modal from '../../components/Modal/Modal'
import Hero from './Hero'
import Generos from './Generos'
import Titulos from './Titulos'
import Votos from './Votos'
import Sinopsis from './Sinopsis'
import Companias from './Companias'
import Videos from './Videos'
import CreadoPor from './CreadoPor'
import Temporadas from './Temporadas'
function FullInfo() {
	const locationR = useLocation()
	const divFullInfoRef = useRef(null)
	const [fullInfo, setFullInfo] = useState(null)
	const [loading, setLoading] = useState(false)
	const [urlAnterior, setUrlAnterior] = useState('')
	const [modal, setModal] = useState(false)
	const [error, setError] = useState(false)
	const [errorFectch, setErrorFetch] = useState(false)

	const saberQueEs = (query) => {
		if (query === 'pelicula') {
			return 'pelicula'
		}
	}

	useEffect(() => {
		let url
		const id = locationR.pathname.split('=')[1]
		const query = locationR.search.split('?')[1]
		const UrlAnterior = location.origin + locationR.pathname.split('id')[0]
		const staticURL = `?append_to_response=cast%2Cvideos%2Ctype%2Ccreated_by&api_key=${apiKey}&language=es-MX`
		const busqueda = saberQueEs(query)
		const obtenerfullInfo = async () => {
			setLoading(true)
			setUrlAnterior(UrlAnterior)
			if (busqueda === 'pelicula') {
				url = `${apiconfig.baseUrl}/movie/${id}${staticURL}`
			} else {
				url = `${apiconfig.baseUrl}/tv/${id}${staticURL}`
			}
			try {
				const res = await fetch(url)
				const data = await res.json()
				setFullInfo(data)
				setLoading(false)
			} catch (error) {
				console.log(error)
			}
		}
		obtenerfullInfo()
	}, [locationR])

	return (
		<div className='divFullInfo' ref={divFullInfoRef}>
			{modal && error && <Modal titulo={'El Elemento Ya Esta Guardado'} />}
			{modal && !error && <Modal titulo={'Elemento Guardado Con Exito'} />}
			{loading &&
			fullInfo &&
			(!fullInfo.backdrop_path || !fullInfo.videos.results.length) ? (
				<Loading />
			) : (
				<>
					<Link to={urlAnterior} className='btnCerrar'>
						<IoArrowBack />
					</Link>
					<Hero fullInfo={fullInfo} />
					<Titulos
						fullInfo={fullInfo}
						setError={setError}
						setModal={setModal}
					/>
					<Generos fullInfo={fullInfo} />
					<Votos fullInfo={fullInfo} />
					<Sinopsis fullInfo={fullInfo} />
					<Companias fullInfo={fullInfo} />
					<Videos fullInfo={fullInfo} />
					<CreadoPor fullInfo={fullInfo} />
					<Temporadas fullInfo={fullInfo} />
				</>
			)}
		</div>
	)
}

export default FullInfo
