import './Navbar.scss'
import { FiSearch } from 'react-icons/fi'
import { GoHome } from 'react-icons/go'
import Categorias from '../Categorias/Categorias'
import { useState } from 'react'

function Navbar() {
	const [classAside, setClassAside] = useState(false)

	const abrirAside = (e) => {
		setClassAside(true)
	}

	const cerrarAside = (e) => {
		setClassAside(false)
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
						<li className='liNavbar'>
							<GoHome className='liHomeIcon' />
						</li>
						<li className='liNavbar'>
							<FiSearch className='liSearchIcon' />
						</li>
					</ul>
				</div>

				<ul className='ulNavbarLinks'>
					<li>Series</li>
					<li>Peliculas</li>
					<li onClick={abrirAside}>Categorias</li>
				</ul>
			</nav>
			<Categorias
				cerrarAside={cerrarAside}
				clase={classAside ? '' : 'hidden'}
			/>
		</header>
	)
}

export default Navbar
