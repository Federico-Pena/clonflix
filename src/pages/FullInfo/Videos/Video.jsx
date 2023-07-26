import { useRef } from 'react'
import ObserverUnobserve from '../../../components/ObserverUnobserve/ObserverUnobserve'

function Video({ video }) {
	const iframeRef = useRef(null)

	function intersecting(e) {
		if (e) {
			iframeRef.current.src = `https://www.youtube.com/embed/${video.key}`
		}
	}
	return (
		<ObserverUnobserve intersecting={intersecting}>
			<li key={video.key}>
				{video.name}
				<iframe
					src='https://placehold.co/1920x1080/000000/FFF.mp4?text=...'
					ref={iframeRef}></iframe>
			</li>
		</ObserverUnobserve>
	)
}

export default Video
