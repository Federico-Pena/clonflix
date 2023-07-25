import './Inicio.scss'
import { useEffect, useState } from 'react'
import { apiconfig } from '../../config/apiConfig'
import Hero from '../../components/Hero/Hero'
import MainInicio from '../../components/Main/MainInicio'
import Loading from '../../components/Loading/Loading'
import { fetchPelicula } from '../../helpers/fetchPelicula'

function Inicio() {
	const [heroData, setHeroData] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getHero = async () => {
			setLoading(true)
			try {
				const data = await fetchPelicula(apiconfig.pelicula.proximamente, 1)
				setHeroData(data.results)
				setLoading(false)
			} catch (error) {
				console.error('Ocurrio Un error AL obtener Datos Del hero', error)
				setLoading(false)
			}
		}
		getHero()
	}, [])

	return (
		<main className='mainIndex'>
			{loading ? (
				<Loading />
			) : (
				<>
					{heroData && (
						<Hero heroElement={heroData[2]} tipo={'pelicula.proximamente'} />
					)}
					<MainInicio />
				</>
			)}
		</main>
	)
}

export default Inicio
