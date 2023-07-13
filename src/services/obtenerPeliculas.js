const apiKey = import.meta.env.VITE_TMDB_API_KEY
import { apiconfig } from '../config/apiConfig'
/**
 *
 * @param {Number}
 * Numero de pagina
 * @returns
 * Lista de Peliculas Populares
 */
export const peliculasPopulares = async ({ pagina }) => {
	try {
		const response = await fetch(
			`${apiconfig.baseUrl}/movie/popular?api_key=${apiKey}&language=es-MX&page=${pagina}&sort_by=popularity.desc`
		)
		const data = await response.json()
		return data
	} catch (error) {
		return error
	}
}

/**
 *
 * @param {Number}
 * Numero de pagina
 * @returns
 * Lista de Peliculas Mejor Valoradas
 */
export const peliculasValoradas = async ({ pagina }) => {
	try {
		const response = await fetch(
			`${apiconfig.baseUrl}/movie/top_rated?api_key=${apiKey}&language=es-MX&page=${pagina}`
		)
		const data = await response.json()
		return data
	} catch (error) {
		return error
	}
}

/**
 * @returns
 * Una pelicula aleatoria de la lista
 */
export const proximamentePelicula = async () => {
	try {
		const response = await fetch(
			`${apiconfig.baseUrl}/movie/upcoming?api_key=${apiKey}&language=es-MX`
		)
		const data = await response.json()
		if (data.results) {
			return data.results[Math.floor(Math.random() * 21)]
		}
	} catch (error) {
		return error
	}
}
