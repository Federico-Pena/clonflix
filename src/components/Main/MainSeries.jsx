import Slider from '../Slider/Slider'
import { apiconfig } from '../../config/apiConfig'

function MainSeries() {
	const serie = apiconfig.serie
	const genero = apiconfig.serie.generos

	return (
		<>
			<Slider titulo={'Tendencias'} tipo={serie.tendencias} />
			<Slider titulo={'Comedia'} tipo={genero.comedia} />
			<Slider titulo={'Accion'} tipo={genero.accion} />
			<Slider titulo={'Misterio'} tipo={genero.misterio} />
			<Slider titulo={'Familiar'} tipo={genero.familia} />
			<Slider titulo={'Animacion'} tipo={genero.animacion} />
		</>
	)
}

export default MainSeries
