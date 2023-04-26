import Root from './routes/Root.jsx'
import { createHashRouter } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Toplist, { loader as booksLoader } from './routes/Toplist.jsx'
import FindBook from './routes/FindBook.jsx'
import Favorites from './routes/Favorites.jsx'
import RegisterCard from './routes/RegisterCard.jsx'

export const router = createHashRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '',
				element: <Home />
			},
			{
				path: 'toplist',
				element: <Toplist />,
				loader: booksLoader
			},
			{
				path: 'find-book',
				element: <FindBook />,
				loader: booksLoader
			},
			{
				path: 'favorites',
				element: <Favorites />
			},
			{
				path: 'get-a-card',
				element: <RegisterCard />
			},
			{   // om man inte har en dedikerad ErrorPage-komponent, kan man matcha alla felaktiga routes med '*'
				path: '*',
				element: <Home />
			}
		]
	}
])