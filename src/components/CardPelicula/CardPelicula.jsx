import { useEffect, useRef } from 'react'
import { apiconfig } from '../../config/apiConfig'
import './CardPelicula.scss'
import { Link } from 'react-router-dom'

function CardPelicula({ pelicula, tipo }) {
	const refCardPelicula = useRef()
	const { current } = refCardPelicula
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.children[0].children[0].src = `${
						apiconfig.baseUrlImageW500
					}${pelicula?.poster_path || pelicula?.backdrop_path}`
					observer.unobserve(entry.target)
				}
			})
		})
		refCardPelicula.current && observer.observe(refCardPelicula.current)
		return () => {
			current && observer.unobserve(current)
		}
	}, [current, pelicula])

	return (
		pelicula &&
		pelicula?.poster_path && (
			<Link
				to={`$${pelicula.id}?${tipo ? tipo.split('.')[0] : 'serie'}`}
				className='cardPelicula'
				ref={refCardPelicula}>
				<div className='divImgPelicula'>
					<img
						className='imgPelicula'
						alt={`Portada de la pelicula ${pelicula.title}`}
						src='https://placehold.co/300x400/000000/FFF?text=...'
					/>
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
