import ViewBook from "../components/ViewBook";
import { favoritesAtom } from "../data/favorites";
import { useRecoilState } from "recoil";

const Favorites = () => {
	const [favorites, setFavorites] = useRecoilState(favoritesAtom)
	return (
		<div className="content">
			<h2> My favorites </h2>
			<p>These are your favorited books.</p>
			<ul>
				{favorites.map(book =>
					<ViewBook key={book.id} book={book} tab='favorites' />
				)}
			</ul>
		</div>
	)
}

// <li> To Kill a Mockingbird, Harper Lee
// 	<button>👎 Actually, I hate it now (unfavorite) </button>
// </li>
export default Favorites
