import { useEffect, useRef } from 'react'

function Videos({ video }) {
	const liVideoRef = useRef()
	useEffect(() => {
		const { current } = liVideoRef
		const opciones = {
			rootMargin: '150px',
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
	}, [video])
	return (
		<li key={video.key} ref={liVideoRef}>
			{video.name}
			<iframe title={video.name}></iframe>
		</li>
	)
}

export default Videos
