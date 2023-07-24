import { useState } from 'react'
import { apiconfig } from '../config/apiConfig'
import { obtenerTipoGeneroSerie } from '../helpers/obtenerTipo'
const apiKey = import.meta.env.VITE_TMDB_API_KEY
const genero = apiconfig.serie.generos

function useGenerosSerie() {
	const [accionSerie, setAccionSerie] = useState([])
	const [animatSerie, setAnimatSerie] = useState([])
	const [comediaSerie, setComediaSerie] = useState([])
	const [familiaSerie, setFamiliaSerie] = useState([])
	const [misterioSerie, setMisterioSerie] = useState([])
	const [loading, setLoading] = useState(false)
	/**
	 *
	 * @param {Number} pagina
	 * @param {String} tipo
	 * @returns
	 */
	const fetchGenerosSerie = async (pagina, tipo) => {
		setLoading(true)
		try {
			const url = obtenerTipoGeneroSerie(tipo)
			const finUrl = `&api_key=${apiKey}&language=es-MX&sort_by=vote_count.desc&page=${pagina}`
			const response = await fetch(`${apiconfig.baseUrl}${url}${finUrl}`)
			const datares = await response.json()
			if (url === genero.accion) {
				setAccionSerie((prev) => prev.concat(datares.results))
			}
			if (url === genero.animacion) {
				setAnimatSerie((prev) => prev.concat(datares.results))
			}
			if (url === genero.comedia) {
				setComediaSerie((prev) => prev.concat(datares.results))
			}
			if (url === genero.familia) {
				setFamiliaSerie((prev) => prev.concat(datares.results))
			}
			if (url === genero.misterio) {
				setMisterioSerie((prev) => prev.concat(datares.results))
			}
			setLoading(false)
		} catch (error) {
			setLoading(false)
			return new Error(error)
		}
		setLoading(false)
	}

	return {
		accionSerie,
		animatSerie,
		comediaSerie,
		familiaSerie,
		misterioSerie,
		loading,
		fetchGenerosSerie,
	}
}

export default useGenerosSerie
