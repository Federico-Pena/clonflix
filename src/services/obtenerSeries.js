const apiKey = import.meta.env.VITE_TMDB_API_KEY
import { apiconfig } from '../config/apiConfig'
/**
 * @param {Number}
 * Numero de pagina
 * @returns
 *Lista de Series Populares
 */
export const seriesPopulares = async ({ pagina }) => {
	try {
		const response = await fetch(
			`${apiconfig.baseUrl}/tv/popular?page=${pagina}&api_key=${apiKey}&language=es-MX`
		)
		const data = await response.json()
		return data
	} catch (error) {
		return error
	}
}

/**
 * @param {Number}
 * Numero de pagina
 * @returns
 * Lista de Series Mejor Valoradas
 */
export const seriesValoradas = async ({ pagina }) => {
	try {
		const response = await fetch(
			`${apiconfig.baseUrl}/tv/top_rated?page=${pagina}&api_key=${apiKey}&language=es-MX`
		)
		const data = await response.json()
		return data
	} catch (error) {
		return error
	}
}
