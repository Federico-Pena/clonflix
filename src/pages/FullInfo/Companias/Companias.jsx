import { apiconfig } from '../../../config/apiConfig'
import './Companias.scss'
function Companias({ fullInfo }) {
	return (
		fullInfo &&
		fullInfo.production_companies[0]?.logo_path && (
			<ul className='productionFullInfo'>
				{fullInfo.production_companies?.map((company) => {
					return (
						company.logo_path && (
							<li key={company.id}>
								<img
									title={`Logo de la compania ${company.name}`}
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
