import { useState } from 'react'
import { apiconfig } from '../config/apiConfig'
const apiKey = import.meta.env.VITE_TMDB_API_KEY

const obtenerTipo = (tipo) => {
	let url
	if (tipo === apiconfig.pPolular) {
		url = apiconfig.pPolular
	} else if (tipo === apiconfig.pValorada) {
		url = apiconfig.pValorada
	} else if (tipo === apiconfig.pProximamente) {
		url = apiconfig.pProximamente
	} else if (tipo === apiconfig.sPopular) {
		url = apiconfig.sPopular
	} else if (tipo === apiconfig.sValorada) {
		url = apiconfig.sValorada
	} else if (tipo === apiconfig.tendenciaPelicula) {
		url = apiconfig.tendenciaPelicula
	} else if (tipo === apiconfig.tendenciasSeries) {
		url = apiconfig.tendenciasSeries
	} else if (tipo === apiconfig.tendenciasTodas) {
		url = apiconfig.tendenciasTodas
	}
	return url
}
function useFetch() {
	const [datapPolular, setdatapPolular] = useState([])
	const [datapValorada, setdatapValorada] = useState([])
	const [datapProximamente, setdatapProximamente] = useState([])
	const [datasPopular, setdatasPopular] = useState([])
	const [datasValorada, setdatasValorada] = useState([])
	const [trendingP, setTrendingP] = useState([])
	const [trendingS, setTrendingS] = useState([])
	const [trendingTodas, setTrendingTodas] = useState([])

	const [loading, setLoading] = useState(false)
	const fetchDataUse = async (pagina, tipo) => {
		const urlStatic = `?api_key=${apiKey}&language=es-MX&page=${pagina}`
		const url = obtenerTipo(tipo)
		try {
			setLoading(true)
			const response = await fetch(`${apiconfig.baseUrl}${url}${urlStatic}`)
			const datares = await response.json()
			if (url === apiconfig.pPolular) {
				setdatapPolular((prev) => prev.concat(datares.results))
			} else if (url === apiconfig.pValorada) {
				setdatapValorada((prev) => prev.concat(datares.results))
			} else if (url === apiconfig.pProximamente) {
				setdatapProximamente((prev) => prev.concat(datares.results))
			} else if (url === apiconfig.sPopular) {
				setdatasPopular((prev) => prev.concat(datares.results))
			} else if (url === apiconfig.sValorada) {
				setdatasValorada((prev) => prev.concat(datares.results))
			} else if (url === apiconfig.tendenciaPelicula) {
				setTrendingP((prev) => prev.concat(datares.results))
			} else if (url === apiconfig.tendenciasSeries) {
				setTrendingS((prev) => prev.concat(datares.results))
			} else if (url === apiconfig.tendenciasTodas) {
				setTrendingTodas((prev) => prev.concat(datares.results))
			}

			setLoading(false)
		} catch (error) {
			setLoading(false)
			return new Error(error)
		}
	}

	return {
		datapPolular,
		datapValorada,
		datapProximamente,
		datasPopular,
		datasValorada,
		trendingP,
		trendingS,
		trendingTodas,
		fetchDataUse,
		loading,
	}
}

export default useFetch
