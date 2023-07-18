import { apiconfig } from '../../config/apiConfig'

function Hero({ proximamenteP, obtenerPelicula }) {
	return (
		<div
			onClick={() => obtenerPelicula(proximamenteP?.id)}
			className='divHero'
			style={{
				backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%),url(${apiconfig.baseUrlImageOriginal}${proximamenteP?.backdrop_path})`,
			}}>
			<h2 className='titleHero'>{proximamenteP?.title}</h2>
			<button>Reproducir</button>

			<p className='fechaHero'>
				<span>Estreno</span>
				{proximamenteP?.release_date && (
					<span>
						{new Date(proximamenteP?.release_date).toLocaleDateString()}
					</span>
				)}
				{proximamenteP?.first_air_date && (
					<span>
						{new Date(proximamenteP?.first_air_date).toLocaleDateString()}
					</span>
				)}
			</p>

			<p className='valoracionesHero'>
				<span>Puntaje {proximamenteP?.vote_average}</span>
				<span>Votos {proximamenteP?.vote_count}</span>
			</p>
		</div>
	)
}

export default Hero
