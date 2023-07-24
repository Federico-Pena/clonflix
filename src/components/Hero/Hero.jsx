import { Link } from 'react-router-dom'
import { apiconfig } from '../../config/apiConfig'
import { agregar } from '../../helpers/localStorage'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import { GoPlay } from 'react-icons/go'
import { IoAddCircleOutline } from 'react-icons/io5'
import './Hero.scss'
import Button from '../Button/Button'
import { irA } from '../../helpers/irA'
function Hero({ heroElement, tipo }) {
	const [modal, setModal] = useState(false)
	const [error, setError] = useState(false)

	return (
		heroElement?.backdrop_path && (
			<>
				{modal && error && <Modal titulo={'El Elemento Ya Esta Guardado'} />}
				{modal && !error && <Modal titulo={'Elemento Guardado Con Exito'} />}
				<div className='divHero'>
					<div className='titleHero'>
						<h2>{heroElement.title || heroElement.name}</h2>
						<Link to={irA(heroElement.id, tipo)}>
							<Button
								text={'Reproducir'}
								className={'Reproducir'}
								icon={<GoPlay />}
							/>
						</Link>
						<Button
							className={'MiLista'}
							onClicked={() => agregar(heroElement, setModal, setError)}
							icon={<IoAddCircleOutline />}
							text={'Mi Lista'}
						/>
					</div>
					<Link
						to={irA(heroElement.id, tipo)}
						className='imgHero'
						title={`Portada de ${heroElement.title || heroElement.name}`}
						style={{
							backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%),url(${apiconfig.baseUrlImageOriginal}${heroElement?.backdrop_path})`,
						}}></Link>
				</div>
			</>
		)
	)
}

export default Hero
