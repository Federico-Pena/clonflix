import { apiconfig } from '../../config/apiConfig'
import './CardPelicula.scss'
function CardPelicula({ pelicula }) {
	return (
		<div className='cardPelicula'>
			<div>
				<p className='peliculaTitulo'>{pelicula.title || pelicula.name}</p>
			</div>
			<div>
				<img
					className='imgPelicula'
					src={`${
						apiconfig.baseUrlImageW500 || apiconfig.baseUrlImageOriginal
					}${pelicula?.backdrop_path || pelicula?.poster_path}`}
					alt={`Portada de la pelicula ${pelicula.title}`}
				/>
				<p className='peliculaId'>{pelicula.id}</p>
			</div>
		</div>
	)
}

export default CardPelicula
