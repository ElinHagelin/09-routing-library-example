import ViewBook from "../components/ViewBook";
import { favoritesAtom } from "../data/favorites";
import { useRecoilState } from "recoil";

const Favorites = () => {
	const [favorites, setFavorites] = useRecoilState(favoritesAtom)
	return (
		<div className="content">
			<h2> My favorites </h2>
			<p>These are your favorited books.</p>
			<ul className='book-list-container'>
				{favorites.map(book =>
					<ViewBook key={book.id} book={book} tab='favorites' />
				)}
			</ul>
		</div>
	)
}

export default Favorites
