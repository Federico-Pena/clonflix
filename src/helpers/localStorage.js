export const agregar = (elemento, setModal, setError) => {
	const array = []
	const DB = JSON.parse(localStorage.getItem('clonflix'))
	if (!DB || !DB.length) {
		array.push(elemento)
		localStorage.setItem('clonflix', JSON.stringify(array))
		setModal(true)
		setTimeout(() => {
			setModal(false)
		}, 2000)
	} else {
		const coincidencia = DB.filter((item) => item.id === elemento.id)
		if (!coincidencia.length) {
			array.push(...DB)
			array.push(elemento)
			localStorage.setItem('clonflix', JSON.stringify(array))
			setModal(true)
			setTimeout(() => {
				setModal(false)
			}, 2000)
		} else {
			setModal(true)
			setError(true)
			setTimeout(() => {
				setModal(false)
			}, 2000)
		}
	}
}
