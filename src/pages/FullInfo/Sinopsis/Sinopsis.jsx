import './Sinopsis.scss'
function Sinopsis({ fullInfo }) {
	return (
		<>
			<h3>Sinopsis</h3>
			{fullInfo &&
				fullInfo.overview &&
				fullInfo.overview.split('. ').map((Seg) => {
					return Seg.trim() ? (
						<p className='overview' key={Seg}>
							{Seg}
						</p>
					) : null
				})}
		</>
	)
}

export default Sinopsis
