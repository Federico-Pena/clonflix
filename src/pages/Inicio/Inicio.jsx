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
		fetchDataPeli(1, apiconfig.pProximamente)
	}, [])

	return (
		<main className='mainIndex'>
			{loading ? (
				<Loading />
			) : (
				<>
					{datapProximamente && (
						<Hero
							heroElement={datapProximamente[0]}
							tipo={'apiconfig.pProximamente'}
						/>
					)}
					<MainInicio />
				</>
			)}
		</main>
	)
}

export default Inicio
