import { IoAddCircleOutline, IoShareSocialOutline } from 'react-icons/io5'
import Button from '../../components/Button/Button'
import { agregar } from '../../helpers/localStorage'
import { compartir } from '../../helpers/compartir'

function Titulos({ fullInfo, setModal, setError }) {
	return (
		fullInfo &&
		(fullInfo.title || fullInfo.name) && (
			<div className='titulosFullInfo'>
				<Button
					className={'btnAgregar'}
					onClicked={() => agregar(fullInfo, setModal, setError)}
					icon={<IoAddCircleOutline />}
					text={'Mi lista'}
				/>
				<Button
					className={'btnCompartir'}
					onClicked={compartir}
					icon={<IoShareSocialOutline />}
					text={'Compartir'}
				/>

				<h3>{fullInfo.title || fullInfo.name}</h3>
				<h4>{fullInfo.tagline}</h4>
				{fullInfo.release_date && (
					<h4>
						Estreno {new Date(fullInfo.release_date).toLocaleDateString()}
					</h4>
				)}
			</div>
		)
	)
}

export default Titulos
