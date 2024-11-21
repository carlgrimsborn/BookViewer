import { IBookComponent } from './types';

const BookComponent: React.FC<IBookComponent> = ({
	title,
	subTitle,
	image
}) => {
	return (
		<div className='text-center bg-gray-200'>
			<h1 className='text-3xl font-bold'>{title}</h1>
			{subTitle && <p className='underline'>{subTitle}</p>}
			<img src={image} />
		</div>
	);
};

export default BookComponent;
