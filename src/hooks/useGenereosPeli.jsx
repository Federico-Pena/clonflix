import { useState } from 'react'
import { apiconfig } from '../config/apiConfig'
const apiKey = import.meta.env.VITE_TMDB_API_KEY

const obtenerTipo = (tipo) => {
	let url
	if (tipo === apiconfig.generosP.accion) {
		url = apiconfig.generosP.accion
	} else if (tipo === apiconfig.generosP.animacion) {
		url = apiconfig.generosP.animacion
	} else if (tipo === apiconfig.generosP.aventura) {
		url = apiconfig.generosP.aventura
	} else if (tipo === apiconfig.generosP.comedia) {
		url = apiconfig.generosP.comedia
	} else if (tipo === apiconfig.generosP.familia) {
		url = apiconfig.generosP.familia
	} else if (tipo === apiconfig.generosP.misterio) {
		url = apiconfig.generosP.misterio
	} else if (tipo === apiconfig.generosS.accion) {
		url = apiconfig.generosS.accion
	} else if (tipo === apiconfig.generosS.animacion) {
		url = apiconfig.generosS.animacion
	} else if (tipo === apiconfig.generosS.comedia) {
		url = apiconfig.generosS.comedia
	} else if (tipo === apiconfig.generosS.familia) {
		url = apiconfig.generosS.familia
	} else if (tipo === apiconfig.generosS.misterio) {
		url = apiconfig.generosS.misterio
	} else if (tipo === apiconfig.buscarTodo) {
		url = apiconfig.buscarTodo
	}
	return url
}

function useGenereosPeli() {
	const [actionPeli, setActionPeli] = useState([])
	const [animatPeli, setAnimatPeli] = useState([])
	const [aventPeli, setAventPeli] = useState([])
	const [comediaPeli, setComediaPeli] = useState([])
	const [familiaPeli, setFamiliaPeli] = useState([])
	const [misterioPeli, setMisterioPeli] = useState([])
	const [accionSerie, setAccionSerie] = useState([])
	const [animatSerie, setAnimatSerie] = useState([])
	const [comediaSerie, setComediaSerie] = useState([])
	const [familiaSerie, setFamiliaSerie] = useState([])
	const [misterioSerie, setMisterioSerie] = useState([])

	const [multiples, setMultiples] = useState([])
	const [loading, setLoading] = useState(false)
	/**
	 *
	 * @param {Number} pagina
	 * @param {String} tipo
	 * @param {String} query
	 * @returns
	 */
	const fetchGeneros = async (pagina, tipo) => {
		const urlStatic = `&api_key=${apiKey}&language=es-MX&page=${pagina}&sort_by=vote_count.desc`
		const url = obtenerTipo(tipo)
		try {
			setLoading(true)
			const response = await fetch(`${apiconfig.baseUrl}${url}${urlStatic}`)
			const datares = await response.json()
			if (url === apiconfig.generosP.accion) {
				setActionPeli((prev) => prev.concat(datares.results))
			}
			if (url === apiconfig.generosP.animacion) {
				setAnimatPeli((prev) => prev.concat(datares.results))
			}
			if (url === apiconfig.generosP.aventura) {
				setAventPeli((prev) => prev.concat(datares.results))
			}
			if (url === apiconfig.generosP.comedia) {
				setComediaPeli((prev) => prev.concat(datares.results))
			}
			if (url === apiconfig.generosP.familia) {
				setFamiliaPeli((prev) => prev.concat(datares.results))
			}
			if (url === apiconfig.generosP.misterio) {
				setMisterioPeli((prev) => prev.concat(datares.results))
			}
			if (url === apiconfig.generosS.accion) {
				setAccionSerie((prev) => prev.concat(datares.results))
			}
			if (url === apiconfig.generosS.animacion) {
				setAnimatSerie((prev) => prev.concat(datares.results))
			}
			if (url === apiconfig.generosS.comedia) {
				setComediaSerie((prev) => prev.concat(datares.results))
			}
			if (url === apiconfig.generosS.familia) {
				setFamiliaSerie((prev) => prev.concat(datares.results))
			}
			if (url === apiconfig.generosS.misterio) {
				setMisterioSerie((prev) => prev.concat(datares.results))
			}
			if (url === apiconfig.buscarTodo) {
				setMultiples((prev) => prev.concat(datares.results))
			}
			setTimeout(() => {
				setLoading(false)
			}, 300)
		} catch (error) {
			setLoading(false)
			return new Error(error)
		}
	}
	return {
		loading,
		actionPeli,
		animatPeli,
		aventPeli,
		familiaPeli,
		comediaPeli,
		misterioPeli,
		accionSerie,
		animatSerie,
		comediaSerie,
		familiaSerie,
		misterioSerie,
		multiples,
		fetchGeneros,
	}
}

export default useGenereosPeli
