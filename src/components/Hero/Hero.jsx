import { Link } from 'react-router-dom'
import { apiconfig } from '../../config/apiConfig'
import { agregar } from '../../helpers/localStorage'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import { GoPlay } from 'react-icons/go'
import { IoAddCircleOutline } from 'react-icons/io5'

function Hero({ heroElement, tipo }) {
	const [modal, setModal] = useState(false)
	const [error, setError] = useState(false)

	return (
		heroElement?.backdrop_path && (
			<>
				{modal && error && <Modal titulo={'El Elemento Ya Esta Guardado'} />}
				{modal && !error && <Modal titulo={'Elemento Guardado Con Exito'} />}
				<div className='divHero'>
					<Link
						to={`$${heroElement.id}?${tipo.split('.')[0]}`}
						className='imgdivHero'
						style={{
							backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%),url(${apiconfig.baseUrlImageOriginal}${heroElement?.backdrop_path})`,
						}}></Link>
					<div className='titleHero'>
						<h2>{heroElement?.title}</h2>
						<Link
							to={`$${heroElement.id}?${tipo.split('.')[0]}`}
							className='Reproducir'>
							<GoPlay />
							Reproducir
						</Link>
						<button
							className='MiLista'
							onClick={() => agregar(heroElement, setModal, setError)}>
							<IoAddCircleOutline />
							Mi Lista
						</button>
					</div>

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
				</div>
			</>
		)
	)
}

export default Hero
