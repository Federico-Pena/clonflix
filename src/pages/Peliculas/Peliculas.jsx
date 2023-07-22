import '../Inicio/Inicio.scss'
import { useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import { apiconfig } from '../../config/apiConfig'
import Loading from '../../components/Loading/Loading'
import MainPeliculas from '../../components/Main/MainPeliculas'
import usePelicula from '../../hooks/usePelicula'
function Peliculas() {
	const { loading, datapProximamente, fetchDataPeli } = usePelicula()

	useEffect(() => {
		fetchDataPeli(1, apiconfig.pelicula.proximamente)
	}, [])

	return (
		<main className='mainIndex'>
			{loading ? (
				<Loading />
			) : (
				<>
					{datapProximamente && (
						<Hero
							heroElement={datapProximamente[1]}
							tipo={'pelicula.proximamente'}
						/>
					)}
					<MainPeliculas />
				</>
			)}
		</main>
	)
}

export default Peliculas
