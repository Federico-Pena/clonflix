import './Generos.scss'
function Generos({ fullInfo }) {
	return (
		fullInfo &&
		fullInfo.genres?.length && (
			<ul className='generosFullInfo'>
				{fullInfo.genres?.map((genre) => {
					return <li key={genre.id}>{genre.name}</li>
				})}
			</ul>
		)
	)
}

export default Generos
