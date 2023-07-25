export const compartir = async () => {
	if ('share' in navigator) {
		try {
			await navigator.share({
				title: 'Recomendacion',
				url: window.location.href,
			})
		} catch (error) {
			console.error('Share in navigator error ' + error)
		}
	}
}
