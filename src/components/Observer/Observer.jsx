import { useEffect, useRef } from 'react'

function Observer({
	intersecting,
	children,
	root = null,
	rootMargin = '0px',
	threshold = 0,
}) {
	const divObserverRef = useRef()

	useEffect(() => {
		const { current } = divObserverRef
		const opciones = {
			root: root,
			rootMargin: rootMargin,
			threshold: threshold,
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					intersecting(entry)
				}
			})
		}, opciones)

		observer.observe(divObserverRef.current)

		return () => {
			current && observer.unobserve(current)
		}
	}, [root, rootMargin, threshold, intersecting])
	return <div ref={divObserverRef}>{children}</div>
}

export default Observer
