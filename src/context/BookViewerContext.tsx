import { createContext } from 'react';
import { Book } from '../types';

const BookViewerContext = createContext<{
	offset: number;
	setOffset: React.Dispatch<React.SetStateAction<number>>;
	booksData: Book[];
	setBooksData: React.Dispatch<React.SetStateAction<Book[]>>;
	favoriteBooks: Book[];
	setFavoriteBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}>({
	offset: 0,
	setOffset: () => {},
	booksData: [],
	setBooksData: () => {},
	favoriteBooks: [],
	setFavoriteBooks: () => {}
});

export default BookViewerContext;
