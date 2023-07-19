import { Link } from 'react-router-dom'
import { apiconfig } from '../../config/apiConfig'
function Hero({ heroElement, tipo }) {
	return (
		heroElement?.backdrop_path && (
			<Link
				to={`&${heroElement.id}?${tipo.split('.')[1]}`}
				className='divHero'
				style={{
					backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%),url(${apiconfig.baseUrlImageOriginal}${heroElement?.backdrop_path})`,
				}}>
				<h2 className='titleHero'>{heroElement?.title}</h2>
				<button>Reproducir</button>
				<p className='fechaHero'>
					<span>Estreno</span>
					{heroElement?.release_date && (
						<span>
							{new Date(heroElement?.release_date).toLocaleDateString()}
						</span>
					)}
					{heroElement?.first_air_date && (
						<span>
							{new Date(heroElement?.first_air_date).toLocaleDateString()}
						</span>
					)}
				</p>
				<p className='valoracionesHero'>
					<span>Puntaje {heroElement?.vote_average}</span>
					<span>Votos {heroElement?.vote_count}</span>
				</p>
			</Link>
		)
	)
}

export default Hero
