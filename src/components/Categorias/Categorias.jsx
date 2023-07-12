import { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import './Categorias.scss'
import { apiconfig } from '../../config/apiConfig'
function Aside({ clase, cerrarAside }) {
	const apiKey = import.meta.env.VITE_TMDB_API_KEY

	const [generos, setGeneros] = useState([])
	useEffect(() => {
		const obtenerGeneros = async () => {
			const data = await fetch(
				`${apiconfig.baseUrl}/genre/movie/list?language=es-MX&api_key=${apiKey}`
			)
			const result = await data.json()
			setGeneros(result.genres)
		}
		obtenerGeneros()
	}, [apiKey])

	return (
		<ul className={clase ? clase : `asideHeader`}>
			{generos?.map((genero) => {
				return <li key={genero.id}> {genero.name}</li>
			})}
			<li>
				<AiFillCloseCircle className={'iconAside'} onClick={cerrarAside} />
			</li>
		</ul>
	)
}

export default Aside
