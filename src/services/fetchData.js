const apiKey = import.meta.env.VITE_TMDB_API_KEY
import { apiconfig } from '../config/apiConfig'
/**
 *
 * @param {pagina}
 * Numero de pagina
 * @param {tipo}
 * Filtro para el fetch
 * @returns
 * Data Fetch
 */

export const fetchData = async ({ pagina, tipo }) => {
	let data

	const urlStatic = `?api_key=${apiKey}&language=es-MX&page=${pagina}`
	let url
	if (tipo === 'pPopular') {
		url = apiconfig.pPolular
	}
	if (tipo === 'pValorada') {
		url = apiconfig.pValorada
	}
	if (tipo === 'pProximamente') {
		url = apiconfig.pProximamente
	}
	if (tipo === 'sPopular') {
		url = apiconfig.sPopular
	}
	if (tipo === 'sValorada') {
		url = apiconfig.sValorada
	}
	try {
		const response = await fetch(`${apiconfig.baseUrl}${url}${urlStatic}`)
		const datares = await response.json()
		data = datares
	} catch (error) {
		return error
	}
	return data
}
