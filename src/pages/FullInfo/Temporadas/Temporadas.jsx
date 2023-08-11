import { apiconfig } from '../../../config/apiConfig'
import './Temporadas.scss'
function Temporadas({ fullInfo }) {
	return (
		fullInfo &&
		fullInfo.seasons?.length &&
		fullInfo.seasons.map((season) => {
			return (
				<ul key={season.id} className='seasonsFullInfo'>
					<li>
						{season.name.split('. ').map((par) => (
							<strong key={par}>{par}</strong>
						))}
					</li>
					<li>{season.air_date}</li>
					{season.overview.split('. ').map((par) => (
						<li key={par}>{par}</li>
					))}
					{season.poster_path === null ? (
						<li>Sin imagen</li>
					) : (
						<li>
							<img
								src={apiconfig.baseUrlImageW300 + season.poster_path}
								alt={`Portada de la temporada ${season.name}`}
							/>
						</li>
					)}
				</ul>
			)
		})
	)
}

export default Temporadas
