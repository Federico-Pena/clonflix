import { useEffect, useRef, useState } from 'react'
import './Slider.scss'
import { useObserver } from '../../hooks/useObserver'
import { fetchGeneros, fetchPelicula } from '../../helpers/fetchPelicula'
import CardPelicula from '../CardPelicula/CardPelicula'

function Slider({ tipo, titulo }) {
	const [pages, setPages] = useState(2)
	const [data, setData] = useState([])
	const visorRef = useRef(null)
	const { visible } = useObserver(visorRef.current)
	const divref = useRef(null)
	useEffect(() => {
		const initialFetch = async () => {
			if (tipo.includes('genres')) {
				const { results } = await fetchGeneros(tipo, 1)
				setData(results)
			} else {
				const { results } = await fetchPelicula(tipo, 1)
				setData(results)
			}
		}
		initialFetch()
	}, [tipo])
	useEffect(() => {
		if (visible) {
			const cambiarPagina = () => {
				setPages((prev) => prev + 1)
			}
			const getPeliculas = async () => {
				if (tipo.includes('genres')) {
					const { results } = await fetchGeneros(tipo, pages)
					setData((prev) => prev.concat(results))
				} else {
					const { results } = await fetchPelicula(tipo, pages)
					setData((prev) => prev.concat(results))
				}
				cambiarPagina()
			}
			getPeliculas()
		}
	}, [visible, tipo, pages])

	return (
		<>
			<h2 className='h2Slider'>{titulo}</h2>
			<div className='sliderDiv' ref={divref}>
				{data.map((elem, i) => {
					return <CardPelicula pelicula={elem} key={`${elem.id} ${i}`} />
				})}
				<div className='divsliderDiv' ref={visorRef}></div>
			</div>
		</>
	)
}

export default Slider
