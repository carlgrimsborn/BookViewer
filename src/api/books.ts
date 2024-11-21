import axios from 'axios';
import { AxiosInstance } from 'axios';

const books: AxiosInstance = axios.create({
	baseURL: 'https://api.bigbookapi.com',
	params: new URLSearchParams([
		['api-key', 'e01fd196acd74a05a1fde11b4b7f7867'],
		['number', '20']
	])
});

export default books;
