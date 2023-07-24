import { apiconfig } from '../../config/apiConfig'

function Companias({ fullInfo }) {
	return (
		fullInfo &&
		fullInfo.production_companies && (
			<ul className='productionFullInfo'>
				{fullInfo.production_companies?.map((company) => {
					return (
						company.logo_path && (
							<li key={company.id}>
								<img
									src={apiconfig.baseUrlImageW92 + company.logo_path}
									alt={`Logo de la compania ${company.name}`}
								/>
							</li>
						)
					)
				})}
			</ul>
		)
	)
}

export default Companias
