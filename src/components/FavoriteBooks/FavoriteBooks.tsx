import BookComponent from '../BookComponent/BookComponent';
import { NoFavoritesMessage, FavoriteBooksContainer } from './styles';
import { IFavoriteBooks } from './types';

const FavoriteBooks: React.FC<IFavoriteBooks> = ({ books }) => {
	return (
		<FavoriteBooksContainer>
			{books.length > 0 ? (
				books.map((book) => (
					<BookComponent
						key={book.id}
						title={book.title}
						subTitle={book.subtitle}
						image={book.image}
						id={book.id}
						isFavorite={true}
						onToggleFavoriteBook={() => {}}
					/>
				))
			) : (
				<NoFavoritesMessage>No favorites added yet.</NoFavoritesMessage>
			)}
		</FavoriteBooksContainer>
	);
};

export default FavoriteBooks;
