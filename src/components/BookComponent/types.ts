export interface IBookComponent {
	title: string;
	subTitle?: string;
	image: string;
	id: number;
	onToggleFavoriteBook: React.MouseEventHandler<HTMLDivElement>;
	isFavorite: boolean;
}
