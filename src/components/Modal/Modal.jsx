import './Modal.scss'
function Modal({ titulo, descripcion }) {
	return (
		<div className='modalDiv'>
			{titulo && <h3>{titulo}</h3>}
			{descripcion && <p>{descripcion}</p>}
		</div>
	)
}

export default Modal
