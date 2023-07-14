import Navbar from './components/Navbar/Navbar'
import './app.scss'
import Inicio from './pages/Inicio/Inicio'
import { Route, Routes } from 'react-router-dom'
import Peliculas from './pages/Peliculas/Peliculas'
import Series from './pages/Series/Series'
import Buscar from './pages/Buscar/Buscar'
function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Inicio />} index />
				<Route path='/peliculas' element={<Peliculas />} />
				<Route path='/series' element={<Series />} />
				<Route path='/buscar' element={<Buscar />} />
			</Routes>
		</>
	)
}

export default App
