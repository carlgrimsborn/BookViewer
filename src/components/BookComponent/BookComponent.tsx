import { IBookComponent } from './types';

const BookComponent: React.FC<IBookComponent> = ({
	title,
	subtitle,
	image
}) => {
	return (
		<div>
			<h1>{title}</h1>
			<p>{subtitle}</p>
			<img src={image} />
		</div>
	);
};

export default BookComponent;
