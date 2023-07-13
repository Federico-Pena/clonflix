import { apiconfig } from '../config/apiConfig'

export const obtenerCategorias = async () => {
	const apiKey = import.meta.env.VITE_TMDB_API_KEY
	try {
		const data = await fetch(
			`${apiconfig.baseUrl}/genre/movie/list?language=es-MX&api_key=${apiKey}`
		)
		const result = await data.json()
		return result.genres
	} catch (error) {
		return error
	}
}
