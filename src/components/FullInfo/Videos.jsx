import { useEffect, useRef } from 'react'

function Videos({ video }) {
	const liVideoRef = useRef()
	const { current } = liVideoRef
	useEffect(() => {
		const opciones = {
			rootMargin: '0px',
			threshold: 0,
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.children[0].src = `https://www.youtube.com/embed/${video.key}`
					observer.unobserve(entry.target)
				}
			})
		}, opciones)

		observer.observe(liVideoRef.current)

		return () => {
			current && observer.unobserve(current)
		}
	}, [])
	return (
		<li key={video.key} ref={liVideoRef}>
			{video.name}
			<iframe title={video.name}></iframe>
		</li>
	)
}

export default Videos
