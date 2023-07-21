import { apiconfig } from '../config/apiConfig'
const generosPeli = apiconfig.pelicula.generos
const generosSerie = apiconfig.serie.generos
const pelicula = apiconfig.pelicula
export const obtenerTipoGeneroPeli = (tipo) => {
	let url
	if (tipo === generosPeli.accion) {
		url = generosPeli.accion
	} else if (tipo === generosPeli.animacion) {
		url = generosPeli.animacion
	} else if (tipo === generosPeli.aventura) {
		url = generosPeli.aventura
	} else if (tipo === generosPeli.comedia) {
		url = generosPeli.comedia
	} else if (tipo === generosPeli.familia) {
		url = generosPeli.familia
	} else if (tipo === generosPeli.misterio) {
		url = generosPeli.misterio
	} else if (tipo === apiconfig.buscarTodo) {
		url = apiconfig.buscarTodo
	}
	return url
}
export const obtenerTipoGeneroSerie = (tipo) => {
	let url
	if (tipo === generosSerie.accion) {
		url = apiconfig.generosS.accion
	} else if (tipo === generosSerie.animacion) {
		url = generosSerie.animacion
	} else if (tipo === generosSerie.comedia) {
		url = generosSerie.comedia
	} else if (tipo === generosSerie.familia) {
		url = generosSerie.familia
	} else if (tipo === generosSerie.misterio) {
		url = generosSerie.misterio
	} else if (tipo === apiconfig.buscarTodo) {
		url = apiconfig.buscarTodo
	}
	return url
}
export const obtenerTipoPeli = (tipo) => {
	let url
	if (tipo === pelicula.polular) {
		url = pelicula.polular
	} else if (tipo === pelicula.valorada) {
		url = pelicula.valorada
	} else if (tipo === pelicula.proximamente) {
		url = pelicula.proximamente
	} else if (tipo === pelicula.tendencias) {
		url = pelicula.tendencias
	} else if (tipo === apiconfig.tendenciasTodas) {
		url = apiconfig.tendenciasTodas
	}

	return url
}

export const obtenerTipoSerie = (tipo) => {
	let url
	if (tipo === apiconfig.serie.popular) {
		url = apiconfig.serie.popular
	} else if (tipo === apiconfig.serie.valorada) {
		url = apiconfig.serie.valorada
	} else if (tipo === apiconfig.serie.tendencias) {
		url = apiconfig.serie.tendencias
	} else if (tipo === apiconfig.tendenciasTodas) {
		url = apiconfig.tendenciasTodas
	}
	return url
}
