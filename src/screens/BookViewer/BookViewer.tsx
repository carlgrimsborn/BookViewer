import BookComponent from '../../components/BookComponent/BookComponent';
import { useBooks } from './hooks';
import { Container, Grid, ErrorMessage, LoadingMessage } from './styles';
import { useCallback } from 'react';
import { Book } from '../../types';
import useBookViewerContext from '../../context/useBookViewerContext';

const BookViewer = () => {
	const { booksData, error } = useBooks();
	const { favoriteBooks, setFavoriteBooks } = useBookViewerContext();

	const onToggleFavoriteBook = useCallback(
		(book: Book) => {
			const bookAlreadyFavorite = favoriteBooks.some(
				(favBook) => favBook.id === book.id
			);
			if (bookAlreadyFavorite) {
				const stateToSet = favoriteBooks.filter(
					(favBook) => favBook.id !== book.id
				);
				setFavoriteBooks(stateToSet);
			} else {
				const stateToSet = [...favoriteBooks, book];
				setFavoriteBooks(stateToSet);
			}
		},
		[favoriteBooks, setFavoriteBooks]
	);

	const bookIsFavorite = useCallback(
		(id: number) => {
			const bookIsInFavorites =
				favoriteBooks.filter((book) => book.id === id).length > 0;
			return bookIsInFavorites;
		},
		[favoriteBooks]
	);

	return (
		<Container>
			{booksData.length > 0 && !error ? (
				<Grid>
					{booksData.map((book) => (
						<BookComponent
							key={book.id}
							title={book.title}
							subTitle={book.subtitle}
							image={book.image}
							id={book.id}
							onToggleFavoriteBook={(e) => {
								e.stopPropagation();
								onToggleFavoriteBook(book);
							}}
							isFavorite={bookIsFavorite(book.id)}
						/>
					))}
				</Grid>
			) : error ? (
				<ErrorMessage>{error}</ErrorMessage>
			) : (
				<LoadingMessage>Loading...</LoadingMessage>
			)}
		</Container>
	);
};

export default BookViewer;
