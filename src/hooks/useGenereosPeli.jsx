import { useState } from 'react'
import { apiconfig } from '../config/apiConfig'
import { obtenerTipoGeneroPeli } from '../helpers/obtenerTipo'
const apiKey = import.meta.env.VITE_TMDB_API_KEY
const genero = apiconfig.pelicula.generos
function useGenereosPeli() {
	const [actionPeli, setActionPeli] = useState([])
	const [animatPeli, setAnimatPeli] = useState([])
	const [aventPeli, setAventPeli] = useState([])
	const [comediaPeli, setComediaPeli] = useState([])
	const [familiaPeli, setFamiliaPeli] = useState([])
	const [misterioPeli, setMisterioPeli] = useState([])
	const [multiples, setMultiples] = useState([])
	/**
	 *
	 * @param {Number} pagina
	 * @param {String} tipo
	 * @param {String} query
	 * @returns
	 */
	const fetchGenerosPeli = async (pagina, tipo) => {
		const url = obtenerTipoGeneroPeli(tipo)
		const finUrl = `&api_key=${apiKey}&language=es-MX&sort_by=vote_count.desc&page=${pagina}`
		try {
			const response = await fetch(`${apiconfig.baseUrl}${url}${finUrl}`)
			const datares = await response.json()
			if (url === genero.accion) {
				setActionPeli((prev) => prev.concat(datares.results))
			}
			if (url === genero.animacion) {
				setAnimatPeli((prev) => prev.concat(datares.results))
			}
			if (url === genero.aventura) {
				setAventPeli((prev) => prev.concat(datares.results))
			}
			if (url === genero.comedia) {
				setComediaPeli((prev) => prev.concat(datares.results))
			}
			if (url === genero.familia) {
				setFamiliaPeli((prev) => prev.concat(datares.results))
			}
			if (url === genero.misterio) {
				setMisterioPeli((prev) => prev.concat(datares.results))
			}

			if (url === apiconfig.buscarTodo) {
				setMultiples((prev) => prev.concat(datares.results))
			}
		} catch (error) {
			return new Error(error)
		}
	}
	return {
		actionPeli,
		animatPeli,
		aventPeli,
		familiaPeli,
		comediaPeli,
		misterioPeli,
		multiples,
		fetchGenerosPeli,
	}
}

export default useGenereosPeli
