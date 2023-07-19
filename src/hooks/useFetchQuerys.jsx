import { useState } from 'react'
import { apiconfig } from '../config/apiConfig'
const apiKey = import.meta.env.VITE_TMDB_API_KEY

const obtenerTipo = (tipo) => {
	let url
	if (tipo === apiconfig.sAccion) {
		url = apiconfig.sAccion
	} else if (tipo === apiconfig.pAccion) {
		url = apiconfig.pAccion
	} else if (tipo === apiconfig.buscarTodo) {
		url = apiconfig.buscarTodo
	}
	return url
}

function useFetchQuerys() {
	const [seriesAccion, setSeriesAccion] = useState([])
	const [peliculasAccion, setPeliculasAccion] = useState([])

	const [multiples, setMultiples] = useState([])
	const [loading, setLoading] = useState(false)
	/**
	 *
	 * @param {Number} pagina
	 * @param {String} tipo
	 * @param {String} query
	 * @returns
	 */
	const fetchDataUseQuery = async (pagina, tipo, query) => {
		const urlStatic = `&api_key=${apiKey}&language=es-MX&page=${pagina}&sort_by=vote_average.desc`
		const url = obtenerTipo(tipo)
		try {
			setLoading(true)
			const response = await fetch(
				`${apiconfig.baseUrl}${url}${query}${urlStatic}`
			)
			const datares = await response.json()
			if (url === apiconfig.sAccion) {
				setSeriesAccion((prev) => prev.concat(datares.results))
			} else if (url === apiconfig.pAccion) {
				setPeliculasAccion((prev) => prev.concat(datares.results))
			} else if (url === apiconfig.buscarTodo) {
				setMultiples((prev) => prev.concat(datares.results))
			}
			setTimeout(() => {
				setLoading(false)
			}, 300)
		} catch (error) {
			setLoading(false)
			return new Error(error)
		}
	}
	return {
		loading,
		seriesAccion,
		peliculasAccion,
		multiples,
		fetchDataUseQuery,
	}
}

export default useFetchQuerys
