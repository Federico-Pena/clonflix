import './Navbar.scss'
import { FiSearch } from 'react-icons/fi'
import { GoHome } from 'react-icons/go'
import Categorias from '../Categorias/Categorias'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import { BiUserCircle } from 'react-icons/bi'
import User from './User'

function Navbar() {
	const [classCategorias, setClassCategorias] = useState(false)
	const [user, setUser] = useState(false)
	const locationReact = useLocation()
	const abrirCategorias = () => {
		setClassCategorias(true)
	}

	const cerrarCategorias = () => {
		setClassCategorias(false)
	}
	const abirUser = () => {
		setUser(true)
	}
	const cerrarUser = () => {
		setUser(false)
	}
	return (
		<header>
			{user && <User cerrarUser={cerrarUser} />}
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
						<Link className='liNavbar'>
							<BiUserCircle className='userIcon' onClick={abirUser} />
						</Link>
					</ul>
				</div>

				<ul className='ulNavbarLinks'>
					{locationReact.pathname === '/series' ||
					locationReact.pathname === '/' ? (
						<>
							{locationReact.pathname !== '/' && (
								<Link to={'/'} className='btnCerrar'>
									<IoArrowBack />
								</Link>
							)}
							<Link
								className={
									locationReact.pathname === '/series' &&
									locationReact.pathname !== '/peliculas'
										? 'liLinksActive'
										: 'liLinks linkSerie'
								}
								to={'/series'}>
								Series
							</Link>
						</>
					) : null}
					{locationReact.pathname === '/peliculas' ||
					locationReact.pathname === '/' ? (
						<>
							{locationReact.pathname !== '/' && (
								<Link to={'/'} className='btnCerrar'>
									<IoArrowBack />
								</Link>
							)}
							<Link
								className={
									locationReact.pathname === '/peliculas' &&
									locationReact.pathname !== '/series'
										? 'liLinksActive'
										: 'liLinks linkPeli'
								}
								to={'/peliculas'}>
								Peliculas
							</Link>
						</>
					) : null}
					{locationReact.pathname !== '/' ? null : (
						<li className={'liLinksCategorias'} onClick={abrirCategorias}>
							Categorias
						</li>
					)}
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
