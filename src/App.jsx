import Navbar from './components/Navbar/Navbar'
import './app.scss'
import Inicio from './pages/Inicio/Inicio'
import { Route, Routes } from 'react-router-dom'
import Peliculas from './pages/Peliculas/Peliculas'
import Series from './pages/Series/Series'
import Buscar from './pages/Buscar/Buscar'
import FullInfo from './pages/FullInfo/FullInfo'
function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Inicio />} index />
				<Route path='/peliculas' element={<Peliculas />} />
				<Route path='/series' element={<Series />} />
				<Route path='/buscar' element={<Buscar />} />
				<Route path='/:id' element={<FullInfo />} />
				<Route path='/peliculas/:id' element={<FullInfo />} />
				<Route path='/series/:id' element={<FullInfo />} />
				<Route path='/buscar/:id' element={<FullInfo />} />
			</Routes>
		</>
	)
}

export default App
