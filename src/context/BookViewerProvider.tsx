import { useState } from 'react';
import BookViewerContext from './BookViewerContext';
import { Book } from '../types';

const BookViewerProvider: React.FC<{ children: React.ReactNode }> = ({
	children
}) => {
	const [offset, setOffset] = useState(0);
	const [booksData, setBooksData] = useState<Book[]>([]);
	const [favoriteBooks, setFavoriteBooks] = useState<Book[]>([]);
	return (
		<BookViewerContext.Provider
			value={{
				offset,
				setOffset,
				booksData,
				setBooksData,
				favoriteBooks,
				setFavoriteBooks
			}}
		>
			{children}
		</BookViewerContext.Provider>
	);
};
export default BookViewerProvider;
