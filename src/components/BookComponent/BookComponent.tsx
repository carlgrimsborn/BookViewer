import { IBookComponent } from './types';

const BookComponent: React.FC<IBookComponent> = ({
	title,
	subTitle,
	image
}) => {
	return (
		<div>
			<h1>{title}</h1>
			{subTitle && <p>{subTitle}</p>}
			<img src={image} />
		</div>
	);
};

export default BookComponent;
