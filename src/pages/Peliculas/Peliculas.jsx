import '../Inicio/Inicio.scss'
import { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero'
import { apiconfig } from '../../config/apiConfig'
import Loading from '../../components/Loading/Loading'
import MainPeliculas from '../../components/Main/MainPeliculas'
import { fetchPelicula } from '../../helpers/fetchPelicula'
function Peliculas() {
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
						<Hero heroElement={heroData[1]} tipo={'pelicula.proximamente'} />
					)}
					<MainPeliculas />
				</>
			)}
		</main>
	)
}

export default Peliculas
