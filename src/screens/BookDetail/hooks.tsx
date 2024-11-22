import { useEffect, useState } from 'react';
import mockData from './mockData';
import { BookDetails } from './types';
import { AxiosError, isAxiosError } from 'axios';
import { ApiBookDetailResponse, AxiosErrorData } from '../../types';
import { bookDetail } from '../../api/instances';
import { useParams } from 'react-router-dom';

export const useBookDetail = () => {
	//const { id } = useParams();
	const [bookData, setBookData] = useState<BookDetails | null>(null);
	const [error, setError] = useState<string | null>(null);
	useEffect(() => {
		async function getBookDetails() {
			try {
				// const response: ApiBookDetailResponse = await bookDetail.get(
				// 	`${id}`
				// );
				const response = mockData;
				const booksStateToSet: BookDetails = {
					title: response.data.title,
					description: response.data.description,
					subTitle: response.data.subtitle,
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
					const axiosError = err as AxiosError<AxiosErrorData>;
					setError(
						axiosError.response?.data?.message || axiosError.message
					);
				} else {
					console.log('unknown error:', err);
					setError('Unknown Error');
				}
			}
		}
		getBookDetails();
	}, []);

	return {
		bookData,
		error
	};
};
