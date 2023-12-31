import { apiconfig } from '../../../config/apiConfig'
import './CreadoPor.scss'
function CreadoPor({ fullInfo }) {
	return (
		fullInfo &&
		fullInfo.created_by?.length &&
		fullInfo.created_by[0].profile_path && (
			<ul className='created_byFullInfo'>
				<li>Creado por {fullInfo.created_by[0].name}</li>
				<li>
					<img
						className='imgCreador'
						src={
							apiconfig.baseUrlImageW92 + fullInfo.created_by[0].profile_path
						}
						alt={`Foto de perfil de ${fullInfo.created_by[0].name}, ${
							fullInfo.title || fullInfo.name
						}`}
					/>
				</li>
			</ul>
		)
	)
}

export default CreadoPor
