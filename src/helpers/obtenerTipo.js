import { apiconfig } from '../config/apiConfig'
const generosPeli = apiconfig.pelicula.generos
const generosSerie = apiconfig.serie.generos
const pelicula = apiconfig.pelicula
export const obtenerTipoGeneroPeli = (tipo) => {
	let url
	if (tipo === generosPeli.accion) {
		url = generosPeli.accion
	}
	if (tipo === generosPeli.animacion) {
		url = generosPeli.animacion
	}
	if (tipo === generosPeli.aventura) {
		url = generosPeli.aventura
	}
	if (tipo === generosPeli.comedia) {
		url = generosPeli.comedia
	}
	if (tipo === generosPeli.familia) {
		url = generosPeli.familia
	}
	if (tipo === generosPeli.misterio) {
		url = generosPeli.misterio
	}
	if (tipo === apiconfig.buscarTodo) {
		url = apiconfig.buscarTodo
	}
	return url
}
export const obtenerTipoGeneroSerie = (tipo) => {
	let url
	if (tipo === generosSerie.accion) {
		url = generosSerie.accion
	}
	if (tipo === generosSerie.animacion) {
		url = generosSerie.animacion
	}
	if (tipo === generosSerie.comedia) {
		url = generosSerie.comedia
	}
	if (tipo === generosSerie.familia) {
		url = generosSerie.familia
	}
	if (tipo === generosSerie.misterio) {
		url = generosSerie.misterio
	}
	if (tipo === apiconfig.buscarTodo) {
		url = apiconfig.buscarTodo
	}
	return url
}
export const obtenerTipoPeli = (tipo) => {
	let url
	if (tipo === pelicula.polular) {
		url = pelicula.polular
	}
	if (tipo === pelicula.valorada) {
		url = pelicula.valorada
	}
	if (tipo === pelicula.proximamente) {
		url = pelicula.proximamente
	}
	if (tipo === pelicula.tendencias) {
		url = pelicula.tendencias
	}
	if (tipo === apiconfig.tendenciasTodas) {
		url = apiconfig.tendenciasTodas
	}
	return url
}

export const obtenerTipoSerie = (tipo) => {
	let url
	if (tipo === apiconfig.serie.popular) {
		url = apiconfig.serie.popular
	}
	if (tipo === apiconfig.serie.valorada) {
		url = apiconfig.serie.valorada
	}
	if (tipo === apiconfig.serie.tendencias) {
		url = apiconfig.serie.tendencias
	}
	if (tipo === apiconfig.tendenciasTodas) {
		url = apiconfig.tendenciasTodas
	}
	return url
}
