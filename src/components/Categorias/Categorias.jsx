import './Categorias.scss'
import { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { obtenerCategorias } from '../../services/obtenerCategorias'
import { apiconfig } from '../../config/apiConfig'
function Categorias({ clase, cerrarCategorias }) {
	const [generosPeli, setGenerosPeli] = useState([])
	const [generosSerie, setGenerosSerie] = useState([])

	useEffect(() => {
		const fetchCategorias = async () => {
			const data = await obtenerCategorias()
			setGenerosPeli(data.genPel)
			setGenerosSerie(data.genSer)
		}
		fetchCategorias()
	}, [])
	const buscarCategoria = async (e) => {
		const apiKey = import.meta.env.VITE_TMDB_API_KEY
		try {
			const data = await fetch(
				`${apiconfig.baseUrl}/search/multi?query=${e}&language=es-MX&api_key=${apiKey}`
			)
			const result = await data.json()
			console.log(result)
		} catch (error) {
			return error
		}
	}
	return (
		<div className={clase ? clase : 'divCategorias'}>
			<AiFillCloseCircle
				className={'iconCategorias'}
				onClick={cerrarCategorias}
			/>
			<ul className={`categoriasP`}>
				<li>
					<strong>Peliculas</strong>
				</li>
				{generosPeli?.map((genero) => {
					return (
						<li key={genero.id} onClick={() => buscarCategoria(genero.name)}>
							{genero.name}
						</li>
					)
				})}
			</ul>
			<ul className={clase ? clase : `categoriasS`}>
				<li>
					<strong>Series</strong>
				</li>
				{generosSerie?.map((genero) => {
					return (
						<li key={genero.id} onClick={() => buscarCategoria(genero.name)}>
							{genero.name}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Categorias
