import { apiconfig } from '../config/apiConfig'
const apiKey = import.meta.env.VITE_TMDB_API_KEY

export const obtenerCategorias = async () => {
	try {
		const dataP = fetch(
			`${apiconfig.baseUrl}/genre/movie/list?language=es-MX&api_key=${apiKey}`
		)
		const dataS = fetch(
			`${apiconfig.baseUrl}/genre/tv/list?language=es-MX&api_key=${apiKey}`
		)
		const promesas = await Promise.all([dataP, dataS])
		const res = await Promise.all([promesas[0].json(), promesas[1].json()])
		return { genPel: res[0].genres, genSer: res[1].genres }
	} catch (error) {
		return error
	}
}
