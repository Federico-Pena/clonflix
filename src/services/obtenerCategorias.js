import { apiconfig } from '../config/apiConfig'

export const obtenerCategorias = async () => {
	const apiKey = import.meta.env.VITE_TMDB_API_KEY
	try {
		const dataP = await fetch(
			`${apiconfig.baseUrl}/genre/movie/list?language=es-MX&api_key=${apiKey}`
		)
		const dataS = await fetch(
			`${apiconfig.baseUrl}/genre/tv/list?language=es-MX&api_key=${apiKey}`
		)
		const resultP = await dataP.json()
		const resultS = await dataS.json()
		return { genPel: resultP.genres, genSer: resultS.genres }
	} catch (error) {
		return error
	}
}
