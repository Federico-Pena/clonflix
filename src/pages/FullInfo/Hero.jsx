import { apiconfig } from '../../config/apiConfig'

function Hero({ fullInfo }) {
	return fullInfo && fullInfo.videos?.results.length ? (
		<div className='divVideo'>
			<div>
				<iframe
					title={fullInfo.videos?.results[0].name}
					src={`https://www.youtube.com/embed/${fullInfo.videos.results[0]?.key}?mute=true&autoplay=1`}
					allow='autoplay'></iframe>
			</div>
		</div>
	) : (
		fullInfo && fullInfo.backdrop_path && (
			<img
				className='FullInfoImg'
				src={apiconfig.baseUrlImageOriginal + fullInfo.backdrop_path}
				alt={`Portada de la fullInfo ${fullInfo.title || fullInfo.name}`}
			/>
		)
	)
}

export default Hero
