import { useNavigate } from 'react-router-dom';
import { IBookComponent } from './types';
import altImage from '../../assets/book.svg';
import { Container, Header, StarIcon, Title, Subtitle, Image } from './styles';
import { memo } from 'react';

const BookComponent: React.FC<IBookComponent> = memo(
	({ title, subTitle, image, id, onToggleFavoriteBook, isFavorite }) => {
		const navigate = useNavigate();
		const onClickBook = () => navigate(`./book/${id}`);
		console.log('renders', id);
		return (
			<Container onClick={onClickBook}>
				<Header>
					<StarIcon
						isFavorite={isFavorite}
						onClick={onToggleFavoriteBook}
						aria-label={
							isFavorite ? 'Unfavorite book' : 'Favorite book'
						}
					>
						{isFavorite ? '★' : '☆'}
					</StarIcon>
					<Title>{title}</Title>
					{subTitle && <Subtitle>{subTitle}</Subtitle>}
				</Header>
				<Image src={image ? image : altImage} alt={title} />
			</Container>
		);
	}
);

export default BookComponent;
