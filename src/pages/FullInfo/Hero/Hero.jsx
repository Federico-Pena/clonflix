import { apiconfig } from '../../../config/apiConfig'
import './Hero.scss'
function Hero({ fullInfo }) {
	return fullInfo && fullInfo.videos?.results.length ? (
		<div className='divVideo'>
			<iframe
				title={fullInfo.videos?.results[0].name}
				src={`https://www.youtube.com/embed/${fullInfo.videos.results[0]?.key}?mute=true&autoplay=1`}
				allow='autoplay'></iframe>
		</div>
	) : (
		fullInfo && fullInfo.backdrop_path && (
			<img
				title={`Portada de ${fullInfo.title || fullInfo.name}`}
				className='FullInfoImg'
				src={apiconfig.baseUrlImageOriginal + fullInfo.backdrop_path}
				alt={`Portada de ${fullInfo.title || fullInfo.name}`}
			/>
		)
	)
}

export default Hero
