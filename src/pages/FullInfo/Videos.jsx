import { useRef } from 'react'
import ObserverUnobserve from '../../components/Observer/ObserverUnobserve'

function Videos({ video }) {
	const iframeRef = useRef(null)
	function intersecting(e) {
		const { current } = iframeRef
		if (e.isIntersecting) {
			current.src = `https://www.youtube.com/embed/${video.key}`
		}
	}
	return (
		<ObserverUnobserve intersecting={intersecting} rootMargin='150px'>
			<li key={video.key}>
				{video.name}
				<iframe ref={iframeRef} title={video.name}></iframe>
			</li>
		</ObserverUnobserve>
	)
}

export default Videos
