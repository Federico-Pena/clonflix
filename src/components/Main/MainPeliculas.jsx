import Slider from '../Slider/Slider'
import { apiconfig } from '../../config/apiConfig'

function MainPeliculas() {
	const pelicula = apiconfig.pelicula
	const genero = pelicula.generos

	return (
		<>
			<Slider titulo={'Tendencias'} tipo={pelicula.tendencias} />
			<Slider titulo={'Accion'} tipo={genero.accion} />
			<Slider titulo={'Misterio'} tipo={genero.misterio} />
			<Slider titulo={'Familia'} tipo={genero.familia} />
			<Slider titulo={'Comedia'} tipo={genero.comedia} />
			<Slider titulo={'Aventura'} tipo={genero.aventura} />
			<Slider titulo={'Animacion'} tipo={genero.animacion} />
		</>
	)
}

export default MainPeliculas
