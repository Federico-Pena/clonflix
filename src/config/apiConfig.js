const apiKey = import.meta.env.VITE_TMDB_API_KEY

export const apiconfig = {
	baseUrl: 'https://api.themoviedb.org/3',
	finUrl: `?api_key=${apiKey}&language=es-MX&sort_by=vote_count.desc&`,
	finUrlGeneros: `&api_key=${apiKey}&language=es-MX&sort_by=vote_count.desc&`,
	baseUrlImageOriginal: 'https://image.tmdb.org/t/p/original',
	baseUrlImageW500: 'https://image.tmdb.org/t/p/w500',
	baseUrlImageW300: 'https://image.tmdb.org/t/p/w300',
	baseUrlImageW92: 'https://image.tmdb.org/t/p/w92',
	tendenciasTodas: '/trending/all/week',
	buscarTodo: '/search/multi?query=',
	pelicula: {
		proximamente: '/movie/upcoming',
		tendencias: '/trending/movie/week',
		polular: '/movie/popular',
		valorada: '/movie/top_rated',
		generos: {
			accion: '/discover/movie?with_genres=28',
			animacion: '/discover/movie?with_genres=16',
			aventura: '/discover/movie?with_genres=12',
			comedia: '/discover/movie?with_genres=35',
			familia: '/discover/movie?with_genres=10751',
			misterio: '/discover/movie?with_genres=9648',
		},
	},
	serie: {
		popular: '/tv/popular',
		valorada: '/tv/top_rated',
		tendencias: '/trending/tv/week',
		generos: {
			accion: '/discover/tv?with_genres=10759',
			animacion: '/discover/tv?with_genres=16',
			comedia: '/discover/tv?with_genres=35',
			familia: '/discover/tv?with_genres=10751',
			misterio: '/discover/tv?with_genres=9648',
		},
	},
}
