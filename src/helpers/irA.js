export const irA = (id, tipo) => {
	return `id=${id}?${tipo.split('.')[0]}`
}
