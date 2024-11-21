import { useState } from 'react';
import { BookDetails } from './types';
import sampleBookImg from '../../assets/book.svg';

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
	BodyContainer
} from './styles';

const BookDetail = () => {
	const [bookData, setBookData] = useState<BookDetails | null>({
		title: 'title',
		description: 'description',
		image: sampleBookImg,
		publishDate: '20/03/24',
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

	let authorName = '';

	bookData?.authors.map((author, i) => {
		authorName = authorName + (i >= 1 ? ', ' : '') + author.name;
	});

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
	} else return <LoadingText>Loading...</LoadingText>;
};

export default BookDetail;
