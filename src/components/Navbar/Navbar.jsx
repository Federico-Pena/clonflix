import './Navbar.scss'
import { FiSearch } from 'react-icons/fi'
import { GoHome } from 'react-icons/go'
import Categorias from '../Categorias/Categorias'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import { BiUserCircle } from 'react-icons/bi'
import MiLista from './MiLista'

function Navbar() {
	const [classCategorias, setClassCategorias] = useState(false)
	const [miLista, setMiLista] = useState(false)
	const locationReact = useLocation()
	const abrirCategorias = () => {
		setClassCategorias(true)
	}

	const cerrarCategorias = () => {
		setClassCategorias(false)
	}
	const abirUser = () => {
		setMiLista(true)
	}
	const cerrarMiLista = () => {
		setMiLista(false)
	}
	return (
		<header>
			{miLista && <MiLista cerrarMiLista={cerrarMiLista} />}
			<nav className='NavBar'>
				<div className='divNavbar'>
					<img
						title='logo App ClonFLix'
						src='./assets/logo.png'
						alt='logo App ClonFLix'
						className='ImgNavbar'
					/>
					<ul className='ulNavbarIcons'>
						<li className='liNavbar'>
							<Link to={'/'}>
								<GoHome
									title='Home'
									className={
										locationReact.pathname === '/' ? 'liLinksActive' : 'liIcon'
									}
								/>
							</Link>
						</li>
						<li className='liNavbar'>
							<Link to={'/buscar'}>
								<FiSearch
									title='Buscar'
									className={
										locationReact.pathname === '/buscar'
											? 'liLinksActive'
											: 'liIcon'
									}
								/>
							</Link>
						</li>
						<li className='liNavbar'>
							<Link>
								<BiUserCircle
									title='Mi Lista'
									className='userIcon'
									onClick={abirUser}
								/>
							</Link>
						</li>
					</ul>
				</div>

				<ul className='ulNavbarLinks'>
					{locationReact.pathname === '/series' ||
					locationReact.pathname === '/series/' ||
					locationReact.pathname === '/' ? (
						<>
							{locationReact.pathname !== '/' && (
								<li>
									<Link title='Volver Atras' to={'/'} className='btnCerrar'>
										<IoArrowBack />
									</Link>
								</li>
							)}
							<li
								className={
									(locationReact.pathname === '/series' ||
										locationReact.pathname === '/series/') &&
									locationReact.pathname !== '/peliculas'
										? 'liLinksActive'
										: 'liLinks linkSerie'
								}>
								<Link title='Link a Series' to={'/series'}>
									Series
								</Link>
							</li>
						</>
					) : null}
					{locationReact.pathname === '/peliculas' ||
					locationReact.pathname === '/peliculas/' ||
					locationReact.pathname === '/' ? (
						<>
							{locationReact.pathname !== '/' && (
								<li>
									<Link title='Volver Atras' to={'/'} className='btnCerrar'>
										<IoArrowBack />
									</Link>
								</li>
							)}
							<li
								className={
									(locationReact.pathname === '/peliculas' ||
										locationReact.pathname === '/peliculas/') &&
									locationReact.pathname !== '/series'
										? 'liLinksActive'
										: 'liLinks linkPeli'
								}>
								<Link title='Link a Peliculas' to={'/peliculas'}>
									Peliculas
								</Link>
							</li>
						</>
					) : null}
					{locationReact.pathname !== '/' ? null : (
						<li
							title='Categorias'
							className={'liLinksCategorias'}
							onClick={abrirCategorias}>
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
