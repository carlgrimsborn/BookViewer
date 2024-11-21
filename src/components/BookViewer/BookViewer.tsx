import { useEffect, useState } from 'react';
import { isAxiosError, AxiosError } from 'axios';
import { Book } from '../../types';
import BookComponent from '../BookComponent/BookComponent';
import mockData from '../../mockData';

const BookViewer = () => {
	const [booksData, setBooksData] = useState<Book[]>([]);
	const [error, setError] = useState<string | null>(null);
	useEffect(() => {
		const getBooks = async () => {
			try {
				// const response: ApiBooksResponse = await books.get(
				// 	'search-books'
				// );
				// const booksStateToSet = response.data.books.map(
				// 	(item) => item[0]
				// );
				// if (error) {
				// 	setError(null);
				// }
				const booksStateToSet = mockData.map((item) => item[0]);
				setBooksData(booksStateToSet);
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
		};
		getBooks();
	}, []);

	if (booksData.length > 0) {
		return (
			<div className='bg-gray-100'>
				{booksData.map(({ id, image, subtitle, title }) => (
					<BookComponent
						key={id}
						title={title}
						subTitle={subtitle}
						image={image}
					/>
				))}
			</div>
		);
	} else if (error) {
		return <p>{error}</p>;
	} else return <div>Loading...</div>;
};

export default BookViewer;
