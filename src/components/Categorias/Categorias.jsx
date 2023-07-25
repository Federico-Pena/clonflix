import './Categorias.scss'
import { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { obtenerCategorias } from '../../helpers/obtenerCategorias'
import { apiconfig } from '../../config/apiConfig'
import MiniCard from '../CardPelicula/MiniCard'

function Categorias({ clase, cerrarCategorias }) {
	const [generosPeli, setGenerosPeli] = useState([])
	const [generosSerie, setGenerosSerie] = useState([])
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchCategorias = async () => {
			const data = await obtenerCategorias()
			setGenerosPeli(data.genPel)
			setGenerosSerie(data.genSer)
		}
		fetchCategorias()
	}, [])

	const buscarCategoriaPeli = async (e) => {
		const apiKey = import.meta.env.VITE_TMDB_API_KEY
		try {
			const data = await fetch(
				`${apiconfig.baseUrl}/discover/movie?with_genres=${e}&language=es-MX&api_key=${apiKey}`
			)
			const result = await data.json()
			setData(result.results)
		} catch (error) {
			return error
		}
	}
	const buscarCategoriaSerie = async (e) => {
		const apiKey = import.meta.env.VITE_TMDB_API_KEY
		try {
			const data = await fetch(
				`${apiconfig.baseUrl}/discover/tv?with_genres=${e}&language=es-MX&api_key=${apiKey}`
			)
			const result = await data.json()
			setData(result.results)
		} catch (error) {
			return error
		}
	}
	const cerrerResultados = () => {
		setData([])
	}

	return (
		<>
			{data.length ? (
				<div className='divResultados'>
					<h1>Resultados</h1>
					<AiFillCloseCircle
						className={'iconCerrarResultados'}
						onClick={cerrerResultados}
					/>
					<div className='divLista'>
						{data.map((genero) => (
							<MiniCard tendencia={genero} key={genero.id} />
						))}
					</div>
				</div>
			) : null}
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
							<li
								key={genero.id}
								onClick={() => buscarCategoriaPeli(genero.id)}>
								{genero.name}
							</li>
						)
					})}
				</ul>
				<ul className={`categoriasS`}>
					<li>
						<strong>Series</strong>
					</li>
					{generosSerie?.map((genero) => {
						return (
							<li
								key={genero.id}
								onClick={() => buscarCategoriaSerie(genero.id)}>
								{genero.name}
							</li>
						)
					})}
				</ul>
			</div>
		</>
	)
}

export default Categorias
