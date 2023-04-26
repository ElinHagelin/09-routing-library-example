import { favoritesAtom } from "../data/favorites";
import { useRecoilState } from "recoil";

const ViewBook = ({ book, tab }) => {
	const [favorites, setFavorites] = useRecoilState(favoritesAtom)

	const addToFavorites = book => {
		const check = favorites.find(bookObject => bookObject.id === book.id)
		check === undefined && setFavorites([...favorites, book])
	}
	const removeFromFavorites = book => {
		let newList = favorites.filter(bookObject => bookObject.id !== book.id)
		setFavorites(newList)
	}

	return (
		<li key={book.id} className="book-container">
			{book.title}, {book.author}
			{tab != 'favorites' ?
				<button onClick={() => addToFavorites(book)}> ❤️ Add to favorites </button> :
				<button onClick={() => removeFromFavorites(book)}> ❤️ 👎 Actually, I hate it now (unfavorite) </button>}
		</li>
	)
}

export default ViewBook