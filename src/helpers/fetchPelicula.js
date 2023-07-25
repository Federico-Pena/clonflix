import { apiconfig } from '../config/apiConfig'

export const fetchPelicula = async (url, pagina) => {
	try {
		const response = await fetch(
			`${apiconfig.baseUrl}${url}${apiconfig.finUrl}page=${pagina}`
		)
		const data = await response.json()
		return data
	} catch (error) {
		console.error('Ocurrion un error al obtener las Peliculas o Series', error)
	}
}

export const fetchGeneros = async (url, pagina) => {
	try {
		const response = await fetch(
			`${apiconfig.baseUrl}${url}${apiconfig.finUrlGeneros}page=${pagina}`
		)
		const data = await response.json()
		return data
	} catch (error) {
		console.error('Ocurrion un error al obtener Generos', error)
	}
}
