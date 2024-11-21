export type Book = {
	id: number;
	title: string;
	subtitle: string;
	image: string;
};

type ApiBookArray = Array<Array<Book>>;

export type ApiBooksResponse = {
	data: {
		books: ApiBookArray;
	};
};
