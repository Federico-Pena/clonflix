import { apiconfig } from '../../config/apiConfig'

function Temporadas({ fullInfo }) {
	return (
		fullInfo &&
		fullInfo.seasons?.length &&
		fullInfo.seasons.map((season) => {
			return (
				<ul key={season.id} className='seasonsFullInfo'>
					<li>
						<strong>{season.name}</strong>
					</li>
					<li>{season.air_date}</li>
					{season.overview.split('. ').map((par) => (
						<li key={par}>{par}</li>
					))}
					{season.poster_path && (
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
