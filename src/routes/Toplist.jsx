import { useLoaderData } from 'react-router-dom'
import { data } from "../data/books.js"
import ViewBook from '../components/ViewBook.jsx'

export const loader = () => data

const Toplist = () => {
	const books = useLoaderData()

	return (
		<div className="content">
			<h2> The toplist </h2>
			<p>Most searched for books right now!</p>
			<ol className='book-list-container'>
				{books.map(book => (
					<ViewBook key={book.id} book={book} />

				))}
			</ol>
		</div>
	)
}


export default Toplist
