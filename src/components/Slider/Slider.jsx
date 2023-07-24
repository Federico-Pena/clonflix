import { useRef } from 'react'
import './Slider.scss'
import Observer from '../Observer/Observer'
function Slider({ children, setPage, obtenerSeriesYpeliculas, tipo, titulo }) {
	const divSlider = useRef()

	const intersecting = (e) => {
		if (e.isIntersecting) {
			setPage &&
				setPage({
					enPantalla: e.isIntersecting,
					slider: divSlider.current,
					tipo: tipo,
				})
			obtenerSeriesYpeliculas && obtenerSeriesYpeliculas(tipo, e.isIntersecting)
		}
	}
	return (
		<>
			<h2 className='h2Slider'>{titulo}</h2>
			<div className='sliderDiv' ref={divSlider}>
				{children}
				<Observer intersecting={intersecting}>
					<span className='divsliderDiv'></span>
				</Observer>
			</div>
		</>
	)
}

export default Slider
