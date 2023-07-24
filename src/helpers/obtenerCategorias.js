import { apiconfig } from '../config/apiConfig'

export const obtenerCategorias = async () => {
	const apiKey = import.meta.env.VITE_TMDB_API_KEY
	try {
		const dataP = fetch(
			`${apiconfig.baseUrl}/genre/movie/list?language=es-MX&api_key=${apiKey}`
		)
		const dataS = fetch(
			`${apiconfig.baseUrl}/genre/tv/list?language=es-MX&api_key=${apiKey}`
		)
		const promesas = await Promise.all([dataP, dataS])
		const promesasRes = await Promise.all([
			promesas[0].json(),
			promesas[1].json(),
		])
		return { genPel: promesasRes[0].genres, genSer: promesasRes[1].genres }
	} catch (error) {
		return error
	}
}
