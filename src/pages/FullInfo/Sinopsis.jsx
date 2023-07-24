function Sinopsis({ fullInfo }) {
	return (
		fullInfo &&
		fullInfo.overview &&
		fullInfo.overview.split('. ').map((Seg) => {
			return Seg.trim() ? (
				<p className='overview' key={Seg}>
					{Seg}
				</p>
			) : null
		})
	)
}

export default Sinopsis
