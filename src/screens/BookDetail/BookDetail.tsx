import { useState, useEffect } from 'react';
import { BookDetails } from './types';
import sampleBookImg from '../../assets/book.svg';
import { useParams } from 'react-router-dom';
import {
	Container,
	Header,
	BookTitle,
	SubTitle,
	BodyText,
	RatingText,
	BackButton,
	LoadingText,
	Image,
	AuthorText,
	BodyContainer,
	ErrorText
} from './styles';
import { ApiBookDetailResponse } from '../../types';
import books from '../../api/books';
import { AxiosError, isAxiosError } from 'axios';

const BookDetail = () => {
	const { id } = useParams();
	const [bookData, setBookData] = useState<BookDetails | null>({
		title: 'title',
		description: 'description',
		image: sampleBookImg,
		publishDate: 2007,
		numberOfPages: 300,
		rating: 2,
		authors: [
			{
				id: 1,
				name: 'author_name'
			},
			{
				id: 2,
				name: 'author_name_2'
			}
		]
	});
	const [error, setError] = useState<string | null>(null);

	let authorName = '';

	bookData?.authors.map((author, i) => {
		authorName = authorName + (i >= 1 ? ', ' : '') + author.name;
	});

	useEffect(() => {
		async function getBookDetails() {
			try {
				const response: ApiBookDetailResponse = await books.get(
					`${id}`
				);
				const booksStateToSet: BookDetails = {
					title: response.data.title,
					description: response.data.description,
					image: response.data.image,
					rating: response.data.rating.average,
					numberOfPages: response.data.number_of_pages,
					publishDate: response.data.publish_date,
					authors: response.data.authors
				};
				setBookData(booksStateToSet);
				if (error) {
					setError(null);
				}
			} catch (err) {
				const axiosErrorHappened = isAxiosError(err);
				if (axiosErrorHappened) {
					const axiosError = err as AxiosError;
					setError(axiosError.message);
				} else {
					console.log('unknown error:', err);
					setError('Unknown Error');
				}
			}
		}
		getBookDetails();
	}, []);

	if (bookData) {
		return (
			<Container>
				<Image
					src={bookData.image ? bookData.image : sampleBookImg}
					alt={bookData.title}
				/>
				<BodyContainer>
					<Header>
						<BookTitle>{bookData.title}</BookTitle>
						<SubTitle>Published: {bookData.publishDate}</SubTitle>
						<SubTitle>Pages: {bookData.numberOfPages}</SubTitle>
					</Header>
					<AuthorText>
						{bookData.authors.length > 1 ? 'Authors: ' : 'Author: '}
						{authorName}
					</AuthorText>
					<BodyText>{bookData.description}</BodyText>

					<RatingText>Rating: {bookData.rating}</RatingText>

					<BackButton onClick={() => window.history.back()}>
						Go Back
					</BackButton>
				</BodyContainer>
			</Container>
		);
	} else if (error) {
		return <ErrorText>{error}</ErrorText>;
	} else return <LoadingText>Loading...</LoadingText>;
};

export default BookDetail;
