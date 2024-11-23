import sampleBookImg from '../../assets/book.svg';
import {
	Container,
	Header,
	BookTitle,
	SubTitle,
	BodyText,
	RatingText,
	BackButton,
	Image,
	AuthorText,
	BodyContainer,
	RootContainer
} from './styles';
import { useBookDetail } from './hooks';
import { useNavigate, useParams } from 'react-router-dom';
import StatusDisplay from '../../components/StatusDisplay/StatusDisplay';

const BookDetail = () => {
	const { bookData, error } = useBookDetail();
	const navigate = useNavigate();

	let authorName = '';

	bookData?.authors.map((author, i) => {
		authorName = authorName + (i >= 1 ? ', ' : '') + author.name;
	});

	if (bookData) {
		return (
			<RootContainer>
				<Container>
					<Image
						src={bookData.image ? bookData.image : sampleBookImg}
						alt={bookData.title}
					/>
					<BodyContainer>
						<Header>
							<BookTitle>{bookData.title}</BookTitle>
							<SubTitle>
								Published: {bookData.publishDate}
							</SubTitle>
							<SubTitle>Pages: {bookData.numberOfPages}</SubTitle>
						</Header>
						<AuthorText>
							{bookData.authors.length > 1
								? 'Authors: '
								: 'Author: '}
							{authorName}
						</AuthorText>
						<BodyText>
							{bookData.description || bookData.subTitle}
						</BodyText>

						<RatingText>Rating: {bookData.rating}</RatingText>

						<BackButton onClick={() => navigate('/')}>
							Go Back
						</BackButton>
					</BodyContainer>
				</Container>
			</RootContainer>
		);
	} else if (error) {
		return <StatusDisplay type={'error'} message={error} />;
	} else return <StatusDisplay type='loading' message='Loading ...' />;
};

export default BookDetail;
