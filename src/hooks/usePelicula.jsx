import { useEffect, useState } from 'react'
import { apiconfig } from '../config/apiConfig'
import { obtenerTipoPeli } from '../helpers/obtenerTipo'
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
	/**
	 *
	 * @param {Number} pagina
	 * @param {String} tipo
	 * @returns
	 */
	useEffect(() => {
		fetchDataPeli()
	}, [])
	const fetchDataPeli = async (pagina, tipo) => {
		const url = obtenerTipoPeli(tipo)
		try {
			const response = await fetch(
				`${apiconfig.baseUrl}${url}${apiconfig.finUrl}page=${pagina}`
			)
			const datares = await response.json()
			console.log(datares)
			if (url === pelicula.polular) {
				setdatapPolular((prev) => prev.concat(datares.results))
			}
			if (url === pelicula.valorada) {
				setdatapValorada((prev) => prev.concat(datares.results))
			}
			if (url === pelicula.proximamente) {
				setdatapProximamente((prev) => prev.concat(datares.results))
			}
			if (url === apiconfig.tendenciasTodas) {
				setTrendingTodas((prev) => prev.concat(datares.results))
			}
			if (url === pelicula.tendencias) {
				setTrendingPeli((prev) => prev.concat(datares.results))
			}
		} catch (error) {
			return new Error(error)
		}
	}

	return {
		datapPolular,
		datapValorada,
		datapProximamente,
		trendingTodas,
		trendingPeli,
		fetchDataPeli,
	}
}

export default usePelicula
