import './Inicio.scss'
import { obtenerPeliculasPopulares } from '../../helpers/obtenerPeliculasPopulares'
import { obtenerPeliculasMejorValoradas } from '../../helpers/obtenerPeliculasMejorValoradas'
import { obtenerSeriesPopulares } from '../../helpers/obtenerSeriesPopulares'

import { useEffect, useState } from 'react'
import Slider from '../../components/Slider/Slider'
import CardPelicula from '../../components/CardPelicula/CardPelicula'
function Inicio() {
	const [pagina, setPagina] = useState(1)
	const [Ppopulares, setPPopulares] = useState([])
	const [Pvaloradas, setPValoradas] = useState([])
	const [SValoradas, setSValoradas] = useState([])

	useEffect(() => {
		const obtenerPeliculasValoradas = async () => {
			const valoradas = await obtenerPeliculasMejorValoradas(pagina)
			setPValoradas(valoradas)
		}
		const ObtenerSeriesPopulares = async () => {
			const valoradas = await obtenerSeriesPopulares(pagina)
			setSValoradas(valoradas)
			console.log(valoradas)
		}
		ObtenerSeriesPopulares()
		obtenerPeliculasValoradas()
	}, [])
	useEffect(() => {
		const ObtenerPeliculasPopulares = async () => {
			const populares = await obtenerPeliculasPopulares(pagina)
			setPPopulares(populares)
		}
		ObtenerPeliculasPopulares()
	}, [pagina])
	return (
		<main className='mainIndex'>
			<div className='divHero'>
				<img
					className='imgInicio'
					src='https://occ-0-202-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUu7zf-VVjb3UbCHgjQz1g84UHJKdnuFM9xX05EKXyK4F8B731xde1Bv_tbVJzThLTVF7yS8bX9Mebp1dqLdenSGaA2-vIy5tatH.jpg?r=35f'
					alt=''
				/>
			</div>
			<h2 className='h2Slider'>Cine Populares</h2>
			<Slider>
				{Ppopulares.results?.map((popular) => {
					return <CardPelicula pelicula={popular} key={popular.id} />
				})}
			</Slider>
			<h2 className='h2Slider'>Cine Mejor Valoradas</h2>
			<Slider>
				{Pvaloradas.results?.map((popular) => {
					return <CardPelicula pelicula={popular} key={popular.id} />
				})}
			</Slider>
			<h2 className='h2Slider'>TV Mejor Valoradas</h2>
			<Slider>
				{SValoradas.results?.map((popular) => {
					return <CardPelicula pelicula={popular} key={popular.id} />
				})}
			</Slider>
		</main>
	)
}

export default Inicio
