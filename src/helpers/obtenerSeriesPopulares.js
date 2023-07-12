const apiKey = import.meta.env.VITE_TMDB_API_KEY
import { apiconfig } from '../config/apiConfig'
/**
 *
 * @param {Number}
 * Numero de pagina
 * @returns
 */
export const obtenerSeriesPopulares = async () => {
	try {
		const response = await fetch(
			`${apiconfig.baseUrl}/trending/tv/day?languaje=es&api_key=${apiKey}`
		)
		const data = await response.json()
		return data
	} catch (error) {
		return error
	}
}
