import { useEffect, useRef } from 'react'
import './ContainerWrap.scss'
function ContainerWrap({ children, setPages, tipo, obtenerPeliculas }) {
	const divGridRef = useRef()
	const ContainerGridRef = useRef()
	useEffect(() => {
		const { current } = divGridRef
		const opciones = {
			rootMargin: '200px',
			threshold: 0,
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setPages({
						enPantalla: entry.isIntersecting,
						slider: divGridRef.current,
						tipo: tipo,
					})
					obtenerPeliculas(tipo)
				}
			})
		}, opciones)

		current && observer.observe(current)

		return () => {
			current && observer.unobserve(current)
		}
	}, [obtenerPeliculas, setPages, tipo])

	return (
		<div ref={ContainerGridRef} className='ContainerColumn'>
			{children} <div className='divGrid' ref={divGridRef}></div>
		</div>
	)
}

export default ContainerWrap
