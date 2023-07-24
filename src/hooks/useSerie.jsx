import { useState } from 'react'
import { apiconfig } from '../config/apiConfig'
import { obtenerTipoSerie } from '../helpers/obtenerTipo'
/**
 *
 * @param {String} tipo
 * @returns
 */

function useSerie() {
	const [datasPopular, setdatasPopular] = useState([])
	const [datasValorada, setdatasValorada] = useState([])
	const [trendingS, setTrendingS] = useState([])
	const [loading, setLoading] = useState(false)
	/**
	 *
	 * @param {Number} pagina
	 * @param {String} tipo
	 * @returns
	 */
	const fetchDataSerie = async (pagina, tipo) => {
		const url = obtenerTipoSerie(tipo)
		setLoading(true)
		try {
			const response = await fetch(
				`${apiconfig.baseUrl}${url}${apiconfig.finUrl}page=${pagina}`
			)
			const datares = await response.json()
			if (url === apiconfig.serie.popular) {
				setdatasPopular((prev) => prev.concat(datares.results))
			}
			if (url === apiconfig.serie.valorada) {
				setdatasValorada((prev) => prev.concat(datares.results))
			}
			if (url === apiconfig.serie.tendencias) {
				setTrendingS((prev) => prev.concat(datares.results))
			}
		} catch (error) {
			setLoading(false)
			return new Error(error)
		}
		setLoading(false)
	}

	return {
		loading,
		datasPopular,
		datasValorada,
		trendingS,
		fetchDataSerie,
	}
}

export default useSerie
