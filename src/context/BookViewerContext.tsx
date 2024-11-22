import { createContext } from 'react';
import { Book } from '../types';

const BookViewerContext = createContext<{
	offset: number;
	setOffset: React.Dispatch<React.SetStateAction<number>>;
	booksData: Book[];
	setBooksData: React.Dispatch<React.SetStateAction<Book[]>>;
}>({
	offset: 0,
	setOffset: () => {},
	booksData: [],
	setBooksData: () => {}
});

export default BookViewerContext;
