import { useEffect, useRef, useState } from 'react';
import { ApiBooksResponse, AxiosErrorData, Book } from '../../types';
import mockData from './mockData';
import { AxiosError, isAxiosError } from 'axios';
import { books } from '../../api/instances';
import useBookViewerContext from '../../context/useBookViewerContext';

export const useBooks = () => {
	const { booksData, setBooksData, offset } = useBookViewerContext();
	const [error, setError] = useState<string | null>(null);
	const fetchedOffsets = useRef<Set<number>>(new Set());

	useEffect(() => {
		const getBooks = async () => {
			if (fetchedOffsets.current.has(offset)) {
				return;
			}

			try {
				console.log('calls api');
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
				fetchedOffsets.current.add(offset);
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
	}, [offset]);
	return {
		booksData,
		error
	};
};
