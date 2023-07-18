import { useRef } from 'react'
import { apiconfig } from '../../config/apiConfig'
import { IoArrowBack } from 'react-icons/io5'
import './FullInfo.scss'
import Videos from './Videos'
function FullInfo({ pelicula, cerrarFullInfo }) {
	const divFullInfoRef = useRef(null)
	return (
		<div className='divFullInfo' ref={divFullInfoRef}>
			<button
				className='btnCerrar'
				onClick={() => cerrarFullInfo(divFullInfoRef.current)}>
				<IoArrowBack />
			</button>
			{pelicula.videos.results.length ? (
				<ul className='ulVideo'>
					<li>
						<iframe
							title={pelicula.videos.results[0].name}
							src={`https://www.youtube.com/embed/${pelicula.videos.results[0].key}?autoplay=1&mute=true`}
							allow='autoplay'
							allowFullScreen={true}></iframe>
					</li>
				</ul>
			) : (
				<img
					className='FullInfoImg'
					src={apiconfig.baseUrlImageOriginal + pelicula.backdrop_path}
					alt={`Portada de la Pelicula ${pelicula.title}`}
				/>
			)}
			<div className='titulosFullInfo'>
				<h3>{pelicula.title}</h3>
				<h4>{pelicula.tagline}</h4>
				{pelicula.release_date && (
					<h4>
						Estreno {new Date(pelicula.release_date).toLocaleDateString()}
					</h4>
				)}
			</div>
			{pelicula.genres?.length && (
				<ul className='generosFullInfo'>
					{pelicula.genres?.map((genre) => {
						return (
							<li key={genre.id}>
								<p>{genre.name}</p>
							</li>
						)
					})}
				</ul>
			)}
			<ul className='votosFullInfo'>
				<li>
					<p>Votacion</p>
					<p>{pelicula.vote_count}</p>
				</li>
				<li>
					<p>Popularidad</p>
					<p> {pelicula.popularity}</p>
				</li>
				<li>
					<p>Promedio</p>
					<p>{pelicula.vote_average.toFixed(1)}</p>
				</li>
			</ul>
			<p className='overview'>{pelicula.overview}</p>

			{pelicula.production_companies[0]?.logo_path ? (
				<ul className='productionFullInfo'>
					{pelicula.production_companies?.map((company) => {
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
			) : null}

			{pelicula.videos.results.length && (
				<ul className='videosFullInfo'>
					{pelicula.videos.results?.splice(1, 5).map((video, i) => {
						return video.key && <Videos key={i} video={video} />
					})}
				</ul>
			)}

			{pelicula.created_by?.length && (
				<ul>
					<li>Creador</li>
					<li>{pelicula.created_by[0].name}</li>
					{pelicula.created_by[0].profile_path && (
						<li>
							<img
								src={
									apiconfig.baseUrlImageW92 +
									pelicula.created_by[0].profile_path
								}
								alt={`Foto de perfil del creador de ${pelicula.created_by[0].name}`}
							/>
						</li>
					)}
				</ul>
			)}
			{pelicula.seasons?.length &&
				pelicula.seasons.map((season) => {
					return (
						<ul key={season.id}>
							<li> {season.name}</li>
							<li>Estreno {season.air_date}</li>
							<li>{season.overview}</li>
							{season.poster_path && (
								<li>
									<img
										src={apiconfig.baseUrlImageW92 + season.poster_path}
										alt={`Portada de la temporada ${season.name}`}
									/>
								</li>
							)}
						</ul>
					)
				})}
		</div>
	)
}

export default FullInfo
