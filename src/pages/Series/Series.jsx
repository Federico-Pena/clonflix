import '../Inicio/Inicio.scss'
import { useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import { apiconfig } from '../../config/apiConfig'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading/Loading'
import MainSeries from '../../components/Main/MainSeries'

function Series() {
	const { loading, datasPopular, fetchDataUse } = useFetch()
	useEffect(() => {
		fetchDataUse(1, apiconfig.sPopular)
	}, [])

	return (
		<main className='mainIndex'>
			{loading ? <Loading /> : null}
			{datasPopular && (
				<Hero tipo={'apiconfig.sPopular'} heroElement={datasPopular[0]} />
			)}
			<MainSeries />
		</main>
	)
}

export default Series
