import './Categorias.scss'
import { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { obtenerCategorias } from '../../services/obtenerCategorias'
import { apiconfig } from '../../config/apiConfig'
function Aside({ clase, cerrarCategorias }) {
	const [generos, setGeneros] = useState([])
	const [totalPages, setTotalPages] = useState()

	useEffect(() => {
		const fetchCategorias = async () => {
			const data = await obtenerCategorias()
			setGeneros(data)
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
			setTotalPages(result.total_pages)
			console.log(result)
		} catch (error) {
			return error
		}
	}
	return (
		<ul className={clase ? clase : `categorias`}>
			{generos?.map((genero) => {
				return (
					<li key={genero.id} onClick={() => buscarCategoria(genero.name)}>
						{genero.name}
					</li>
				)
			})}
			<li>
				<AiFillCloseCircle
					className={'iconCategorias'}
					onClick={cerrarCategorias}
				/>
			</li>
		</ul>
	)
}

export default Aside
