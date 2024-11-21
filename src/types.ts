export type Book = {
	id: number;
	title: string;
	subtitle?: string;
	image: string;
};

type ApiBookArray = Array<Array<Book>>;

export type ApiBooksResponse = {
	data: {
		books: ApiBookArray;
	};
};

export type ApiBookDetailResponse = {
	data: {
		id: number;
		title: string;
		image: string;
		authors: [
			{
				id: number;
				name: string;
			}
		];
		publish_date: number;
		number_of_pages: number;
		description: string;
		rating: {
			average: number;
		};
	};
};
