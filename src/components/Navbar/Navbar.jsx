import './Navbar.scss'
import { FiSearch } from 'react-icons/fi'
import { GoHome } from 'react-icons/go'
import Categorias from '../Categorias/Categorias'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
function Navbar() {
	const [classCategorias, setClassCategorias] = useState(false)
	const locationReact = useLocation()
	const abrirCategorias = (e) => {
		setClassCategorias(true)
	}

	const cerrarCategorias = (e) => {
		setClassCategorias(false)
	}
	return (
		<header>
			<nav className='NavBar'>
				<div className='divNavbar'>
					<img
						src='./assets/logo.png'
						alt='logo App ClonFLix'
						className='ImgNavbar'
					/>
					<ul className='ulNavbarIcons'>
						<Link to={'/'} className='liNavbar'>
							<GoHome
								className={
									locationReact.pathname === '/'
										? 'liLinksActive'
										: 'liHomeIcon'
								}
							/>
						</Link>
						<Link to={'/buscar'} className='liNavbar'>
							<FiSearch
								className={
									locationReact.pathname === '/buscar'
										? 'liLinksActive'
										: 'liSearchIcon'
								}
							/>
						</Link>
					</ul>
				</div>

				<ul className='ulNavbarLinks'>
					<Link
						className={
							locationReact.pathname === '/series' ? 'liLinksActive' : 'liLinks'
						}
						to={'/series'}>
						Series
					</Link>
					<Link
						className={
							locationReact.pathname === '/peliculas'
								? 'liLinksActive'
								: 'liLinks'
						}
						to={'/peliculas'}>
						Peliculas
					</Link>
					<li onClick={abrirCategorias}>Categorias</li>
				</ul>
			</nav>
			<Categorias
				cerrarCategorias={cerrarCategorias}
				clase={classCategorias ? '' : 'hidden'}
			/>
		</header>
	)
}

export default Navbar
