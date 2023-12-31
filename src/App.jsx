import Navbar from './components/Navbar/Navbar'
import './app.scss'
import Inicio from './pages/Inicio/Inicio'
import { Route, Routes } from 'react-router-dom'
import Peliculas from './pages/Peliculas/Peliculas'
import Series from './pages/Series/Series'
import Buscar from './pages/Buscar/Buscar'
import FullInfo from './pages/FullInfo/FullInfo'
import LogoLoading from './components/Loading/LogoLoading'
function App() {
	return (
		<>
			<LogoLoading />
			<Navbar />
			<Routes>
				<Route path='/peliculas' element={<Peliculas />} />
				<Route path='/series' element={<Series />} />
				<Route path='/buscar' element={<Buscar />} />
				<Route path='/peliculas/:id' element={<FullInfo />} />
				<Route path='/series/:id' element={<FullInfo />} />
				<Route path='/buscar/:id' element={<FullInfo />} />
				<Route path='/:id' element={<FullInfo />} />
				<Route path='/' element={<Inicio />} index />
			</Routes>
		</>
	)
}

export default App
