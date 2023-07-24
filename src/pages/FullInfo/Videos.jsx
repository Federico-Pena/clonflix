import Video from './Video'

function Videos({ fullInfo }) {
	return (
		fullInfo &&
		fullInfo.videos?.results.length && (
			<ul className='videosFullInfo'>
				{fullInfo.videos.results?.splice(1, 5).map((video, i) => {
					return video.key && <Video key={i} video={video} />
				})}
			</ul>
		)
	)
}

export default Videos
