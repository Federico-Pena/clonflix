import '../Inicio/Inicio.scss'
import { useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import { apiconfig } from '../../config/apiConfig'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading/Loading'
import MainPeliculas from '../../components/Main/MainPeliculas'
function Peliculas() {
	const { loading, datapPolular, fetchDataUse } = useFetch()

	useEffect(() => {
		fetchDataUse(1, apiconfig.pPolular)
	}, [])

	return (
		<main className='mainIndex'>
			{loading && <Loading />}
			{datapPolular && (
				<Hero heroElement={datapPolular[0]} tipo={'apiconfig.pPolular'} />
			)}
			<MainPeliculas />
		</main>
	)
}

export default Peliculas
