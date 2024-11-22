import axios from 'axios';
import { AxiosInstance } from 'axios';

export const books: AxiosInstance = axios.create({
	baseURL: 'https://api.bigbookapi.com'
});

export const bookDetail: AxiosInstance = axios.create({
	baseURL: 'https://api.bigbookapi.com',
	params: new URLSearchParams([
		['api-key', 'e01fd196acd74a05a1fde11b4b7f7867']
	])
});
