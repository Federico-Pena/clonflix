import '../Inicio/Inicio.scss'
import { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero'
import { apiconfig } from '../../config/apiConfig'
import Loading from '../../components/Loading/Loading'
import MainSeries from '../../components/Main/MainSeries'
import { fetchPelicula } from '../../helpers/fetchPelicula'

function Series() {
	const [heroData, setHeroData] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getHero = async () => {
			setLoading(true)
			try {
				const data = await fetchPelicula(apiconfig.serie.valorada, 1)
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
						<Hero tipo={'serie.popular'} heroElement={heroData[0]} />
					)}
					<MainSeries />
				</>
			)}
		</main>
	)
}

export default Series
