import Slider from '../Slider/Slider'
import { apiconfig } from '../../config/apiConfig'

function MainInicio() {
	const pelicula = apiconfig.pelicula
	const serie = apiconfig.serie
	return (
		<>
			<Slider titulo={'Peliculas Populares'} tipo={pelicula.polular} />
			<Slider titulo={'Peliculas Mejor Valoradas'} tipo={pelicula.valorada} />
			<Slider titulo={'Series Populares'} tipo={serie.popular} />
			<Slider titulo={'Series Mejor Valoradas'} tipo={serie.valorada} />
		</>
	)
}

export default MainInicio
