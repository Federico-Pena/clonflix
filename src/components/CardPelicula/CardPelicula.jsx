import { useRef } from 'react'
import { apiconfig } from '../../config/apiConfig'
import './CardPelicula.scss'
import { Link } from 'react-router-dom'
import ObserverUnobserve from '../Observer/ObserverUnobserve'

function CardPelicula({ pelicula, tipo }) {
	const imgCard = useRef()
	const intersecting = (e) => {
		if (e.isIntersecting) {
			imgCard.current.src = `${apiconfig.baseUrlImageW500}${
				pelicula?.poster_path || pelicula?.backdrop_path
			}`
		}
	}
	return (
		pelicula &&
		pelicula?.poster_path && (
			<Link
				to={`$${pelicula.id}?${tipo ? tipo.split('.')[0] : 'serie'}`}
				className='cardPelicula'>
				<div className='divImgPelicula'>
					<ObserverUnobserve intersecting={intersecting}>
						<img
							ref={imgCard}
							className='imgPelicula'
							alt={`Portada de la pelicula ${pelicula.title || pelicula.name}`}
							src='https://placehold.co/300x400/000000/FFF?text=...'
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
