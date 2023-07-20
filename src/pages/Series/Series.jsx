import '../Inicio/Inicio.scss'
import { useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import { apiconfig } from '../../config/apiConfig'
import Loading from '../../components/Loading/Loading'
import MainSeries from '../../components/Main/MainSeries'
import useSerie from '../../hooks/useSerie'

function Series() {
	const { loading, datasPopular, fetchDataSerie } = useSerie()
	useEffect(() => {
		fetchDataSerie(1, apiconfig.sPopular)
	}, [])

	return (
		<main className='mainIndex'>
			{loading ? (
				<Loading />
			) : (
				<>
					{datasPopular && (
						<Hero tipo={'apiconfig.sPopular'} heroElement={datasPopular[0]} />
					)}
					<MainSeries />
				</>
			)}
		</main>
	)
}

export default Series
