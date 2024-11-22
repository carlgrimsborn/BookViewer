import { useState } from 'react';
import BookComponent from '../../components/BookComponent/BookComponent';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import { useBooks } from './hooks';
import { Container, Grid, ErrorMessage, LoadingMessage } from './styles';

const BookViewer = () => {
	const [offset, setOffset] = useState(0);
	const { booksData, error } = useBooks(offset);

	const onRefresh = () => setOffset((prev) => prev + 20);

	return (
		<Container>
			<HeaderComponent
				title='Book Viewer'
				onRefresh={() => onRefresh()}
			/>
			{booksData.length > 0 ? (
				<Grid>
					{booksData.map(({ id, image, subtitle, title }) => (
						<BookComponent
							key={id}
							title={title}
							subTitle={subtitle}
							image={image}
							id={id}
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
