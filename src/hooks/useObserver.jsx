import { useEffect, useState } from 'react'

function useObserver(observado) {
	const [visible, setVisible] = useState(false)
	useEffect(() => {
		const options = {
			root: null,
			rooMargin: '0',
			treshold: 0,
		}
		const esVisible = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setVisible(entry.isIntersecting)
				} else {
					setVisible(false)
				}
			})
		}
		const observer = new IntersectionObserver(esVisible, options)
		observado && observer.observe(observado)
		return () => observado && observer.unobserve(observado)
	}, [observado])

	return { visible }
}

export default useObserver
