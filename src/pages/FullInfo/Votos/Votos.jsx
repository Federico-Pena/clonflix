import './Votos.scss'
function Votos({ fullInfo }) {
	function colorVotos(num) {
		if (num <= 4) {
			return 'red'
		}
		if (num <= 7) {
			return 'yellow'
		}
		if (num <= 10) {
			return 'green'
		}
	}
	function colorCantidadVotos(num) {
		if (num <= 1000) {
			return 'red'
		}
		if (num <= 3000) {
			return 'yellow'
		}
		if (num > 3000) {
			return 'green'
		}
	}
	return (
		fullInfo &&
		fullInfo.vote_average && (
			<ul className='votosFullInfo'>
				<li>
					<p>Votos</p>
					<p
						className='promedio'
						style={{
							backgroundColor: colorCantidadVotos(fullInfo.vote_count),
						}}>
						{fullInfo.vote_count}
					</p>
				</li>
				<li>
					<p>Promedio</p>
					<p
						className='promedio'
						style={{
							backgroundColor: colorVotos(fullInfo.vote_average?.toFixed(1)),
						}}>
						{fullInfo.vote_average?.toFixed(1)}
					</p>
				</li>
			</ul>
		)
	)
}

export default Votos
