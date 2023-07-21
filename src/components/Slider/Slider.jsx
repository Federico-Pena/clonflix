import { useEffect, useRef } from 'react'
import './Slider.scss'
function Slider({ children, setPage, obtenerSeriesYpeliculas, tipo, titulo }) {
	const divSlider = useRef()
	const spanSlider = useRef()

	useEffect(() => {
		const { current } = spanSlider
		const opciones = {
			root: divSlider.current,
			rootMargin: '0px ',
			threshold: 1,
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setPage &&
						setPage({
							enPantalla: entry.isIntersecting,
							slider: divSlider.current,
							tipo: tipo,
						})
					obtenerSeriesYpeliculas(tipo)
				}
			})
		}, opciones)

		observer.observe(current)

		return () => {
			current && observer.unobserve(current)
		}
	}, [setPage, obtenerSeriesYpeliculas, tipo])

	return (
		<>
			<h2 className='h2Slider'>{titulo}</h2>
			<div className='sliderDiv' ref={divSlider}>
				{children} <div className='divsliderDiv' ref={spanSlider}></div>
			</div>
		</>
	)
}

export default Slider
