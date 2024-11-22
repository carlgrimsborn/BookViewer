import { useEffect, useState } from 'react';
import { AxiosErrorData, Book } from '../../types';
import mockData from './mockData';
import { AxiosError, isAxiosError } from 'axios';

export const useBooks = () => {
	const [booksData, setBooksData] = useState<Book[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [offset, setOffset] = useState(20);
	useEffect(() => {
		const getBooks = async () => {
			try {
				// const response: ApiBooksResponse = await books.get(
				// 	'search-books',
				// 	{
				// 		params: new URLSearchParams([
				// 			['api-key', 'e01fd196acd74a05a1fde11b4b7f7867'],
				// 			['number', '20'],
				// 			['offset', `${offset}`]
				// 		])
				// 	}
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
					const axiosError = err as AxiosError<AxiosErrorData>;
					setError(
						axiosError.response?.data?.message || axiosError.message
					);
				} else {
					console.log('unknown error:', err);
					setError('Unknown Error');
				}
			}
		};
		getBooks();
	}, []);
	return {
		booksData,
		error,
		setOffset
	};
};