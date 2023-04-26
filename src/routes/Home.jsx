import { NavLink } from "react-router-dom"

const Home = () => (
	<div className="content">
		<h2> Home </h2>
		<p>Welcome to the library!</p>
		<p>If you're new here, why not check out
			{<NavLink to="/toplist"> The toplist </NavLink>}?
		</p>
	</div>
)

export default Home
