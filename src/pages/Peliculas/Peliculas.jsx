import '../Inicio/Inicio.scss'
import { useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import { apiconfig } from '../../config/apiConfig'
import Loading from '../../components/Loading/Loading'
import MainPeliculas from '../../components/Main/MainPeliculas'
import usePelicula from '../../hooks/usePelicula'
function Peliculas() {
	const { loading, datapPolular, fetchDataPeli } = usePelicula()

	useEffect(() => {
		fetchDataPeli(1, apiconfig.pPolular)
	}, [])

	return (
		<main className='mainIndex'>
			{loading ? (
				<Loading />
			) : (
				<>
					{datapPolular && (
						<Hero heroElement={datapPolular[0]} tipo={'apiconfig.pPolular'} />
					)}
					<MainPeliculas />
				</>
			)}
		</main>
	)
}

export default Peliculas
