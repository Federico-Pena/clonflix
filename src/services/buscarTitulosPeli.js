import { apiconfig } from '../config/apiConfig'
const apiKey = import.meta.env.VITE_TMDB_API_KEY

export async function buscarTitulosPeli(pagina, busqueda) {
	const urlStatic = `&api_key=${apiKey}&language=es-MX&page=${pagina}`
	let data
	try {
		const dataFetch = await fetch(
			`${apiconfig.baseUrl}${apiconfig.buscarPelicula}?query=${busqueda}${urlStatic}`
		)
		const result = await dataFetch.json()
		data = result
		console.log(data)
	} catch (error) {
		return new Error(error)
	}

	return { data }
}
