import { IoAddCircleOutline, IoShareSocialOutline } from 'react-icons/io5'
import Button from '../../../components/Button/Button'
import { agregar } from '../../../helpers/localStorage'
import { compartir } from '../../../helpers/compartir'
import './Botones.scss'
function Botones({ fullInfo, setModal, setError }) {
	return (
		fullInfo &&
		(fullInfo.title || fullInfo.name) && (
			<div className='titulosFullInfo'>
				<Button
					title={'Agregar a Mi Lista'}
					className={'btnAgregar'}
					onClicked={() => agregar(fullInfo, setModal, setError)}
					icon={<IoAddCircleOutline />}
					text={'Mi lista'}
				/>
				<Button
					title={'Compartir'}
					className={'btnCompartir'}
					onClicked={compartir}
					icon={<IoShareSocialOutline />}
					text={'Compartir'}
				/>
			</div>
		)
	)
}

export default Botones
