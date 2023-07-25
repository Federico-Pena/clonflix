import { useCallback, useEffect, useRef, useState } from 'react'
import './Slider.scss'
import useObserver from '../../hooks/useObserver'
import { fetchGeneros, fetchPelicula } from '../../helpers/fetchPelicula'
import CardPelicula from '../CardPelicula/CardPelicula'

function Slider({ tipo, titulo }) {
	const [pages, setPages] = useState(1)
	const [data, setData] = useState([])
	const visorRef = useRef(null)
	const { current } = visorRef
	const { visible } = useObserver(current)

	const cambiarPagina = useCallback(() => {
		setPages((prev) => prev + 1)
	}, [])

	useEffect(() => {
		if (visible) {
			cambiarPagina()
		}
	}, [visible, cambiarPagina])

	useEffect(() => {
		if (visible) {
			const getPeliculas = async () => {
				if (tipo.includes('genres')) {
					const data = await fetchGeneros(tipo, pages)
					setData((prev) => prev.concat(data.results))
				} else {
					const data = await fetchPelicula(tipo, pages)
					setData((prev) => prev.concat(data.results))
				}
			}
			getPeliculas()
		}
	}, [visible, tipo, pages])

	return (
		<>
			<h2 className='h2Slider'>{titulo}</h2>
			<div className='sliderDiv'>
				{data?.map((elem, i) => {
					return (
						<CardPelicula tipo={tipo} pelicula={elem} key={`${elem.id} ${i}`} />
					)
				})}
				<span className='divsliderDiv' ref={visorRef}></span>
			</div>
		</>
	)
}

export default Slider
