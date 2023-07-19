import './Inicio.scss'
import { useEffect, useState } from 'react'
import { apiconfig } from '../../config/apiConfig'
import FullInfo from '../../components/FullInfo/FullInfo'
import Hero from '../../components/Hero/Hero'
import MainInicio from '../../components/Main/MainInicio'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading/Loading'

function Inicio() {
	const { datapProximamente, fetchDataUse, loading } = useFetch()

	useEffect(() => {
		fetchDataUse(1, apiconfig.pProximamente)
	}, [])

	return (
		<main className='mainIndex'>
			{loading ? <Loading /> : null}

			{datapProximamente && (
				<Hero
					heroElement={datapProximamente[0]}
					tipo={'apiconfig.pProximamente'}
				/>
			)}
			<MainInicio />
		</main>
	)
}

export default Inicio
