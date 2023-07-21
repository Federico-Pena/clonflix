import { useEffect, useRef, useState } from 'react'
import { apiconfig } from '../../config/apiConfig'
import { IoArrowBack, IoShareSocialOutline } from 'react-icons/io5'
const apiKey = import.meta.env.VITE_TMDB_API_KEY

import './FullInfo.scss'
import Videos from './Videos'
import { Link, useLocation } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'
function FullInfo() {
	const locationR = useLocation()
	const divFullInfoRef = useRef(null)
	const [fullInfo, setFullInfo] = useState([])
	const [loading, setLoading] = useState(false)
	const [urlAnterior, setUrlAnterior] = useState('')

	const saberQueEs = (query) => {
		if (query === 'pelicula') {
			return 'pelicula'
		}
	}
	useEffect(() => {
		let url
		const id = locationR.pathname.split('$')[1]
		const query = locationR.search.split('?')[1]
		console.log(query)
		const obtenerfullInfo = async () => {
			setLoading(true)
			const UrlAnterior = locationR.pathname.split('$')[0].split('/')[1]
			setUrlAnterior(UrlAnterior)
			const busqueda = saberQueEs(query)
			console.log(id)
			if (busqueda === 'pelicula') {
				url = `${apiconfig.baseUrl}/movie/${id}?append_to_response=cast%2Cvideos%2Ctype%2Ccreated_by&api_key=${apiKey}&language=es-MX`
			} else {
				url = `${apiconfig.baseUrl}/tv/${id}?append_to_response=cast%2Cvideos%2Ctype%2Ccreated_by&api_key=${apiKey}&language=es-MX`
			}
			try {
				const res = await fetch(url)
				const data = await res.json()
				setFullInfo(data)
				setTimeout(() => {
					setLoading(false)
				}, 800)
			} catch (error) {
				throw new Error(error)
			}
		}
		obtenerfullInfo()
	}, [locationR])
	const compartir = () => {
		if ('share' in navigator) {
			navigator
				.share({
					title: 'Mira Esta Recomendacion',
					url: window.location.href,
				})
				.then((res) => {
					console.log(res)
				})
				.catch((error) => {
					console.log(error)
				})
		}
	}
	return (
		<div className='divFullInfo' ref={divFullInfoRef}>
			{loading ? (
				<Loading />
			) : (
				<>
					<Link to={`/${urlAnterior}`} className='btnCerrar'>
						<IoArrowBack />
					</Link>
					<button onClick={compartir} className='btnCompartir'>
						<IoShareSocialOutline />
					</button>
					{fullInfo && fullInfo.videos?.results.length ? (
						<ul className='ulVideo'>
							<li>
								<iframe
									title={fullInfo.videos?.results[0].name}
									src={`https://www.youtube.com/embed/${fullInfo.videos.results[0]?.key}?mute=true&autoplay=1`}
									allow='autoplay'></iframe>
							</li>
						</ul>
					) : (
						fullInfo &&
						fullInfo.backdrop_path && (
							<img
								className='FullInfoImg'
								src={apiconfig.baseUrlImageOriginal + fullInfo.backdrop_path}
								alt={`Portada de la fullInfo ${
									fullInfo.title || fullInfo.name
								}`}
							/>
						)
					)}
					{fullInfo && (
						<div className='titulosFullInfo'>
							<h3>{fullInfo.title || fullInfo.name}</h3>
							<h4>{fullInfo.tagline}</h4>
							{fullInfo.release_date && (
								<h4>
									Estreno {new Date(fullInfo.release_date).toLocaleDateString()}
								</h4>
							)}
						</div>
					)}
					{fullInfo && fullInfo.genres?.length && (
						<ul className='generosFullInfo'>
							{fullInfo.genres?.map((genre) => {
								return (
									<li key={genre.id}>
										<p>{genre.name}</p>
									</li>
								)
							})}
						</ul>
					)}
					{fullInfo && (
						<ul className='votosFullInfo'>
							<li>
								<p>Votacion</p>
								<p>{fullInfo.vote_count}</p>
							</li>
							<li>
								<p>Popularidad</p>
								<p> {fullInfo.popularity}</p>
							</li>
							<li>
								<p>Promedio</p>
								<p>{fullInfo.vote_average?.toFixed(1)}</p>
							</li>
						</ul>
					)}

					{fullInfo && fullInfo.overview && (
						<p className='overview'>{fullInfo.overview}</p>
					)}

					{fullInfo && fullInfo.production_companies && (
						<ul className='productionFullInfo'>
							{fullInfo.production_companies?.map((company) => {
								return (
									company.logo_path && (
										<li key={company.id}>
											<img
												src={apiconfig.baseUrlImageW92 + company.logo_path}
												alt={`Logo de la compania ${company.name}`}
											/>
										</li>
									)
								)
							})}
						</ul>
					)}

					{fullInfo && fullInfo.videos?.results.length && (
						<ul className='videosFullInfo'>
							{fullInfo.videos.results?.splice(1, 5).map((video, i) => {
								return video.key && <Videos key={i} video={video} />
							})}
						</ul>
					)}

					{fullInfo &&
						fullInfo.created_by?.length &&
						fullInfo.created_by[0].profile_path && (
							<ul className='created_byFullInfo'>
								<li>{fullInfo.created_by[0].name}</li>
								<li>
									<img
										className='imgCreador'
										src={
											apiconfig.baseUrlImageW92 +
											fullInfo.created_by[0].profile_path
										}
										alt={`Foto de perfil del creador de ${fullInfo.created_by[0].name}`}
									/>
								</li>
							</ul>
						)}
					{fullInfo &&
						fullInfo.seasons?.length &&
						fullInfo.seasons.map((season) => {
							return (
								<ul key={season.id} className='seasonsFullInfo'>
									<li>
										<strong>{season.name}</strong>
									</li>
									<li>{season.air_date}</li>
									<li>{season.overview}</li>
									{season.poster_path && (
										<li>
											<img
												src={apiconfig.baseUrlImageW300 + season.poster_path}
												alt={`Portada de la temporada ${season.name}`}
											/>
										</li>
									)}
								</ul>
							)
						})}
				</>
			)}
		</div>
	)
}

export default FullInfo
