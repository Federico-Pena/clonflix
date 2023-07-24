export const compartir = async () => {
	if ('share' in navigator) {
		try {
			await navigator.share({
				title: 'Recomendacion',
				url: window.location.href,
			})
		} catch (error) {
			return new Error(error)
		}
	}
}
