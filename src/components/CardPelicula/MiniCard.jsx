import { Link } from 'react-router-dom'
import { apiconfig } from '../../config/apiConfig'
import { GoPlay } from 'react-icons/go'
import { AiOutlineClose } from 'react-icons/ai'
import { irA } from '../../helpers/irA'

function MiniCard({ tendencia, eliminar }) {
	return (
		<div className='divMiniCard'>
			<Link
				to={irA(tendencia.id, tendencia.title ? 'pelicula' : 'serie')}
				className='cardSugerencia'>
				<div className='divImg'>
					<img
						src={`${apiconfig.baseUrlImageW300}${tendencia?.backdrop_path}`}
						alt={`Imagen de ${tendencia.title || tendencia.name}`}
					/>
				</div>
				<div className='divP'>
					<p>{tendencia.title || tendencia.name}</p>
				</div>
				<div className='divIcon'>
					<GoPlay className='IconVer' />
				</div>
			</Link>
			<div className='iconBorrar'>
				{eliminar && <AiOutlineClose onClick={() => eliminar(tendencia.id)} />}
			</div>
		</div>
	)
}

export default MiniCard
