import { NavLink } from 'react-router-dom'


const Header = () => (
	<header>
		<h1> RR library </h1>
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/toplist">The toplist</NavLink>
			<NavLink to="/find-book">Find a book</NavLink>
			<NavLink to="/favorites">My favorites</NavLink>
			<NavLink to="/get-a-card">Get a library card</NavLink>
		</nav>
	</header>
)

export default Header
