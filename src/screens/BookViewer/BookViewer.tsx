import BookComponent from '../../components/BookComponent/BookComponent';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import { useBooks } from './hooks';
import { Container, Grid, ErrorMessage, LoadingMessage } from './styles';
import { useOffset } from '../../context/OffsetContext';
import { useCallback, useState } from 'react';
import { Book } from '../../types';

const BookViewer = () => {
	const { offset, setOffset } = useOffset();
	const { booksData, error } = useBooks(offset);
	const [favoriteBooks, setFavoriteBooks] = useState<Book[]>([]);

	const onRefresh = useCallback(
		() => setOffset((prev) => prev + 20),
		[setOffset]
	);

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
		[favoriteBooks]
	);

	const bookIsFavorite = useCallback(
		(id: number) => {
			const bookIsInFavorites =
				favoriteBooks.filter((book) => book.id === id).length > 0;
			return bookIsInFavorites;
		},
		[favoriteBooks]
	);

	console.log('renders');

	return (
		<Container>
			<HeaderComponent
				title='Book Viewer'
				onRefresh={() => onRefresh()}
			/>
			{booksData.length > 0 ? (
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
