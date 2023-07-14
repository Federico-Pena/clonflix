import { useEffect, useRef } from 'react'
import { apiconfig } from '../../config/apiConfig'
import './CardPelicula.scss'

function CardPelicula({ pelicula, obtenerPelicula }) {
	const refCardPelicula = useRef()
	const { current } = refCardPelicula
	useEffect(() => {
		const opciones = {
			rootMargin: '0px 200px 0px 0px',
			threshold: 0,
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.children[0].children[0].src = `${
						apiconfig.baseUrlImageW500 || apiconfig.baseUrlImageOriginal
					}${pelicula?.backdrop_path || pelicula?.poster_path}`
					observer.unobserve(entry.target)
				}
			})
		}, opciones)

		observer.observe(refCardPelicula.current)

		return () => {
			current && observer.unobserve(current)
		}
	}, [current, pelicula])

	return (
		<div
			className='cardPelicula'
			ref={refCardPelicula}
			onClick={() => obtenerPelicula(pelicula.id)}>
			<div>
				<img
					className='imgPelicula'
					alt={`Portada de la pelicula ${pelicula.title}`}
					src='https://placehold.co/500/000000/FFF?text=Cargando'
				/>
				<p className='peliculaId'>{pelicula.id}</p>
			</div>
			<div>
				<p className='peliculaTitulo'>{pelicula.title || pelicula.name}</p>
			</div>
		</div>
	)
}
export default CardPelicula
