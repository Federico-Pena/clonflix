import { useState } from 'react'
import { apiconfig } from '../../../config/apiConfig'
import './Hero.scss'
function Hero({ fullInfo }) {
	const [loading, setLoading] = useState(true)
	return fullInfo && fullInfo.videos?.results.length ? (
		<div className='divVideo'>
			{loading ? (
				<img
					title={`Portada de ${fullInfo.title || fullInfo.name}`}
					className=' placeholder'
					src={apiconfig.baseUrlImageOriginal + fullInfo.backdrop_path}
					alt={`Portada de ${fullInfo.title || fullInfo.name}`}
				/>
			) : null}
			<iframe
				title={fullInfo.videos?.results[0].name}
				src={`https://www.youtube.com/embed/${fullInfo.videos.results[0]?.key}?mute=true&autoplay=1`}
				allow='autoplay'
				onLoad={() => setLoading(false)}></iframe>
		</div>
	) : (
		fullInfo && fullInfo.backdrop_path && (
			<>
				<div className='containerImagenes'>
					<img
						title={`Portada de ${fullInfo.title || fullInfo.name}`}
						className='FullInfoImg'
						src={apiconfig.baseUrlImageOriginal + fullInfo.backdrop_path}
						alt={`Portada de ${fullInfo.title || fullInfo.name}`}
					/>
					<div>
						<img
							title={`Portada de ${fullInfo.title || fullInfo.name}`}
							className='FullInfoImg2'
							src={apiconfig.baseUrlImageOriginal + fullInfo.poster_path}
							alt={`Portada de ${fullInfo.title || fullInfo.name}`}
						/>
						<h3>{fullInfo.title || fullInfo.name}</h3>
					</div>
				</div>

				{fullInfo.tagline && <h4>{fullInfo.tagline}</h4>}
				{fullInfo.release_date && (
					<h4>
						Estreno {new Date(fullInfo.release_date).toLocaleDateString()}
					</h4>
				)}
			</>
		)
	)
}

export default Hero
