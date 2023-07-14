import { useRef } from 'react'
import { apiconfig } from '../../config/apiConfig'
import './FullInfo.scss'
import Videos from './Videos'
function FullInfo({ pelicula, cerrarFullInfo }) {
	const divFullInfoRef = useRef(null)
	return (
		<div className='divFullInfo' ref={divFullInfoRef}>
			<button onClick={() => cerrarFullInfo(divFullInfoRef.current)}>
				Cerrar
			</button>
			<div>
				<img
					className='FullInfoImg'
					src={
						apiconfig.baseUrlImageOriginal + pelicula.backdrop_path ||
						pelicula.poster_path
					}
					alt=''
				/>
				<h2>{pelicula.title}</h2>
				<h3>{pelicula.tagline}</h3>
				<p>{pelicula.release_date}</p>
				<ul>
					<li>{pelicula.vote_average}</li>
					<li>Votos {pelicula.vote_count}</li>
					<li>Popularidad {pelicula.popularity}</li>
				</ul>
				<p>{pelicula.overview}</p>
				<ul>
					<li>Géneros</li>
					{pelicula.genres?.map((genre) => {
						return <li key={genre.id}>{genre.name}</li>
					})}
				</ul>
				<ul>
					<li>Productoras</li>
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
				<ul>
					{pelicula.videos.results?.map((video, i) => {
						return video.key && <Videos key={i} video={video} />
					})}
				</ul>
			</div>
		</div>
	)
}

export default FullInfo
