import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
	return (
		<nav>
			<div className="nav-wrapper deep-purple darken-1 px1">
				<NavLink to="/" className="brand-logo">React + TS</NavLink>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><NavLink to="/">Список дел</NavLink></li>
					<li><NavLink to="/about">Информация</NavLink></li>
				</ul>
			</div>
		</nav>
	)
}