import BookComponent from '../../components/BookComponent/BookComponent';
import { useBooks } from './hooks';

const BookViewer = () => {
	const { booksData, error, setOffset } = useBooks();

	if (booksData.length > 0) {
		return (
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 bg-slate-100'>
				{booksData.map(({ id, image, subtitle, title }) => (
					<BookComponent
						key={id}
						title={title}
						subTitle={subtitle}
						image={image}
						id={id}
					/>
				))}
			</div>
		);
	} else if (error) {
		return <p>{error}</p>;
	} else return <div>Loading...</div>;
};

export default BookViewer;
