import { useRef } from 'react'
import ObserverUnobserve from '../../../components/ObserverUnobserve/ObserverUnobserve'

function Video({ video }) {
	const iframeRef = useRef(null)
	const liVideoRef = useRef(null)

	function intersecting(e) {
		if (e) {
			iframeRef.current.src = `https://www.youtube.com/embed/${video.key}`
			liVideoRef.current.classList.add('videoVisible')
		}
	}
	return (
		<ObserverUnobserve intersecting={intersecting}>
			<li key={video.key} ref={liVideoRef}>
				{video.name}
				<iframe ref={iframeRef} title={video.name}></iframe>
			</li>
		</ObserverUnobserve>
	)
}

export default Video
