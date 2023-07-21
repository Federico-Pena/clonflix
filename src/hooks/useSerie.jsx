import { useState } from 'react'
import { apiconfig } from '../config/apiConfig'
import { obtenerTipoSerie } from '../services/obtenerTipo'
/**
 *
 * @param {String} tipo
 * @returns
 */

function useSerie() {
	const [datasPopular, setdatasPopular] = useState([])
	const [datasValorada, setdatasValorada] = useState([])
	const [trendingS, setTrendingS] = useState([])
	const [trendingTodas, setTrendingTodas] = useState([])
	const [loading, setLoading] = useState(false)
	/**
	 *
	 * @param {Number} pagina
	 * @param {String} tipo
	 * @returns
	 */
	const fetchDataSerie = async (pagina, tipo) => {
		const url = obtenerTipoSerie(tipo)
		try {
			setLoading(true)
			const response = await fetch(
				`${apiconfig.baseUrl}${url}${apiconfig.finUrl}page=${pagina}`
			)
			const datares = await response.json()
			if (url === apiconfig.serie.popular) {
				setdatasPopular((prev) => prev.concat(datares.results))
			} else if (url === apiconfig.serie.valorada) {
				setdatasValorada((prev) => prev.concat(datares.results))
			} else if (url === apiconfig.serie.tendencias) {
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
		loading,
		datasPopular,
		datasValorada,
		trendingS,
		trendingTodas,
		fetchDataSerie,
	}
}

export default useSerie
