function Generos({ fullInfo }) {
	return (
		fullInfo &&
		fullInfo.genres?.length && (
			<ul className='generosFullInfo'>
				{fullInfo.genres?.map((genre) => {
					return (
						<li key={genre.id}>
							<p>{genre.name}</p>
						</li>
					)
				})}
			</ul>
		)
	)
}

export default Generos
