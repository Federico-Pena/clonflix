const apiKey = import.meta.env.VITE_TMDB_API_KEY
import { apiconfig } from '../config/apiConfig'
/**
 *
 * @param {Number}
 * Numero de pagina
 * @returns
 */
export const obtenerPeliculasPopulares = async ({ pagina }) => {
	try {
		const response = await fetch(
			`${apiconfig.baseUrl}/discover/movie/?languaje=es&api_key=${apiKey}&page=${pagina}&sort_by=popularity.desc`
		)
		const data = await response.json()
		return data
	} catch (error) {
		return error
	}
}
