import { useState } from 'react'
import { apiconfig } from '../config/apiConfig'
import { obtenerTipoPeli } from '../services/obtenerTipo'
const pelicula = apiconfig.pelicula
/**
 *
 * @param {String} tipo
 * @returns
 */

function usePelicula() {
	const [datapPolular, setdatapPolular] = useState([])
	const [datapValorada, setdatapValorada] = useState([])
	const [datapProximamente, setdatapProximamente] = useState([])
	const [trendingTodas, setTrendingTodas] = useState([])
	const [trendingPeli, setTrendingPeli] = useState([])
	const [loading, setLoading] = useState(false)
	/**
	 *
	 * @param {Number} pagina
	 * @param {String} tipo
	 * @returns
	 */
	const fetchDataPeli = async (pagina, tipo) => {
		const url = obtenerTipoPeli(tipo)
		try {
			setLoading(true)
			const response = await fetch(
				`${apiconfig.baseUrl}${url}${apiconfig.finUrl}page=${pagina}`
			)
			const datares = await response.json()
			if (url === pelicula.polular) {
				setdatapPolular((prev) => prev.concat(datares.results))
			} else if (url === pelicula.valorada) {
				setdatapValorada((prev) => prev.concat(datares.results))
			} else if (url === pelicula.proximamente) {
				setdatapProximamente((prev) => prev.concat(datares.results))
			} else if (url === apiconfig.tendenciasTodas) {
				setTrendingTodas((prev) => prev.concat(datares.results))
			} else if (url === pelicula.tendencias) {
				setTrendingPeli((prev) => prev.concat(datares.results))
			}
			setLoading(false)
		} catch (error) {
			setLoading(false)
			return new Error(error)
		}
	}

	return {
		loading,
		datapPolular,
		datapValorada,
		datapProximamente,
		trendingTodas,
		trendingPeli,
		fetchDataPeli,
	}
}

export default usePelicula
