import { apiconfig } from '../../config/apiConfig'
import './CardPelicula.scss'
import { Link } from 'react-router-dom'
import { irA } from '../../helpers/irA'
import ObserverUnobserve from '../ObserverUnobserve/ObserverUnobserve'
import { useRef } from 'react'

function CardPelicula({ pelicula }) {
	const imgRef = useRef(null)
	const intersecting = (e) => {
		if (e && imgRef.current) {
			imgRef.current.src = `${apiconfig.baseUrlImageW500}${
				pelicula?.poster_path || pelicula?.backdrop_path
			}`
		}
	}
	return (
		pelicula &&
		pelicula?.poster_path && (
			<Link
				to={irA(pelicula.id, pelicula.title ? 'pelicula' : 'serie')}
				className='cardPelicula'>
				<div className='divImgPelicula'>
					<ObserverUnobserve intersecting={intersecting}>
						<img
							ref={imgRef}
							className='imgPelicula'
							src='https://placehold.co/100/000000/FFF?text=...'
							alt={`Portada de la pelicula ${pelicula.title || pelicula.name}`}
						/>
					</ObserverUnobserve>

					<p className='peliculaId'>{pelicula.id}</p>
				</div>
				<div>
					<p className='peliculaTitulo'>{pelicula.title || pelicula.name}</p>
				</div>
			</Link>
		)
	)
}
export default CardPelicula
