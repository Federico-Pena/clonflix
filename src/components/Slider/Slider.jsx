import { useCallback, useEffect, useRef, useState } from 'react'
import './Slider.scss'
import useObserver from '../../hooks/useObserver'
import { fetchGeneros, fetchPelicula } from '../../helpers/fetchPelicula'
import CardPelicula from '../CardPelicula/CardPelicula'

function Slider({ tipo, titulo }) {
	const [pages, setPages] = useState(1)
	const [data, setData] = useState([])
	const visorRef = useRef(null)
	const { visible } = useObserver(visorRef.current)

	const cambiarPagina = useCallback(() => {
		setPages((prev) => prev + 1)
	}, [])

	useEffect(() => {
		const getPeliculas = async () => {
			if (tipo.includes('genres')) {
				console.log(tipo.includes('genres'))
				const { results } = await fetchGeneros(tipo, pages)
				setData((prev) => prev.concat(results))
			} else {
				const { results } = await fetchPelicula(tipo, pages)
				setData((prev) => prev.concat(results))
			}
		}
		getPeliculas()
	}, [])
	useEffect(() => {
		visible && cambiarPagina()
	}, [visible, cambiarPagina])

	useEffect(() => {
		const getPeliculas = async () => {
			if (tipo.includes('genres')) {
				console.log(tipo.includes('genres'))
				const { results } = await fetchGeneros(tipo, pages)
				setData((prev) => prev.concat(results))
			} else {
				const { results } = await fetchPelicula(tipo, pages)
				setData((prev) => prev.concat(results))
			}
		}
		visible && getPeliculas()
	}, [visible, tipo, pages])

	return (
		<>
			<h2 className='h2Slider'>{titulo}</h2>
			<div className='sliderDiv'>
				{data.map((elem, i) => {
					return <CardPelicula pelicula={elem} key={`${elem.id} ${i}`} />
				})}
				<span className='divsliderDiv' ref={visorRef}></span>
			</div>
		</>
	)
}

export default Slider
