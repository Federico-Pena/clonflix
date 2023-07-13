import './Categorias.scss'
import { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { obtenerCategorias } from '../../services/obtenerCategorias'

function Aside({ clase, cerrarAside }) {
	const [generos, setGeneros] = useState([])

	useEffect(() => {
		const fetchCategorias = async () => {
			const data = await obtenerCategorias()
			setGeneros(data)
		}
		fetchCategorias()
	}, [])

	return (
		<ul className={clase ? clase : `categorias`}>
			{generos?.map((genero) => {
				return <li key={genero.id}> {genero.name}</li>
			})}
			<li>
				<AiFillCloseCircle className={'iconCategorias'} onClick={cerrarAside} />
			</li>
		</ul>
	)
}

export default Aside
