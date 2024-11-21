export type Author = {
	id: number;
	name: string;
};

export type BookDetails = {
	title: string;
	image: string;
	description: string;
	publishDate: number;
	numberOfPages: number;
	rating: number;
	authors: Author[];
};
