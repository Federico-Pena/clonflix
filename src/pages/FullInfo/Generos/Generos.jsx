import './Generos.scss'
function Generos({ fullInfo }) {
	return (
		fullInfo &&
		fullInfo.genres?.length && (
			<ul className='generosFullInfo'>
				<li className='titulo'>Géneros</li>
				{fullInfo.genres?.map((genre) => {
					return (
						<li className='genero' key={genre.id}>
							{genre.name}
						</li>
					)
				})}
			</ul>
		)
	)
}

export default Generos
