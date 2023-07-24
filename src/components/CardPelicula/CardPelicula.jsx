import { useRef } from 'react'
import { apiconfig } from '../../config/apiConfig'
import './CardPelicula.scss'
import { Link } from 'react-router-dom'
import ObserverUnobserve from '../Observer/ObserverUnobserve'
import { irA } from '../../helpers/irA'

function CardPelicula({ pelicula, tipo }) {
	const imgCard = useRef()
	const divCard = useRef()

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
			<ObserverUnobserve intersecting={intersecting}>
				<Link
					ref={divCard}
					to={irA(pelicula.id, tipo ? tipo : 'serie')}
					className='cardPelicula'>
					<div className='divImgPelicula'>
						<img
							className='imgPelicula'
							ref={imgCard}
							alt={`Portada de la pelicula ${pelicula.title || pelicula.name}`}
							src='https://placehold.co/300x400/000000/FFF?text=...'
						/>

						<p className='peliculaId'>{pelicula.id}</p>
					</div>
					<div>
						<p className='peliculaTitulo'>{pelicula.title || pelicula.name}</p>
					</div>
				</Link>
			</ObserverUnobserve>
		)
	)
}
export default CardPelicula
