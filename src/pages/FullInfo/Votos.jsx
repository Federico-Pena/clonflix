function Votos({ fullInfo }) {
	return (
		fullInfo &&
		fullInfo.vote_average && (
			<ul className='votosFullInfo'>
				<li>
					<p>Votacion</p>
					<p>{fullInfo.vote_count}</p>
				</li>
				<li>
					<p>Popularidad</p>
					<p> {fullInfo.popularity}</p>
				</li>
				<li>
					<p>Promedio</p>
					<p>{fullInfo.vote_average?.toFixed(1)}</p>
				</li>
			</ul>
		)
	)
}

export default Votos
