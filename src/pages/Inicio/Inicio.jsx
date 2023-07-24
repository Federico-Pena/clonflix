import './Inicio.scss'
import { useEffect } from 'react'
import { apiconfig } from '../../config/apiConfig'
import Hero from '../../components/Hero/Hero'
import MainInicio from '../../components/Main/MainInicio'
import Loading from '../../components/Loading/Loading'
import usePelicula from '../../hooks/usePelicula'

function Inicio() {
	const { datapProximamente, fetchDataPeli, loading } = usePelicula()

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
							heroElement={datapProximamente[2]}
							tipo={'pelicula.proximamente'}
						/>
					)}
					<MainInicio />
				</>
			)}
		</main>
	)
}

export default Inicio
